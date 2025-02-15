import React, { useState } from 'react';
import { Activity, TrendingUp, Users, ArrowUpDown as ArrowsUpDown } from 'lucide-react';
import { Sport } from '../types';
import { GameList } from './GameList';
import { PlayerStats } from './PlayerStats';
import { Standings } from './Standings';
import { Predictions } from './Predictions';
import { ComparisonModal } from './ComparisonModal';

interface DashboardProps {
  sport: Sport;
}

export const Dashboard: React.FC<DashboardProps> = ({ sport }) => {
  const [comparisonType, setComparisonType] = useState<'team' | 'player' | null>(null);

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:border-indigo-500 transition-all duration-300">
          <div className="flex items-center">
            <Activity className="h-8 w-8 text-indigo-600" />
            <h3 className="ml-3 text-lg font-semibold text-gray-900">Live Games</h3>
          </div>
          <p className="mt-2 text-sm text-gray-600">Currently active matches and real-time scores</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:border-indigo-500 transition-all duration-300">
          <div className="flex items-center">
            <TrendingUp className="h-8 w-8 text-indigo-600" />
            <h3 className="ml-3 text-lg font-semibold text-gray-900">Predictions</h3>
          </div>
          <p className="mt-2 text-sm text-gray-600">AI-powered insights and analytics</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:border-indigo-500 transition-all duration-300">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-indigo-600" />
            <h3 className="ml-3 text-lg font-semibold text-gray-900">Teams</h3>
          </div>
          <p className="mt-2 text-sm text-gray-600">Compare team statistics and performance</p>
        </div>
      </div>

      {/* Comparison Buttons */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => setComparisonType('team')}
          className="inline-flex items-center px-4 py-2 border border-indigo-500 rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
        >
          <ArrowsUpDown className="w-4 h-4 mr-2" />
          Compare Teams
        </button>
        <button
          onClick={() => setComparisonType('player')}
          className="inline-flex items-center px-4 py-2 border border-indigo-500 rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
        >
          <ArrowsUpDown className="w-4 h-4 mr-2" />
          Compare Players
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Games</h2>
          <GameList sport={sport} />
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">AI Predictions</h2>
          <Predictions sport={sport} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Top Players</h2>
          <PlayerStats sport={sport} />
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">League Standings</h2>
          <Standings sport={sport} />
        </div>
      </div>

      {comparisonType && (
        <ComparisonModal
          sport={sport}
          type={comparisonType}
          isOpen={true}
          onClose={() => setComparisonType(null)}
        />
      )}
    </div>
  );
};