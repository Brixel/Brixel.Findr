using System;
using System.Collections.Generic;
using Brixel.Findr.API.Controllers;
using GoogleApi.Entities.Maps.Roads.Common;

namespace Brixel.Findr.API.Data
{
    internal class Game
    {
        public Guid Id { get; set; }
        public IReadOnlyList<Player> Players { get; set; }
        public void Start()
        {
            Players = new List<Player>()
            {
                new Player()
                {
                    Id = Guid.NewGuid(),
                    Location = new Location(50.925948, 5.349982)
                }
            };
        }
    }
}