﻿namespace BowlingAPI.Models
{
    public class EFBowlingRepository:IBowlingRepository
    {
        private BowlingLeagueContext _context;
        public EFBowlingRepository(BowlingLeagueContext temp)
        {
            _context = temp;
        }
        public IEnumerable<Bowler> Bowlers => _context.Bowlers;
    }
}
