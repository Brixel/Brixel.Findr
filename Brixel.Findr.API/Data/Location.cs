using ProtoBuf;

namespace Brixel.Findr.API.Data
{
    [ProtoContract]
    public class Location
    {
        private Location()
        {
            
        }
        public Location(double longitude, double latitude)
        {
            Longitude = longitude;
            Latitude = latitude;
        }

        [ProtoMember(1)]
        public double Longitude { get; set;}
        [ProtoMember(2)]
        public double Latitude { get; set; }
    }
}