using BowlingAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BowlingAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlingLeagueController : ControllerBase
    {
        private IBowlingRepository _repo;
        public BowlingLeagueController(IBowlingRepository temp) {
            _repo = temp;
        }

        public IEnumerable<Bowler> Get()
        {
            var bData = _repo.Bowlers.ToArray();
            return bData;
        }
    }
}
