using System;

namespace Brixel.Findr.API.DTO
{
    public class CurrentPlayerDTO
    {
        public Guid Id { get; set; }

        public LocationDTO Location { get; set; }
    }
}