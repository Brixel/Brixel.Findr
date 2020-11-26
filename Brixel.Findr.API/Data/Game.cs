using System;
using System.Collections.Generic;
using ProtoBuf;

namespace Brixel.Findr.API.Data
{
    [ProtoContract]
    public class Game
    {
        [ProtoMember(1)]
        public Guid Id { get; set; }

        [ProtoMember(20)]
        private List<Player> _players;
        [ProtoIgnore]
        public IReadOnlyList<Player> Players => _players;

        private Game()
        {
            _players = new List<Player>();
        }
        public static Game Create()
        {
            var game = new Game()
            {
                Id = Guid.NewGuid()
            };
            game.Join();
            return game;
        }

        public void Join()
        {
            _players.Add(Player.Create());
        }
    }
}