using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UdemyCarBook.Application.Features.Mediator.Queries.BlogQueries;
using UdemyCarBook.Application.Features.Mediator.Queries.CarPricingQueries;
using UdemyCarBook.Application.Features.Mediator.Results.BlogResults;
using UdemyCarBook.Application.Features.Mediator.Results.CarPricingResults;
using UdemyCarBook.Application.Interfaces.BlogInterfaces;
using UdemyCarBook.Application.Interfaces.CarPricingInterfaces;
using UdemyCarBook.Domain.Entities;

namespace UdemyCarBook.Application.Features.Mediator.Handlers.CarPricingHandlers
{
    public class GetCarPricingWithTimePeriodQueryHandler : IRequestHandler<GetCarPricingWithTimePeriodQuery, List<GetCarPricingWithTimePeriodQueryResult>>
    {
        private readonly ICarPricingRepository _repository;
        public GetCarPricingWithTimePeriodQueryHandler(ICarPricingRepository repository)
        {
            _repository = repository;
        }
        public async Task<List<GetCarPricingWithTimePeriodQueryResult>> Handle(GetCarPricingWithTimePeriodQuery request, CancellationToken cancellationToken)
        {
            var values = _repository.GetCarPricingWithTimePeriod1();
            return values.Select(x => new GetCarPricingWithTimePeriodQueryResult
            {
                Brand = x.Brand,
                Model = x.Model,
                CoverImageUrl = x.CoverImageUrl,
                DailyAmount = x.Amounts[0],
                WeeklyAmount = x.Amounts[1],
                MonthlyAmount = x.Amounts[2]
            }).ToList();
        }
    }
}
