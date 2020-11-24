using System;

namespace Brixel.Findr.API.DTO
{
    internal class PlayerDTO
    {
        public Guid Id { get; set; }

        public LocationDTO Location { get; set; }
    }
}