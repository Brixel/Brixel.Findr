namespace Brixel.Findr.API.Controllers
{
    using System;

    public class PlayerDTO
    {
        public Guid Id { get; set; }
        public double Distance { get; set; }
        public string Color { get; set; }
    }
}