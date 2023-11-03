using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UdemyCarBook.Domain.Entities
{
    public class CarDescription
    {
        public int CarDescriptionID { get; set; }
        public int CarID { get; set; }
        public Car Car { get; set; }
        public string Details { get; set; }

    }
}
