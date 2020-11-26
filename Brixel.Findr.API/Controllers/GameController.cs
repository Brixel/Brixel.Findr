﻿using System;
using System.Linq;
using System.Threading.Tasks;
using Brixel.Findr.API.Data;
using Brixel.Findr.API.DTO;
using Brixel.Findr.API.Infrastructure.Persistence;
using Microsoft.AspNetCore.Mvc;

namespace Brixel.Findr.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GameController : ControllerBase
    {
        private readonly IGameRepository _repository;

        public GameController(IGameRepository repository)
        {
            _repository = repository;
        }


        [HttpGet("{id}/player/{playerId}")]
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
        public async Task<GameDTO> Create()
        {
            var game = Game.Create();
            
            await _repository.SaveAsync(game);
            return new GameDTO()
            {
                Id = game.Id,
                Players = game.Players.Select(p => new PlayerDTO()
                {
                    Id = p.Id,
                    Location = new LocationDTO()
                    {
                        Latitude = p.Location.Latitude,
                        Longitude = p.Location.Longitude
                    }
                }).ToList()
            };
        }

        [HttpPost("join")]
        public async Task<GameDTO> Join([FromBody] JoinGameDTO joinGame)
        {
            var game = await _repository.OpenAsync(joinGame.GameId);
            game.Join();
            await _repository.SaveAsync(game);
            return new GameDTO()
            {
                Id = game.Id,
                Players = game.Players.Select(p => new PlayerDTO()
                {
                    Id = p.Id,
                    Location = new LocationDTO()
                    {
                        Latitude = p.Location.Latitude,
                        Longitude = p.Location.Longitude
                    }
                }).ToList()
            };
        }
    }
}