using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UdemyCarBook.Application.Features.Mediator.Commands.FooterAddressCommands
{
    public class RemoveFooterAddressCommand : IRequest
    {
        public int Id { get; set; }

        public RemoveFooterAddressCommand(int id)
        {
            Id = id;
        }
    }
}
