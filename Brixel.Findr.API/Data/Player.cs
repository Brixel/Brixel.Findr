using System;
using GoogleApi.Entities.Maps.Roads.Common;

namespace Brixel.Findr.API.Data
{
    internal class Player
    {
        public Guid Id { get; set; }
        public Location Location { get; set; }
    }
}