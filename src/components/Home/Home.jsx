import React, { useState } from 'react';
import { Check, CreditCard, Lock, Gift, Shield, DollarSign, User, Star, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivatePassLanding() {
  const [hoveredPlan, setHoveredPlan] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-purple-900/10 to-black"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-16 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <div className="space-y-4 lg:space-y-6">
                <div className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 text-sm">
                  <Sparkles className="w-4 h-4 text-red-400" />
                  <span className="text-red-400">Premium Access</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent">
                  Your Private Key
                  <br />
                  <span className="text-red-500">to Premium</span>
                  <br />
                  Adult Access
                </h1>
                
                <p className="text-lg sm:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0">
                  Unlock exclusive content from top platforms with complete anonymity and premium features.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link to="/register">
                  <button className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25 cursor-pointer">
                    <span className="relative z-10">Get Your Pass Now</span>
                    <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  </Link>
                  <Link to="/register">
                  <button className="border-2 border-gray-600 hover:border-red-500 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:bg-red-500/10 cursor-pointer">
                    View Plans
                  </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Content - Enhanced Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-purple-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                
                <div className="relative w-80 sm:w-96 h-56 sm:h-64 bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl border border-red-500/30 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-purple-500/5"></div>
                  
                  <div className="relative p-6 sm:p-8 h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                          PrivatePass
                          <Zap className="w-5 h-5 text-red-500" />
                        </h3>
                        <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          PREMIUM
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-400">ELITE</p>
                        <p className="text-xs text-gray-400">MEMBERSHIP</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-end">
                      <div className="text-sm text-gray-400">
                        <p>Valid Until</p>
                        <p className="text-white font-mono">12/2025</p>
                      </div>
                      
                      {/* Enhanced QR Code */}
                      <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center shadow-lg">
                        <div className="w-16 h-16 bg-black rounded-md flex items-center justify-center">
                          <div className="grid grid-cols-4 gap-px">
                            {[...Array(16)].map((_, i) => (
                              <div key={i} className={`w-1 h-1 ${Math.random() > 0.5 ? 'bg-white' : 'bg-black'}`}></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-400 text-lg">Get started in minutes with our simple process</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {[
            { icon: Check, title: "Subscribe to a Plan", step: "01" },
            { icon: CreditCard, title: "Get Your Digital or Physical Card", step: "02" },
            { icon: Lock, title: "Unlock Exclusive Content from Top Platforms", step: "03" },
            { icon: Gift, title: "Enjoy Weekly Drops, Cam Invites & More", step: "04" }
          ].map((feature, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center space-y-4 hover:border-red-500/50 transition-all duration-300">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-black border-2 border-red-500 rounded-full flex items-center justify-center text-xs font-bold">
                    {feature.step}
                  </div>
                </div>
                <h3 className="font-semibold text-lg leading-tight">{feature.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-gray-400 text-lg">Unlock premium content with our flexible pricing</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* What You Get */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-800 h-full">
              <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">What You Get</h3>
              <div className="space-y-4">
                {[
                  "15+ premium porn sites",
                  "Verified creators content",
                  "Cam show invites",
                  "Anonymous discounts on toys",
                  "Weekly exclusive drops",
                  "24/7 customer support"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Plans */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {/* Basic Plan */}
            <div 
              className={`relative group cursor-pointer transition-all duration-300 ${hoveredPlan === 'basic' ? 'scale-105' : ''}`}
              onMouseEnter={() => setHoveredPlan('basic')}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-800 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              
              <div className="relative bg-gray-900 rounded-2xl p-6 lg:p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center space-x-2 bg-gray-800 rounded-full px-3 py-1 text-sm">
                    <span>Most Popular</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold">Basic</h3>
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold">₹499</span>
                      <span className="text-gray-400">/month</span>
                    </div>
                    <p className="text-gray-400">3 platforms + drops</p>
                  </div>
                  <Link to="/register">
                  <button className="w-full bg-gray-800 hover:bg-gray-700 py-3 rounded-lg font-semibold transition-colors cursor-pointer">
                    Get Basic Plan
                  </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Premium Plan */}
            <div 
              className={`relative group cursor-pointer transition-all duration-300 ${hoveredPlan === 'premium' ? 'scale-105' : ''}`}
              onMouseEnter={() => setHoveredPlan('premium')}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-purple-500 rounded-2xl blur opacity-50 group-hover:opacity-70 transition duration-300"></div>
              
              <div className="relative bg-gray-900 rounded-2xl p-6 lg:p-8 border-2 border-red-500">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center space-x-2 bg-red-500 rounded-full px-3 py-1 text-sm">
                    <Star className="w-4 h-4" />
                    <span>Recommended</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-red-400">Premium</h3>
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold">₹1299</span>
                      <span className="text-gray-400">/month</span>
                    </div>
                    <p className="text-gray-400">All sites + creator packs</p>
                  </div>
                  <Link to="/register">
                  <button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer">
                    Get Premium Plan
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Why PrivatePass */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">Why PrivatePass?</h2>
            <div className="space-y-4">
              {[
                { icon: Shield, text: "Complete anonymous access" },
                { icon: DollarSign, text: "Save ₹20,000+ vs separate subscriptions" },
                { icon: CreditCard, text: "Own a sleek digital/physical card" },
                { icon: User, text: "Login-free access to weekly content" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-gray-900/30 rounded-xl hover:bg-gray-900/50 transition-colors">
                  <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <span className="text-lg">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Content Creators */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">Verified Content Creators</h2>
            <div className="grid grid-cols-3 gap-4">
              {[
                { name: "@Luna", gradient: "from-pink-500 to-red-500" },
                { name: "@RealSasha", gradient: "from-purple-500 to-pink-500" },
                { name: "@CamQueen68", gradient: "from-red-500 to-orange-500" }
              ].map((creator, index) => (
                <div key={index} className="text-center space-y-3 group cursor-pointer">
                  <div className={`w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br ${creator.gradient} rounded-full mx-auto flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <User className="w-10 h-10 sm:w-12 sm:h-12" />
                  </div>
                  <p className="text-sm sm:text-base font-medium">{creator.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-gradient-to-r from-red-900/20 to-purple-900/20 rounded-3xl p-8 lg:p-12 border border-red-500/20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
            Ready to unlock your pleasure privately?
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied members who trust PrivatePass for their premium adult content needs.
          </p>
          <Link to="/register">
          <button className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25 cursor-pointer">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get My Pass Now
              <Sparkles className="w-5 h-5" />
            </span>
            <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          </Link>
        </div>
      </div>

      {/* Bottom indicator */}
      <div className="relative z-10 flex justify-center pb-8">
        <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-purple-500 rounded-full"></div>
      </div>
    </div>
  );
}