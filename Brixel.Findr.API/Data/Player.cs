﻿using System;
using ProtoBuf;

namespace Brixel.Findr.API.Data
{
    using Geolocation;

    [ProtoContract]
    public class Player
    {
        [ProtoMember(1)]
        public Guid Id { get; set; }
        [ProtoMember(2)]
        public Location Location { get; set; }
        private Player()
        {
            
        }
        public static Player Create()
        {
            return new Player()
            {
                Id = Guid.NewGuid(),
                Location = new Location( 5.349982, 50.925948)
        };
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