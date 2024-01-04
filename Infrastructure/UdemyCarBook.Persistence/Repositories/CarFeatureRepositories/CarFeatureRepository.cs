using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UdemyCarBook.Application.Interfaces.CarFeatureInterfaces;
using UdemyCarBook.Domain.Entities;
using UdemyCarBook.Persistence.Context;

namespace UdemyCarBook.Persistence.Repositories.CarFeatureRepositories
{
    public class CarFeatureRepository : ICarFeatureRepository
    {
        private readonly CarBookContext _context;
        public CarFeatureRepository(CarBookContext context)
        {
            _context = context;
        }
        public List<CarFeature> GetCarFeaturesByCarID(int carID)
        {
            var values = _context.CarFeatures.Include(y => y.Feature).Where(x => x.CarID == carID).ToList();
            return values;
        }
    }
}
