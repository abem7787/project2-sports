import React from 'react';
import { Sport, Team, Player } from '../types';
import { teams, players } from '../data/mockData';
import { X, ArrowRight, TrendingUp, Users, Activity } from 'lucide-react';

interface ComparisonModalProps {
  sport: Sport;
  type: 'team' | 'player';
  isOpen: boolean;
  onClose: () => void;
}

export const ComparisonModal: React.FC<ComparisonModalProps> = ({
  sport,
  type,
  isOpen,
  onClose,
}) => {
  const [firstSelection, setFirstSelection] = React.useState<string>('');
  const [secondSelection, setSecondSelection] = React.useState<string>('');

  const items = type === 'team' ? teams[sport] : players[sport];

  const getStatLabels = (sport: Sport, type: 'team' | 'player') => {
    if (type === 'team') {
      return ['Wins', 'Losses', 'Win %'];
    }

    switch (sport) {
      case 'NBA':
        return ['Points', 'Rebounds', 'Assists'];
      case 'NFL':
        return ['Pass Yards', 'Touchdowns', 'Interceptions'];
      case 'MLB':
        return ['Batting Avg', 'Home Runs', 'RBI'];
      default:
        return [];
    }
  };

  const getStats = (item: Team | Player) => {
    if ('stats' in item && 'wins' in item.stats) {
      return [
        item.stats.wins,
        item.stats.losses,
        item.stats.winPercentage.toFixed(3)
      ];
    } else if ('stats' in item) {
      return Object.values(item.stats).map(stat => 
        typeof stat === 'number' ? stat.toFixed(1) : stat
      );
    }
    return [];
  };

  const getItemName = (item: Team | Player) => {
    if ('abbreviation' in item) {
      return `${item.name} (${item.abbreviation})`;
    }
    return `${item.name} - ${item.position}`;
  };

  if (!isOpen) return null;

  const firstItem = items.find(item => item.id === firstSelection);
  const secondItem = items.find(item => item.id === secondSelection);
  const statLabels = getStatLabels(sport, type);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Compare {type === 'team' ? 'Teams' : 'Players'}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Selection Section */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Select First {type === 'team' ? 'Team' : 'Player'}
              </label>
              <select
                value={firstSelection}
                onChange={(e) => setFirstSelection(e.target.value)}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">Select...</option>
                {items.map((item) => (
                  <option key={item.id} value={item.id}>
                    {getItemName(item)}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Select Second {type === 'team' ? 'Team' : 'Player'}
              </label>
              <select
                value={secondSelection}
                onChange={(e) => setSecondSelection(e.target.value)}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">Select...</option>
                {items.map((item) => (
                  <option key={item.id} value={item.id}>
                    {getItemName(item)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Comparison Section */}
          {firstItem && secondItem && (
            <div className="mt-8 space-y-6 animate-fadeIn">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="font-semibold text-lg text-gray-900">
                    {getItemName(firstItem)}
                  </div>
                </div>
                <div className="text-center text-gray-500 font-medium">
                  Comparison
                </div>
                <div className="text-center">
                  <div className="font-semibold text-lg text-gray-900">
                    {getItemName(secondItem)}
                  </div>
                </div>
              </div>

              {statLabels.map((label, index) => {
                const firstStats = getStats(firstItem);
                const secondStats = getStats(secondItem);
                const firstValue = parseFloat(firstStats[index]);
                const secondValue = parseFloat(secondStats[index]);
                const better = firstValue > secondValue;
                const equal = firstValue === secondValue;

                return (
                  <div key={label} className="grid grid-cols-3 gap-4 items-center py-4 border-t border-gray-100">
                    <div className="text-center">
                      <div className={`text-xl font-bold ${better && !equal ? 'text-green-600' : 'text-gray-900'}`}>
                        {firstStats[index]}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium text-gray-500">{label}</div>
                      {!equal && (
                        <ArrowRight className={`w-5 h-5 mx-auto mt-1 ${better ? 'text-green-600 rotate-180' : 'text-red-600'}`} />
                      )}
                    </div>
                    <div className="text-center">
                      <div className={`text-xl font-bold ${!better && !equal ? 'text-green-600' : 'text-gray-900'}`}>
                        {secondStats[index]}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};