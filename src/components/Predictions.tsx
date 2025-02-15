import React from 'react';
import { Sport } from '../types';
import { predictions, games } from '../data/mockData';
import { Brain, TrendingUp, AlertCircle } from 'lucide-react';

interface PredictionsProps {
  sport: Sport;
}

export const Predictions: React.FC<PredictionsProps> = ({ sport }) => {
  return (
    <div className="space-y-4">
      {predictions[sport].map((prediction) => {
        const game = games[sport].find((g) => g.id === prediction.gameId);
        if (!game) return null;

        return (
          <div
            key={prediction.gameId}
            className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:border-indigo-500 transition-all duration-300"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="w-6 h-6 text-indigo-600" />
              <h3 className="text-lg font-semibold">AI Prediction</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={game.homeTeam.logo}
                      alt={game.homeTeam.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="font-medium">{game.homeTeam.name}</span>
                  </div>
                  <div className="text-lg font-bold">{prediction.predictedScore.home}</div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img
                      src={game.awayTeam.logo}
                      alt={game.awayTeam.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="font-medium">{game.awayTeam.name}</span>
                  </div>
                  <div className="text-lg font-bold">{prediction.predictedScore.away}</div>
                </div>

                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: `${prediction.homeTeamWinProbability * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between mt-1 text-sm text-gray-500">
                    <span>Home Win Probability</span>
                    <span>{(prediction.homeTeamWinProbability * 100).toFixed(0)}%</span>
                  </div>
                </div>
              </div>

              <div className="border-t md:border-l md:border-t-0 border-gray-100 pt-4 md:pt-0 md:pl-6">
                <h4 className="font-medium mb-3 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-2 text-indigo-600" />
                  Key Factors
                </h4>
                <ul className="space-y-2">
                  {prediction.keyFactors.map((factor, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <TrendingUp className="w-4 h-4 mr-2 text-gray-400" />
                      {factor}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};