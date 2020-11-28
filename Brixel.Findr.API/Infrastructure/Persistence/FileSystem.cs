using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Brixel.Findr.API.Data;
using Microsoft.Extensions.Logging;

namespace Brixel.Findr.API.Infrastructure.Persistence
{
    class GameRepository : IGameRepository
    {
        private readonly IFileSystem _fileSystem;
        private readonly ILogger<GameRepository> _logger;

        public GameRepository(IFileSystem fileSystem, ILogger<GameRepository> logger)
        {
            _fileSystem = fileSystem;
            _logger = logger;
        }

        public async Task SaveAsync(Game game)
        {
            await using var stream = new MemoryStream();
            ProtoBuf.Serializer.Serialize(stream, game);
            await _fileSystem.SaveAsync($"game-{game.Id}.pb", stream.ToArray());
        }

        public async Task<Game> OpenAsync(Guid id)
        {
            var gamebytes = await _fileSystem.ReadAsync($"game-{id}.pb");
            return Deserialize(gamebytes);
        }

        private static Game Deserialize(byte[] gamebytes)
        {
            var stream = new MemoryStream(gamebytes);
            return ProtoBuf.Serializer.Deserialize<Game>(stream);
        }

        public async Task<List<Game>> ListGames()
        {
            Directory.CreateDirectory("games");
            var filesInDirectory =
                Directory
                    .GetFiles("games").ToList();
            _logger.LogInformation($"Found {filesInDirectory.Count} files");
            var readTasks = filesInDirectory.Select(x =>
            {
                var file = new FileInfo(x);
                _logger.LogInformation($"Processing {file.Name}");
                return _fileSystem.ReadAsync(file.Name);
            });
            var tasks = await Task.WhenAll(readTasks);
            return tasks.Select(Deserialize).ToList();

        }
    }

    public interface IGameRepository
    {
        Task SaveAsync(Game game);
        Task<Game> OpenAsync(Guid id);
        Task<List<Game>> ListGames();
    }

    public class FileSystem : IFileSystem
    {
        public async Task SaveAsync(string filename, byte[] bytes)
        {
            Directory.CreateDirectory("games");
            await File.WriteAllBytesAsync($"games/{filename}", bytes);
        }

        public async Task<byte[]> ReadAsync(string filename)
        {
            await using var stream = File.Open($"games/{filename}", FileMode.Open);
            var buffer = new byte[stream.Length];   
            await stream.ReadAsync(buffer, 0, (int)stream.Length);
            return buffer;
        }
    }

    public interface IFileSystem
    {
        public Task SaveAsync(string filename, byte[] bytes);
        public Task<byte[]> ReadAsync(string filename);
    }
}
