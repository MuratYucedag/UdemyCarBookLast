using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UdemyCarBook.Application.ViewModels;
using UdemyCarBook.Domain.Entities;

namespace UdemyCarBook.Application.Interfaces.CarPricingInterfaces
{
    public interface ICarPricingRepository
    {
        List<CarPricing> GetCarPricingWithCars();
        List<CarPricing> GetCarPricingWithTimePeriod();
        List<CarPricingViewModel> GetCarPricingWithTimePeriod1();

	}
}
