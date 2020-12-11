namespace Brixel.Findr.API.Controllers
{
    using System;
    using System.Collections.Generic;

    public class CurrentPlayersDTO
    {
        public Guid GameId { get; set; }

        public CurrentPlayersDTO()
        {
            Players = new List<PlayerDTO>();
        }
        public IReadOnlyList<PlayerDTO> Players { get; set; }
    }
}