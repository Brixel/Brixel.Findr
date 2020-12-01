using System;

namespace Brixel.Findr.API.DTO
{
    public class MovePlayerRequestDTO
    {
        public Guid GameId { get; set; }
        public Guid PlayerId { get; set; }
        public LocationDTO Location { get; set; }
    }
}