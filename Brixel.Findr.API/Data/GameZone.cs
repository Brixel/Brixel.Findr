namespace Brixel.Findr.API.Data
{
    using System;
    using Geolocation;
    using ProtoBuf;

    [ProtoContract]
    internal class GameZone
    {
        [ProtoMember(1)]
        public Location Center { get; private set; }

        [ProtoMember(2)]
        public double RadiusInMeter { get; set; }

        [ProtoIgnore]
        public CoordinateBoundaries Boundaries => new CoordinateBoundaries(Center.Latitude, Center.Longitude, RadiusInMeter, DistanceUnit.Meters);
        private GameZone()
        {

        }
        public static GameZone Create()
        {
            return new GameZone()
            {
                Center = new Location( 5.349982, 50.925948), // Hasselt center
                RadiusInMeter = 2000
            };
        }

        public Location GetRandomLocation()
        {
            var randomLatitude = new Random().NextDouble() * (Boundaries.MaxLatitude - Boundaries.MinLatitude) + Boundaries.MaxLatitude;   
            var randomLongitude = new Random().NextDouble() * (Boundaries.MaxLongitude - Boundaries.MinLongitude) + Boundaries.MaxLongitude;
            return new Location(randomLongitude, randomLatitude);
        }
    }
}