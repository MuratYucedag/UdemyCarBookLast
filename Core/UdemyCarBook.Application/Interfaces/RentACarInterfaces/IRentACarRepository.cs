using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using UdemyCarBook.Domain.Entities;

namespace UdemyCarBook.Application.Interfaces.RentACarInterfaces
{
    public interface IRentACarRepository
    {
        Task<List<RentACar>> GetByFilterAsync(Expression<Func<RentACar, bool>> filter);
    }
}
