using System;
using System.Collections.Generic;
using Brixel.Findr.API.Controllers;

namespace Brixel.Findr.API.DTO
{
    public class GameDTO
    {
        public Guid Id { get; set; }
        public IReadOnlyList<PlayerDTO> Players { get; set; }
    }

    public class CurrentGameDTO
    {
        public Guid Id { get; set; }
        public PlayerDTO Player { get; set; }
    }
}