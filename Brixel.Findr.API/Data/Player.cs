using System;
using ProtoBuf;

namespace Brixel.Findr.API.Data
{
    using Geolocation;

    [ProtoContract]
    public class Player
    {
        [ProtoMember(1)]
        public Guid Id { get; private set; }
        [ProtoMember(2)]
        public Location Location { get; private set; }


        [ProtoMember(3)]
        public string Color { get; private set; }
        private Player()
        {
            
        }
        public static Player Create(Location location)
        {
            return new Player()
            {
                Id = Guid.NewGuid(),
                Location = location,
                Color = GenerateRandomHexColor()
            };
        }

        private static string GenerateRandomHexColor()
        {
            var random = new Random();
            var color = $"#{random.Next(0x1000000):X6}";
            return color;
        }

        public void MoveTo(in double latitude, in double longitude)
        {
            Location = new Location(longitude, latitude);
        }

        public double DistanceFrom(in double latitude, in double longitude)
        {
            var currentPlayersCoordinates = new Coordinate(Location.Latitude, Location.Longitude);
            var originCoordinate = new Coordinate(latitude, longitude);
            var distance =
                GeoCalculator.GetDistance(originCoordinate, currentPlayersCoordinates, 0, DistanceUnit.Meters);
            return distance;
        }
    }
}