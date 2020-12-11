using System;

namespace Brixel.Findr.API.DTO
{
    public class CurrentGameDTO
    {
        public Guid Id { get; set; }
        public CurrentPlayerDTO CurrentPlayer { get; set; }
    }
}