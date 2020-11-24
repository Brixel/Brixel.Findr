using System.Linq;
using Brixel.Findr.API.Data;
using Brixel.Findr.API.DTO;
using Microsoft.AspNetCore.Mvc;

namespace Brixel.Findr.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    class GameController : ControllerBase
    {
        [HttpPost("create")]
        public GameDTO Create()
        {
            var game = new Game();
            
            game.Start();

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
        public void Join([FromBody] JoinGameDTO joinGame)
        {
        }
    }
}