using System;

namespace Brixel.Findr.API.DTO
{
    using Data;

    public class CurrentGameDTO
    {
        public Guid Id { get; set; }
        public CurrentPlayerDTO CurrentPlayer { get; set; }
        public GameStates GameState { get; set; }
    }
}