import { Sport, Team, Game, Player } from '../types';

export const teams: Record<Sport, Team[]> = {
  NBA: [
    {
      id: '1',
      name: 'Los Angeles Lakers',
      abbreviation: 'LAL',
      logo: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=100',
      stats: { wins: 34, losses: 29, winPercentage: 0.540 }
    },
    {
      id: '2',
      name: 'Golden State Warriors',
      abbreviation: 'GSW',
      logo: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&q=80&w=100',
      stats: { wins: 32, losses: 31, winPercentage: 0.508 }
    },
    {
      id: '3',
      name: 'Boston Celtics',
      abbreviation: 'BOS',
      logo: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=100',
      stats: { wins: 48, losses: 14, winPercentage: 0.774 }
    }
  ],
  NFL: [
    {
      id: '1',
      name: 'Kansas City Chiefs',
      abbreviation: 'KC',
      logo: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&q=80&w=100',
      stats: { wins: 11, losses: 6, winPercentage: 0.647 }
    },
    {
      id: '2',
      name: 'San Francisco 49ers',
      abbreviation: 'SF',
      logo: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&q=80&w=100',
      stats: { wins: 12, losses: 5, winPercentage: 0.706 }
    },
    {
      id: '3',
      name: 'Baltimore Ravens',
      abbreviation: 'BAL',
      logo: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&q=80&w=100',
      stats: { wins: 13, losses: 4, winPercentage: 0.765 }
    }
  ],
  MLB: [
    {
      id: '1',
      name: 'New York Yankees',
      abbreviation: 'NYY',
      logo: 'https://images.unsplash.com/photo-1471295253337-3ceaaad65897?auto=format&fit=crop&q=80&w=100',
      stats: { wins: 82, losses: 80, winPercentage: 0.506 }
    },
    {
      id: '2',
      name: 'Los Angeles Dodgers',
      abbreviation: 'LAD',
      logo: 'https://images.unsplash.com/photo-1471295253337-3ceaaad65897?auto=format&fit=crop&q=80&w=100',
      stats: { wins: 100, losses: 62, winPercentage: 0.617 }
    },
    {
      id: '3',
      name: 'Boston Red Sox',
      abbreviation: 'BOS',
      logo: 'https://images.unsplash.com/photo-1471295253337-3ceaaad65897?auto=format&fit=crop&q=80&w=100',
      stats: { wins: 78, losses: 84, winPercentage: 0.481 }
    }
  ]
};

export const games: Record<Sport, Game[]> = {
  NBA: [
    {
      id: '1',
      homeTeam: teams.NBA[0],
      awayTeam: teams.NBA[1],
      date: '2024-03-15T19:30:00Z',
      status: 'live',
      score: { home: 87, away: 82 }
    },
    {
      id: '2',
      homeTeam: teams.NBA[2],
      awayTeam: teams.NBA[0],
      date: '2024-03-16T20:00:00Z',
      status: 'scheduled'
    }
  ],
  NFL: [
    {
      id: '1',
      homeTeam: teams.NFL[0],
      awayTeam: teams.NFL[1],
      date: '2024-03-15T18:00:00Z',
      status: 'finished',
      score: { home: 24, away: 21 }
    }
  ],
  MLB: [
    {
      id: '1',
      homeTeam: teams.MLB[0],
      awayTeam: teams.MLB[1],
      date: '2024-03-15T17:00:00Z',
      status: 'live',
      score: { home: 5, away: 3 }
    }
  ]
};

export const players: Record<Sport, Player[]> = {
  NBA: [
    {
      id: '1',
      name: 'LeBron James',
      team: 'Los Angeles Lakers',
      position: 'SF',
      stats: {
        points: 25.8,
        rebounds: 7.2,
        assists: 8.1
      }
    },
    {
      id: '2',
      name: 'Stephen Curry',
      team: 'Golden State Warriors',
      position: 'PG',
      stats: {
        points: 28.4,
        rebounds: 4.5,
        assists: 6.3
      }
    }
  ],
  NFL: [
    {
      id: '1',
      name: 'Patrick Mahomes',
      team: 'Kansas City Chiefs',
      position: 'QB',
      stats: {
        passingYards: 4183,
        touchdowns: 37,
        interceptions: 14
      }
    }
  ],
  MLB: [
    {
      id: '1',
      name: 'Aaron Judge',
      team: 'New York Yankees',
      position: 'RF',
      stats: {
        battingAverage: 0.267,
        homeRuns: 37,
        rbi: 75
      }
    }
  ]
};

export const predictions = {
  NBA: [
    {
      gameId: '1',
      homeTeamWinProbability: 0.58,
      predictedScore: { home: 112, away: 108 },
      keyFactors: ['Home court advantage', 'Recent team performance']
    }
  ],
  NFL: [
    {
      gameId: '1',
      homeTeamWinProbability: 0.62,
      predictedScore: { home: 27, away: 21 },
      keyFactors: ['Strong defensive matchup', 'Weather conditions']
    }
  ],
  MLB: [
    {
      gameId: '1',
      homeTeamWinProbability: 0.55,
      predictedScore: { home: 6, away: 4 },
      keyFactors: ['Pitching matchup', 'Batting statistics']
    }
  ]
};