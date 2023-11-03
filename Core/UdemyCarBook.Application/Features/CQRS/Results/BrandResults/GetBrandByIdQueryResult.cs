using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UdemyCarBook.Application.Features.CQRS.Results.BrandResults
{
    public class GetBrandByIdQueryResult
    {
        public int BrandID { get; set; }
        public string Name { get; set; }
    }
}
