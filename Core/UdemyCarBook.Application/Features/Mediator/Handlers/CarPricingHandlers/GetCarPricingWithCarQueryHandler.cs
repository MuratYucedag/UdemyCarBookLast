using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UdemyCarBook.Application.Features.Mediator.Queries.CarPricingQueries;
using UdemyCarBook.Application.Features.Mediator.Results.BlogResults;
using UdemyCarBook.Application.Features.Mediator.Results.CarPricingResults;
using UdemyCarBook.Application.Features.Mediator.Results.LocationResults;
using UdemyCarBook.Application.Interfaces.CarPricingInterfaces;

namespace UdemyCarBook.Application.Features.Mediator.Handlers.CarPricingHandlers
{
    public class GetCarPricingWithCarQueryHandler : IRequestHandler<GetCarPricingWithCarQuery, List<GetCarPricingWithCarQueryResult>>
    {
        private readonly ICarPricingRepository _repository;
        public GetCarPricingWithCarQueryHandler(ICarPricingRepository repository)
        {
            _repository = repository;
        }
        public async Task<List<GetCarPricingWithCarQueryResult>> Handle(GetCarPricingWithCarQuery request, CancellationToken cancellationToken)
        {
            var values = _repository.GetCarPricingWithCars();
            return values.Select(x => new GetCarPricingWithCarQueryResult
            {
                Amount = x.Amount,
                CarPricingId = x.CarPricingID,
                Brand = x.Car.Brand.Name,
                CoverImageUrl = x.Car.CoverImageUrl,
                Model = x.Car.Model,
                CarId=x.CarID
            }).ToList();
        }
    }
}
