using System;
using System.Linq;
using System.Threading.Tasks;
using Brixel.Findr.API.Data;
using Brixel.Findr.API.DTO;
using Brixel.Findr.API.Infrastructure.Persistence;
using Microsoft.AspNetCore.Mvc;

namespace Brixel.Findr.API.Controllers
{
    [ApiController]
    [Route("games")]
    public class GameController : ControllerBase
    {
        private readonly IGameRepository _repository;

        public GameController(IGameRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<GameListDTO> Get()
        {
            var games = (await _repository.ListGames()).Select(x => new GameSummaryDTO()
            {
                Id = x.Id
            }).ToList();
            return new GameListDTO()
            {
                Games = games
            };
        }

        [HttpGet("{id}/players/{playerId}")]
        public async Task<CurrentGameDTO> Get(Guid id, Guid playerId)
        {
            var game = await _repository.OpenAsync(id);

            var player = game.Players.SingleOrDefault(x => x.Id == playerId);

            if (player == null)
            {
                return null;
            }

            return new CurrentGameDTO()
            {
                Id = game.Id,
                Player = new PlayerDTO()
                {
                    Id = player.Id,
                    Location = new LocationDTO()
                    {
                        Longitude = player.Location.Longitude,
                        Latitude = player.Location.Latitude
                    }
                }
            };
        }

        [HttpPost("create")]
        public async Task<CurrentGameDTO> Create()
        {
            var game = Game.Create();

            await _repository.SaveAsync(game);

            var player = game.Players.Single();
            return new CurrentGameDTO()
            {
                Id = game.Id,
                Player = new PlayerDTO()
                {
                    Id = player.Id,
                    Location = new LocationDTO()
                    {
                        Latitude = player.Location.Latitude,
                        Longitude = player.Location.Longitude
                    }
                }
            };
        }

        [HttpPost("{gameId}/join")]
        public async Task<CurrentGameDTO> Join([FromBody] JoinGameDTO joinGame)
        {
            var game = await _repository.OpenAsync(joinGame.GameId);

            var player = game.Join();

            await _repository.SaveAsync(game);

            return new CurrentGameDTO()
            {
                Id = game.Id,
                Player = new PlayerDTO()
                {
                    Id = player.Id,
                    Location = new LocationDTO()
                    {
                        Latitude = player.Location.Latitude,
                        Longitude = player.Location.Longitude
                    }
                }
            };
        }

        [HttpPost("{gameId}/players/{playerId}/move")]
        public async Task<CurrentGameDTO> Move([FromBody] MovePlayerRequestDTO movePlayerRequest)
        {

            var game = await _repository.OpenAsync(movePlayerRequest.GameId);

            var player = game.MovePlayer(movePlayerRequest.PlayerId, movePlayerRequest.Location.Latitude,
                movePlayerRequest.Location.Longitude);

            await _repository.SaveAsync(game);
            return new CurrentGameDTO()
            {
                Id = game.Id,
                Player = new PlayerDTO()
                {
                    Id = player.Id,
                    Location = new LocationDTO()
                    {
                        Latitude = player.Location.Latitude,
                        Longitude = player.Location.Longitude
                    }
                }
            };

        }
    }
}