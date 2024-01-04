using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UdemyCarBook.Application.Features.Mediator.Commands.CommentCommands;
using UdemyCarBook.Application.Features.Mediator.Commands.ReservationCommands;
using UdemyCarBook.Application.Features.RepositoryPattern;
using UdemyCarBook.Domain.Entities;

namespace UdemyCarBook.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentsController : ControllerBase
    {
        private readonly IGenericRepository<Comment> _commentsRepository;
        private readonly IMediator _mediator;
        public CommentsController(IGenericRepository<Comment> commentsRepository, IMediator mediator)
        {
            _commentsRepository = commentsRepository;
            _mediator = mediator;
        }

        [HttpGet]
        public IActionResult CommentList()
        {
            var values = _commentsRepository.GetAll();
            return Ok(values);
        }

        [HttpPost]
        public IActionResult CreateComment(Comment comment)
        {           
            _commentsRepository.Create(comment);
            return Ok("Yorum başarıyla eklendi");
        }

        [HttpDelete]
        public IActionResult RemoveComment(int id)
        {
            var value = _commentsRepository.GetById(id);
            _commentsRepository.Remove(value);
            return Ok("Yorum başarıyla silindi");
        }

        [HttpPut]
        public IActionResult UpdateComment(Comment comment)
        {
            _commentsRepository.Update(comment);
            return Ok("Yorum başarıyla silindi");
        }

        [HttpGet("{id}")]
        public IActionResult GetComment(int id)
        {
            var value = _commentsRepository.GetById(id);
            return Ok(value);
        }

        [HttpGet("CommentListByBlog")]
        public IActionResult CommentListByBlog(int id)
        {
            var value = _commentsRepository.GetCommentsByBlogId(id);
            return Ok(value);
        }

        [HttpGet("CommentCountByBlog")]
        public IActionResult CommentCountByBlog(int id)
        {
            var value=_commentsRepository.GetCountCommentByBlog(id);
            return Ok(value);
        }

        [HttpPost("CreateCommentWithMediator")]
        public async Task<IActionResult> CreateCommentWithMediator(CreateCommentCommand command)
        {
            await _mediator.Send(command);
            return Ok("Yorum başarıyla eklendi");
        }
    }
}
