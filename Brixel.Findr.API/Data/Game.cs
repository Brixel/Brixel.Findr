using System;
using System.Collections.Generic;
using System.Linq;
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

        public Player Join()
        {
            var player = Player.Create();
            _players.Add(player);
            return player;
        }

        public Player MovePlayer(Guid playerId, in double latitude, in double longitude)
        {
            var player = _players.SingleOrDefault(x => x.Id == playerId);

            player.MoveTo(latitude, longitude);
            return player;
        }

    }
}