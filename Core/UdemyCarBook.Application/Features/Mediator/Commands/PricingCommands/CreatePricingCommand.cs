using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UdemyCarBook.Application.Features.Mediator.Commands.PricingCommands
{
    public class CreatePricingCommand : IRequest
    {
        public string Name { get; set; }
    }
}
