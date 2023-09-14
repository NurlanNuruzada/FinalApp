﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace Echooling.Aplication.DTOs.EventDTOs
{
    public class EventGetDto
    {
        public Guid GuId { get; set; }
        public string? image { get; set; }
        public DateTime? EventStartDate { get; set; }
        public DateTime? EventFinishDate { get; set; }
        public decimal? Cost { get; set; }
        public string? orginazer { get; set; }
        public int? TotalSlot { get; set; }
        public string? Location { get; set; }
        public string? EventTitle { get; set; }
        public string? AboutEvent { get; set; }
    }

}
