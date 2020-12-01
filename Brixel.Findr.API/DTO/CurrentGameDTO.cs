using System;

namespace Brixel.Findr.API.DTO
{
    public class CurrentGameDTO
    {
        public Guid Id { get; set; }
        public PlayerDTO Player { get; set; }
    }
}