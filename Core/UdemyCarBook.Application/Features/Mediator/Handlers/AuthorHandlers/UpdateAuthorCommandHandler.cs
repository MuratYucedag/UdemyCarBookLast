using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UdemyCarBook.Application.Features.Mediator.Commands.AuthorCommands;
using UdemyCarBook.Application.Interfaces;
using UdemyCarBook.Domain.Entities;

namespace UdemyCarBook.Application.Features.Mediator.Handlers.AuthorHandlers
{
    public class UpdatePricingCommandHandler : IRequestHandler<UpdateAuthorCommand>
    {
        private readonly IRepository<Author> _repository;
        public UpdatePricingCommandHandler(IRepository<Author> repository)
        {
            _repository = repository;
        }
        public async Task Handle(UpdateAuthorCommand request, CancellationToken cancellationToken)
        {
            var values = await _repository.GetByIdAsync(request.AuthorID);
            values.Name = request.Name;
            values.Description = request.Description;
            values.ImageUrl = request.ImageUrl;
            await _repository.UpdateAsync(values);
        }
    }
}
