using System;
using System.Collections.Generic;

namespace Brixel.Findr.API.DTO
{
    public class GameListDTO
    {
        public IReadOnlyList<GameDTO> Games { get; set; }
        public class GameDTO
        {
            public Guid Id { get; set; }
        }
    }
}