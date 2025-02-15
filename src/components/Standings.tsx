import React, { useState } from 'react';
import { Sport } from '../types';
import { teams } from '../data/mockData';
import { Trophy } from 'lucide-react';
import { DetailModal } from './DetailModal';

interface StandingsProps {
  sport: Sport;
}

export const Standings: React.FC<StandingsProps> = ({ sport }) => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const sortedTeams = [...teams[sport]].sort((a, b) => b.stats.winPercentage - a.stats.winPercentage);

  return (
    <div className="overflow-hidden">
      <div className="grid grid-cols-5 gap-4 px-4 py-2 bg-gray-50 rounded-t-lg text-sm font-medium text-gray-500">
        <div className="col-span-2">Team</div>
        <div className="text-center">W</div>
        <div className="text-center">L</div>
        <div className="text-center">PCT</div>
      </div>
      
      <div className="space-y-2 mt-2">
        {sortedTeams.map((team, index) => (
          <div
            key={team.id}
            className="grid grid-cols-5 gap-4 px-4 py-3 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
            onClick={() => setSelectedTeam(team)}
          >
            <div className="col-span-2 flex items-center space-x-3">
              {index === 0 && <Trophy className="w-4 h-4 text-yellow-500" />}
              <img
                src={team.logo}
                alt={team.name}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="font-medium">{team.name}</p>
                <p className="text-sm text-gray-500">{team.abbreviation}</p>
              </div>
            </div>
            <div className="text-center self-center font-medium">{team.stats.wins}</div>
            <div className="text-center self-center text-gray-500">{team.stats.losses}</div>
            <div className="text-center self-center font-medium">
              {team.stats.winPercentage.toFixed(3)}
            </div>
          </div>
        ))}
      </div>

      {selectedTeam && (
        <DetailModal
          sport={sport}
          item={selectedTeam}
          isOpen={true}
          onClose={() => setSelectedTeam(null)}
        />
      )}
    </div>
  );
};