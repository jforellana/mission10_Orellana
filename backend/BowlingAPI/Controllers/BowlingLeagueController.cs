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

        public IEnumerable<Object> Get()
        {
            //var bData = _repo.Bowlers.ToArray();
            //return bData;

            var jData = from bowler in _repo.Bowlers
                        join team in _repo.Teams
                        on bowler.TeamId equals team.TeamId
                        where team.TeamName == "Marlins" || team.TeamName == "Sharks"
                        select new
                        {
                            BowlerId = bowler.BowlerId,
                            BowlerFirstName = bowler.BowlerFirstName,
                            BowlerMiddleInit = bowler.BowlerMiddleInit,
                            BowlerLastName = bowler.BowlerLastName,
                            BowlerAddress = bowler.BowlerAddress,
                            BowlerCity = bowler.BowlerCity,
                            BowlerState = bowler.BowlerState,
                            BowlerZip = bowler.BowlerZip,
                            BowlerPhoneNumber = bowler.BowlerPhoneNumber,
                            TeamName = team.TeamName
                        };
            var dataList = jData.ToList();

            return dataList;

        }
    }
}
