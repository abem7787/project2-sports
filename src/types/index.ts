export type Sport = 'NBA' | 'NFL' | 'MLB';

export interface Team {
  id: string;
  name: string;
  abbreviation: string;
  logo: string;
  stats: {
    wins: number;
    losses: number;
    winPercentage: number;
  };
}

export interface Player {
  id: string;
  name: string;
  team: string;
  position: string;
  stats: Record<string, number>;
}

export interface Game {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  date: string;
  status: 'scheduled' | 'live' | 'finished';
  score?: {
    home: number;
    away: number;
  };
}