import React from 'react';
import { X, Lock, CreditCard, User } from 'lucide-react';



export function SubscriptionModal({ isOpen, onClose, serviceName, onUnlock }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl border border-gray-700/50 w-full max-w-md transform transition-all duration-300 scale-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 z-10"
        >
          <X className="w-6 h-6" />
        </button>
        
        {/* Content */}
        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="bg-orange-500/20 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <Lock className="w-10 h-10 text-orange-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Unlock {serviceName}
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Get instant access to premium content with your PrivatePass membership
            </p>
          </div>
          
          {/* Features */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center text-gray-300 text-sm">
              <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0" />
              <span>Unlimited access to premium content</span>
            </div>
            <div className="flex items-center text-gray-300 text-sm">
              <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0" />
              <span>HD quality streaming</span>
            </div>
            <div className="flex items-center text-gray-300 text-sm">
              <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0" />
              <span>Cancel anytime</span>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={onUnlock}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2 shadow-lg"
            >
              <CreditCard className="w-5 h-5" />
              <span>Unlock Now</span>
            </button>
            
            <button
              onClick={onClose}
              className="w-full bg-gray-700/50 hover:bg-gray-700 text-gray-300 hover:text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 border border-gray-600/50 hover:border-gray-500"
            >
              Maybe Later
            </button>
          </div>
          
          {/* Footer */}
          <div className="mt-6 pt-6 border-t border-gray-700/50">
            <p className="text-gray-500 text-xs text-center">
              Secure payment • Instant access • 30-day money-back guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}