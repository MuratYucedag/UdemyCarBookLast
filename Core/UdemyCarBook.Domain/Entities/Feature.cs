using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UdemyCarBook.Domain.Entities
{
    public class Feature
    {
        public int FeatureID { get; set; }
        public string Name { get; set; }
        public List<CarFeature> CarFeatures { get; set; }
    }
}
