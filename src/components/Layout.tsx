import React from 'react';
import { BarChart3, Trophy, Activity, Mail, Phone, Globe } from 'lucide-react';
import { Sport } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentSport: Sport;
  onSportChange: (sport: Sport) => void;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  currentSport,
  onSportChange,
}) => {
  const handleLogoClick = () => {
    // Reload the page to show landing
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div 
                className="flex-shrink-0 flex items-center cursor-pointer hover:opacity-80 transition-opacity"
                onClick={handleLogoClick}
              >
                <BarChart3 className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-2xl font-bold text-gray-900">baretpicks</span>
              </div>
            </div>
            
            <div className="flex items-center">
              {(['NBA', 'NFL', 'MLB'] as Sport[]).map((sport) => (
                <button
                  key={sport}
                  onClick={() => onSportChange(sport)}
                  className={`px-4 py-2 mx-1 rounded-md text-sm font-medium transition-all duration-200 ${
                    currentSport === sport
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {sport}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-8">
          {children}
        </div>
      </main>

      <footer className="bg-gray-900 text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <BarChart3 className="h-8 w-8 text-indigo-400" />
                <span className="ml-2 text-2xl font-bold">baretpicks</span>
              </div>
              <p className="text-gray-400">
                Your ultimate sports analytics platform powered by AI for smarter predictions
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Sports</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">NBA Analytics</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">NFL Statistics</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">MLB Insights</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Features</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Live Scores</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AI Predictions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Team Rankings</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Player Stats</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <Mail className="w-5 h-5 mr-2" />
                  support@baretpicks.com
                </li>
                <li className="flex items-center text-gray-400">
                  <Phone className="w-5 h-5 mr-2" />
                  1-800-SPORTS
                </li>
                <li className="flex items-center text-gray-400">
                  <Globe className="w-5 h-5 mr-2" />
                  www.baretpicks.com
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2018 - {new Date().getFullYear()} baretpicks. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};