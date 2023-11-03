using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UdemyCarBook.Application.Features.Mediator.Commands.FeatureCommands
{
    public class RemoveFeatureCommand:IRequest
    {
        public int Id { get; set; }

        public RemoveFeatureCommand(int id)
        {
            Id = id;
        }
    }
}
