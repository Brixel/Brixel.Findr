using System;
using System.Collections.Generic;
using System.Linq;
using ProtoBuf;

namespace Brixel.Findr.API.Data
{
    using Geolocation;

    [ProtoContract]
    public class Game
    {
        [ProtoMember(1)]
        public Guid Id { get; set; }

        [ProtoMember(20)]
        private List<Player> _players;

        [ProtoMember(3)]
        private Location _center;

        [ProtoMember(4)]
        public double _radiusInMeters;

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
                Id = Guid.NewGuid(),
                _center = new Location(5.349982, 50.925948),
                _radiusInMeters = 200
            };
            game.Join();
            return game;
        }

        public Player Join()
        {
            var startLocation = GetRandomLocation();
            var player = Player.Create(startLocation);
            _players.Add(player);
            return player;
        }

        private Location GetRandomLocation()
        {
            var boundaries = new CoordinateBoundaries(_center.Latitude, _center.Longitude, _radiusInMeters, DistanceUnit.Meters);

            double minLatitude = boundaries.MinLatitude;
            double maxLatitude = boundaries.MaxLatitude;
            double minLongitude = boundaries.MinLongitude;
            double maxLongitude = boundaries.MaxLongitude;

            var random = new Random();
            var latitude = random.NextDouble() * (maxLatitude - minLatitude) + maxLatitude;
            var longitude = random.NextDouble() * (maxLongitude - minLongitude) + maxLongitude;

            return new Location(longitude, latitude);
        }

        public Player MovePlayer(Guid playerId, in double latitude, in double longitude)
        {
            var player = _players.SingleOrDefault(x => x.Id == playerId);

            player.MoveTo(latitude, longitude);
            return player;
        }

    }
}