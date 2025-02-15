import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { Sport } from './types';
import { BarChart3, Trophy, Activity, TrendingUp, Users, Brain, ArrowRight, Star, Calculator, MessageSquare, Zap, CheckCircle, Phone, Globe, Mail } from 'lucide-react';

function App() {
  const [currentSport, setCurrentSport] = useState<Sport>('NBA');
  const [showLanding, setShowLanding] = useState(true);
  const [unitSize, setUnitSize] = useState('25');

  const features = [
    {
      icon: <Zap className="w-12 h-12 text-amber-600" />,
      title: '100% AI Generated Picks',
      description: 'Take the guesswork out of identifying the best bets to make each night, our AI does it for you.',
      bgColor: 'bg-amber-50',
      iconBg: 'bg-amber-100'
    },
    {
      icon: <Brain className="w-12 h-12 text-amber-600" />,
      title: 'Full Nightly Program',
      description: 'With baretpicks you get FULL guidance on who to bet, the market to bet on, how much to wager, and more!',
      bgColor: 'bg-amber-50',
      iconBg: 'bg-amber-100'
    },
    {
      icon: <Trophy className="w-12 h-12 text-amber-600" />,
      title: 'Proven Results',
      description: 'With over +4 years of experience, thousands of bets, and triple-digit returns, lean on a team that knows what they are doing.',
      bgColor: 'bg-amber-50',
      iconBg: 'bg-amber-100'
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-amber-600" />,
      title: 'Best-In-Class Support',
      description: 'Our commitment is to ensure you have the best experience from start to finish. Reach out to our team for 24/7 support.',
      bgColor: 'bg-amber-50',
      iconBg: 'bg-amber-100'
    }
  ];

  const calculateProfit = (units: string) => {
    const baseProfit = parseInt(units) * 37;
    return baseProfit.toLocaleString();
  };

  if (showLanding) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        {/* Navigation */}
        <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 fixed w-full z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <BarChart3 className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-2xl font-bold text-gray-900">baretpicks</span>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowLanding(false)}
                  className="btn-primary"
                >
                  Launch App
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative pt-32 pb-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-10 animate-pulse-slow"></div>
            <div className="absolute inset-0 bg-grid-pattern"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-6 animate-fadeIn">
                  A Better Way of Looking at Player Analytics
                </h1>
                <p className="text-xl text-gray-600 mb-8 animate-fadeIn">
                  Our mission is to give our users the advantage and confidence to realize consistent sports analysis success year over year.
                </p>
                <button
                  onClick={() => setShowLanding(false)}
                  className="btn-primary text-lg px-8 py-3 animate-fadeIn"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
              <div className="relative animate-float">
                <img
                  src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800"
                  alt="Analytics Dashboard"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 animate-pulse-slow">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium">AI-Powered Insights</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <div className="inline-block">
              <span className="inline-block text-amber-600 font-medium mb-2">Why Choose Us?</span>
              <div className="h-1 w-12 bg-amber-600 mx-auto mt-1"></div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mt-4">
              A better way of looking at player analytics
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Our mission is to give our users the advantage and confidence to realize consistent sports analysis success year over year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-6 p-6 rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                <div className={`${feature.iconBg} p-3 rounded-lg`}>
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Profit Calculator Section */}
        <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  All Time Profit Calculator
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 group relative">
                      <span className="flex items-center">
                        Unit Size(stake)
                        <div className="relative">
                          <div
                            className="ml-2 cursor-help"
                            title="Your unit size is the amount used to wager on a given bet. The rule of thumb is usually X% of your initial bankroll: 1% Growth bettor, 0.75% Balanced bettor, or 0.50% Conservative bettor"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                        </div>
                      </span>
                    </label>
                    <input
                      type="number"
                      value={unitSize}
                      onChange={(e) => setUnitSize(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="Enter unit size"
                    />
                  </div>
                  <div className="bg-white/10 rounded-lg p-6">
                    <div className="flex justify-between items-center">
                      <span className="flex items-center">
                        Average Monthly Profit
                        <div className="relative">
                          <div
                            className="ml-2 cursor-help"
                            title="Based on historical performance data and average monthly returns"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                        </div>
                      </span>
                      <span className="text-2xl font-bold">${calculateProfit(unitSize)}</span>
                    </div>
                  </div>
                  <p className="text-sm text-indigo-200">
                    *Based on all-time historical performance, delivering 37 units/month
                  </p>
                </div>
              </div>
              <div className="relative">
                <Calculator className="w-24 h-24 text-indigo-400 absolute -top-12 -left-12 opacity-25" />
                <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-lg">
                  <h3 className="text-xl font-bold mb-4">What Our Users Say</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-indigo-400 pl-4">
                      <p className="italic text-indigo-200">
                        "The analytics are incredible. It's a program that makes sense and has completely transformed my approach to sports analysis."
                      </p>
                      <p className="text-sm mt-2">- John D.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Learn More Today
                </h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full btn-primary py-3"
                  >
                    Get Started
                  </button>
                </form>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&q=80&w=800"
                  alt="Sports Analytics"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm font-medium">9/10 users recommend us</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
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
                    <MessageSquare className="w-5 h-5 mr-2" />
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
  }

  return (
    <Layout currentSport={currentSport} onSportChange={setCurrentSport}>
      <Dashboard sport={currentSport} />
    </Layout>
  );
}

export default App;