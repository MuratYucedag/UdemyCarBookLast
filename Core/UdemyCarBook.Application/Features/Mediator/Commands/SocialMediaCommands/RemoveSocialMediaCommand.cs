using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UdemyCarBook.Application.Features.Mediator.Commands.SocialMediaCommands
{
    public class RemoveSocialMediaCommand:IRequest
    {
        public int Id { get; set; }

        public RemoveSocialMediaCommand(int id)
        {
            Id = id;
        }
    }
}
