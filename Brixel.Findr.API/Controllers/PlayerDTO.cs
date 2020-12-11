namespace Brixel.Findr.API.Controllers
{
    using System;

    public class PlayerDTO
    {
        public Guid Id { get; set; }
        public bool IsSelf { get; set; }
        public double Distance { get; set; }
    }
}