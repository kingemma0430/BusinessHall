using Microsoft.AspNetCore.Antiforgery;
using BusinessHall.Controllers;

namespace BusinessHall.Web.Host.Controllers
{
    public class AntiForgeryController : BusinessHallControllerBase
    {
        private readonly IAntiforgery _antiforgery;

        public AntiForgeryController(IAntiforgery antiforgery)
        {
            _antiforgery = antiforgery;
        }

        public void GetToken()
        {
            _antiforgery.SetCookieTokenAndHeader(HttpContext);
        }
    }
}
