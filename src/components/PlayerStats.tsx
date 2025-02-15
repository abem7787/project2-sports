import React, { useState } from 'react';
import { Sport } from '../types';
import { players } from '../data/mockData';
import { Medal } from 'lucide-react';
import { DetailModal } from './DetailModal';

interface PlayerStatsProps {
  sport: Sport;
}

export const PlayerStats: React.FC<PlayerStatsProps> = ({ sport }) => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const formatStat = (value: number) => {
    return value.toFixed(1);
  };

  const getStatLabels = (sport: Sport) => {
    switch (sport) {
      case 'NBA':
        return ['PTS', 'REB', 'AST'];
      case 'NFL':
        return ['PASS YDS', 'TD', 'INT'];
      case 'MLB':
        return ['AVG', 'HR', 'RBI'];
      default:
        return [];
    }
  };

  const getPlayerStats = (player: typeof players[Sport][0]) => {
    const stats = Object.values(player.stats);
    return stats.map((stat, index) => (
      <div key={index} className="text-center">
        <div className="text-sm font-medium text-gray-500">{getStatLabels(sport)[index]}</div>
        <div className="text-lg font-semibold">{formatStat(stat)}</div>
      </div>
    ));
  };

  return (
    <div className="space-y-4">
      {players[sport].map((player) => (
        <div
          key={player.id}
          className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:border-indigo-500 transition-all duration-300 cursor-pointer"
          onClick={() => setSelectedPlayer(player)}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center space-x-2">
                <Medal className="w-5 h-5 text-yellow-500" />
                <h3 className="text-lg font-semibold">{player.name}</h3>
              </div>
              <p className="text-sm text-gray-500">{player.team} • {player.position}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {getPlayerStats(player)}
          </div>
        </div>
      ))}

      {selectedPlayer && (
        <DetailModal
          sport={sport}
          item={selectedPlayer}
          isOpen={true}
          onClose={() => setSelectedPlayer(null)}
        />
      )}
    </div>
  );
};