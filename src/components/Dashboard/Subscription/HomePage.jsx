import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubscriptionCard } from './subscriptionServices';
import { SubscriptionModal } from './SubscriptionModal';

const subscriptionServices = [
  {
    id: 1,
    name: 'Pornhub Premium',
    backgroundImage: 'https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradientOverlay: 'from-gray-900/90 via-gray-800/85 to-gray-900/90'
  },
  {
    id: 2,
    name: 'Brazzers',
    backgroundImage: 'https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradientOverlay: 'from-red-900/80 via-gray-900/85 to-red-900/80'
  },
  {
    id: 3,
    name: 'Reality Kings',
    backgroundImage: 'https://images.pexels.com/photos/2167395/pexels-photo-2167395.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradientOverlay: 'from-blue-900/80 via-gray-900/85 to-blue-900/80'
  },
  {
    id: 4,
    name: 'OnlyFans',
    backgroundImage: 'https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradientOverlay: 'from-purple-900/80 via-gray-900/85 to-purple-900/80'
  },
  {
    id: 5,
    name: 'Fansly',
    backgroundImage: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradientOverlay: 'from-green-900/80 via-gray-900/85 to-green-900/80'
  },
  {
    id: 6,
    name: 'VRBangers',
    backgroundImage: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradientOverlay: 'from-indigo-900/80 via-gray-900/85 to-indigo-900/80'
  }
];

export function HomePage() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const checkUserAuthentication = () => {
    try {
      const userData = localStorage.getItem('user');
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error('Error parsing user data from localStorage:', error);
      return null;
    }
  };

  const handleCardClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleUnlock = () => {
    const user = checkUserAuthentication();
    
    if (!user) {
      // User not logged in, redirect to register page
      navigate('/register');
    } else {
      // User is logged in, proceed to payment page
      navigate('/payment', { 
        state: { 
          serviceName: selectedService?.name,
          serviceId: selectedService?.id 
        } 
      });
    }
    
    setIsModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen  bg-gradient-to-br from-gray-900 via-black to-gray-900 py-8 px-4 sm:py-12 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Premium Subscriptions
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Unlock exclusive content with your PrivatePass membership
          </p>
        </div>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-4xl mx-auto">
          {subscriptionServices.map((service) => (
            <SubscriptionCard 
              key={service.id} 
              service={service} 
              onClick={() => handleCardClick(service)}
            />
          ))}
        </div>
        
        {/* Footer */}
        <div className="text-center mt-16 sm:mt-20">
          <p className="text-gray-500 text-sm sm:text-base">
            Secure payments • Instant access • Cancel anytime
          </p>
        </div>
      </div>

      {/* Modal */}
      <SubscriptionModal
        isOpen={isModalOpen}
        onClose={closeModal}
        serviceName={selectedService?.name || ''}
        onUnlock={handleUnlock}
      />
    </div>
  );
}