import React from 'react';
import { Game, Sport } from '../types';
import { games } from '../data/mockData';
import { CalendarDays, Clock } from 'lucide-react';

interface GameListProps {
  sport: Sport;
}

export const GameList: React.FC<GameListProps> = ({ sport }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status: Game['status']) => {
    switch (status) {
      case 'live':
        return 'bg-red-500';
      case 'finished':
        return 'bg-gray-500';
      default:
        return 'bg-green-500';
    }
  };

  return (
    <div className="space-y-4">
      {games[sport].map((game) => (
        <div
          key={game.id}
          className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:border-indigo-500 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${getStatusColor(game.status)}`} />
              <span className="text-sm font-medium capitalize">{game.status}</span>
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <CalendarDays className="w-4 h-4 mr-1" />
              {formatDate(game.date)}
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src={game.homeTeam.logo}
                alt={game.homeTeam.name}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="font-semibold">{game.homeTeam.name}</p>
                <p className="text-sm text-gray-500">{game.homeTeam.stats.wins}-{game.homeTeam.stats.losses}</p>
              </div>
            </div>
            {game.score ? (
              <div className="text-2xl font-bold">{game.score.home}</div>
            ) : (
              <div className="flex items-center text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                Upcoming
              </div>
            )}
          </div>

          <div className="my-2 border-t border-gray-100" />

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src={game.awayTeam.logo}
                alt={game.awayTeam.name}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="font-semibold">{game.awayTeam.name}</p>
                <p className="text-sm text-gray-500">{game.awayTeam.stats.wins}-{game.awayTeam.stats.losses}</p>
              </div>
            </div>
            {game.score && <div className="text-2xl font-bold">{game.score.away}</div>}
          </div>
        </div>
      ))}
    </div>
  );
};