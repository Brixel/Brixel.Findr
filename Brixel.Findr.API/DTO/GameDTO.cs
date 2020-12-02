﻿using System;
using System.Collections.Generic;

namespace Brixel.Findr.API.DTO
{
    public class GameDTO
    {
        public Guid Id { get; set; }
        public IReadOnlyList<PlayerDTO> Players { get; set; }
    }
}