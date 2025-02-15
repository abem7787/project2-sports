import React from 'react';
import { Sport, Team, Player } from '../types';
import { X, Trophy, Users, Activity, TrendingUp, Calendar, MapPin } from 'lucide-react';
import { games } from '../data/mockData';

interface DetailModalProps {
  sport: Sport;
  item: Team | Player;
  isOpen: boolean;
  onClose: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  sport,
  item,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const isTeam = 'abbreviation' in item;
  const recentGames = isTeam
    ? games[sport].filter(
        game =>
          game.homeTeam.id === item.id || game.awayTeam.id === item.id
      ).slice(0, 5)
    : [];

  const renderTeamStats = (team: Team) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 mb-2">
          <Trophy className="w-5 h-5 text-yellow-500" />
          <h3 className="font-semibold text-gray-900">Season Record</h3>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{team.stats.wins}</div>
            <div className="text-sm text-gray-500">Wins</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{team.stats.losses}</div>
            <div className="text-sm text-gray-500">Losses</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">
              {team.stats.winPercentage.toFixed(3)}
            </div>
            <div className="text-sm text-gray-500">Win %</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 mb-2">
          <TrendingUp className="w-5 h-5 text-indigo-600" />
          <h3 className="font-semibold text-gray-900">Performance</h3>
        </div>
        <div className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Win Streak</span>
            <span className="font-semibold">3 Games</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Last 10</span>
            <span className="font-semibold">7-3</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 mb-2">
          <MapPin className="w-5 h-5 text-green-600" />
          <h3 className="font-semibold text-gray-900">Team Info</h3>
        </div>
        <div className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Conference</span>
            <span className="font-semibold">Western</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Division</span>
            <span className="font-semibold">Pacific</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPlayerStats = (player: Player) => {
    const statLabels = {
      NBA: ['Points', 'Rebounds', 'Assists'],
      NFL: ['Pass Yards', 'Touchdowns', 'Interceptions'],
      MLB: ['Batting Avg', 'Home Runs', 'RBI']
    }[sport];

    const stats = Object.values(player.stats);

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex items-center space-x-2 mb-2">
            <Activity className="w-5 h-5 text-indigo-600" />
            <h3 className="font-semibold text-gray-900">Season Stats</h3>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {typeof stat === 'number' ? stat.toFixed(1) : stat}
                </div>
                <div className="text-sm text-gray-500">{statLabels[index]}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex items-center space-x-2 mb-2">
            <Users className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold text-gray-900">Player Info</h3>
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Team</span>
              <span className="font-semibold">{player.team}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Position</span>
              <span className="font-semibold">{player.position}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex items-center space-x-2 mb-2">
            <TrendingUp className="w-5 h-5 text-yellow-500" />
            <h3 className="font-semibold text-gray-900">Trends</h3>
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Last 5 Games Avg</span>
              <span className="font-semibold text-green-600">+2.3%</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Season High</span>
              <span className="font-semibold">{(Math.max(...stats) + 5).toFixed(1)}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-50 rounded-xl shadow-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-4">
              <img
                src={isTeam ? (item as Team).logo : 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=100'}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{item.name}</h2>
                <p className="text-gray-500">
                  {isTeam ? (item as Team).abbreviation : `${(item as Player).position} - ${(item as Player).team}`}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {isTeam ? renderTeamStats(item as Team) : renderPlayerStats(item as Player)}

          {isTeam && recentGames.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Recent Games
              </h3>
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="grid grid-cols-4 gap-4 p-4 bg-gray-50 text-sm font-medium text-gray-500">
                  <div>Date</div>
                  <div>Opponent</div>
                  <div className="text-center">Score</div>
                  <div className="text-center">Result</div>
                </div>
                {recentGames.map((game) => {
                  const isHome = game.homeTeam.id === item.id;
                  const opponent = isHome ? game.awayTeam : game.homeTeam;
                  const score = game.score;
                  const won = score
                    ? isHome
                      ? score.home > score.away
                      : score.away > score.home
                    : null;

                  return (
                    <div
                      key={game.id}
                      className="grid grid-cols-4 gap-4 p-4 border-t border-gray-100"
                    >
                      <div className="text-sm text-gray-600">
                        {new Date(game.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center space-x-2">
                        <img
                          src={opponent.logo}
                          alt={opponent.name}
                          className="w-6 h-6 rounded-full"
                        />
                        <span className="text-sm font-medium">
                          {isHome ? '@' : 'vs'} {opponent.name}
                        </span>
                      </div>
                      <div className="text-center">
                        {score
                          ? `${isHome ? score.home : score.away} - ${
                              isHome ? score.away : score.home
                            }`
                          : 'Upcoming'}
                      </div>
                      <div className="text-center">
                        {score ? (
                          <span
                            className={`font-medium ${
                              won ? 'text-green-600' : 'text-red-600'
                            }`}
                          >
                            {won ? 'W' : 'L'}
                          </span>
                        ) : (
                          <span className="text-gray-500">-</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};