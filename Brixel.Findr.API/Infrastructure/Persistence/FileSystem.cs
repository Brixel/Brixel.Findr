using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Brixel.Findr.API.Data;

namespace Brixel.Findr.API.Infrastructure.Persistence
{
    class GameRepository : IGameRepository
    {
        private readonly IFileSystem _fileSystem;

        public GameRepository(IFileSystem fileSystem)
        {
            _fileSystem = fileSystem;
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
            var stream = new MemoryStream(gamebytes);
            return ProtoBuf.Serializer.Deserialize<Game>(stream);
        }
    }

    public interface IGameRepository
    {
        Task SaveAsync(Game game);
        Task<Game> OpenAsync(Guid id);
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
