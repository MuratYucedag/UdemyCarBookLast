using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UdemyCarBook.Application.Features.CQRS.Queries.BannerQueries
{
    public class GetBannerByIdQuery
    {
        public int Id { get; set; }
        public GetBannerByIdQuery(int id)
        {
            Id = id;
        }
    }
}
