using System;
using ProtoBuf;

namespace Brixel.Findr.API.Data
{
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
    }
}