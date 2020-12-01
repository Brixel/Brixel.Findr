using System;
using System.Collections.Generic;

namespace Brixel.Findr.API.DTO
{
    public class GameListDTO
    {
        public IReadOnlyList<GameSummaryDTO> Games { get; set; }
    }
}