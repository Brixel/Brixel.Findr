namespace Brixel.Findr.API.Controllers
{
    using System;

    public class CurrentPlayerRequestDTO
    {
        public Guid GameId { get; set; }
        public Guid CurrentPlayerId { get; set; }
    }
}