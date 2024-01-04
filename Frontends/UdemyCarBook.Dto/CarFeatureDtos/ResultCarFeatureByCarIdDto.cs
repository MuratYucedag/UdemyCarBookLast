using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UdemyCarBook.Dto.CarFeatureDtos
{
    public class ResultCarFeatureByCarIdDto
    {
        public int CarFeatureID { get; set; }
        public int FeatureID { get; set; }
        public string FeatureName { get; set; }
        public bool Available { get; set; }
    }
}
