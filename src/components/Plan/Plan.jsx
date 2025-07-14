import React, { useState } from 'react';
import { Check, Star, Crown, Zap, Shield, Gift, CreditCard, Users } from 'lucide-react';

export default function PricingSection() {
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: '₹499',
      period: '/mo',
      description: '3 platforms + drops',
      icon: Zap,
      gradient: 'from-gray-600 to-gray-800',
      borderColor: 'border-gray-600',
      buttonClass: 'bg-gray-700 hover:bg-gray-600 text-white',
      popular: false
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '₹1299',
      period: '/mo',
      description: 'All sites + creator packs',
      icon: Star,
      gradient: 'from-red-500 to-purple-600',
      borderColor: 'border-red-500',
      buttonClass: 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white',
      popular: true
    },
    {
      id: 'platinum',
      name: 'Platinum',
      price: '₹9999',
      period: '/year',
      description: 'Lifetime + VIP perks',
      icon: Crown,
      gradient: 'from-yellow-500 to-orange-600',
      borderColor: 'border-yellow-500',
      buttonClass: 'bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white',
      popular: false
    }
  ];

  const features = [
    {
      icon: Shield,
      text: 'Access to 15+ premium adult sites',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Gift,
      text: 'Weekly exclusive content drops',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      text: 'Invites to cam shows from top creators',
      gradient: 'from-pink-500 to-pink-600'
    },
    {
      icon: CreditCard,
      text: 'Choice of digital or physical PrivatePass card',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Zap,
      text: 'Anonymous payments via crypto or UPI',
      gradient: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-purple-900/10 to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 mt-6">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 text-sm mb-6">
            <Star className="w-4 h-4 text-red-400" />
            <span className="text-red-400">Premium Plans</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent leading-tight">
            Choose a plan to
            <br />
            <span className="text-red-500">unlock premium adult access</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Gain exclusive entry to top adult sites and weekly content.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative group cursor-pointer transition-all duration-500 ${
                hoveredPlan === plan.id ? 'scale-105 z-10' : ''
              } ${plan.popular ? 'lg:scale-105' : ''}`}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${plan.gradient} rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500`}></div>
              
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Card Content */}
              <div className={`relative bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border-2 ${plan.borderColor} hover:bg-gray-900/90 transition-all duration-300 h-full`}>
                <div className="text-center space-y-6">
                  {/* Plan Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-full flex items-center justify-center mx-auto shadow-lg`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Plan Name */}
                  <h3 className="text-2xl sm:text-3xl font-bold">{plan.name}</h3>
                  
                  {/* Pricing */}
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center space-x-2">
                      <span className="text-4xl sm:text-5xl font-bold">{plan.price}</span>
                      <span className="text-gray-400 text-lg">{plan.period}</span>
                    </div>
                    <p className="text-gray-400 text-sm sm:text-base">{plan.description}</p>
                  </div>
                  
                  {/* CTA Button */}
                  <button className={`w-full ${plan.buttonClass} py-3 sm:py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg`}>
                    Select
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">All plans include</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group flex items-center space-x-4 sm:space-x-6 p-4 sm:p-6 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-red-500/50 hover:bg-gray-900/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                
                <div className="flex-1 text-left">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 flex-shrink-0" />
                    <span className="text-lg sm:text-xl font-medium text-gray-300 group-hover:text-white transition-colors">
                      {feature.text}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-6 py-3">
            <Shield className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-medium">100% satisfaction guaranteed. Cancel anytime.</span>
          </div>
        </div>

        {/* Bottom Indicator */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 via-purple-500 to-yellow-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}