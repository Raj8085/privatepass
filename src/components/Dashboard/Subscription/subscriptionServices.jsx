
// import React from 'react';
// import { Lock } from 'lucide-react';

// const subscriptionServices = [
//   {
//     id: 1,
//     name: 'Pornhub Premium',
//     backgroundImage: 'https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg?auto=compress&cs=tinysrgb&w=800',
//     gradientOverlay: 'from-gray-900/90 via-gray-800/85 to-gray-900/90'
//   },
//   {
//     id: 2,
//     name: 'Brazzers',
//     backgroundImage: 'https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=800',
//     gradientOverlay: 'from-red-900/80 via-gray-900/85 to-red-900/80'
//   },
//   {
//     id: 3,
//     name: 'Reality Kings',
//     backgroundImage: 'https://images.pexels.com/photos/2167395/pexels-photo-2167395.jpeg?auto=compress&cs=tinysrgb&w=800',
//     gradientOverlay: 'from-blue-900/80 via-gray-900/85 to-blue-900/80'
//   },
//   { 
//     id: 4,
//     name: 'OnlyFans',
//     backgroundImage: 'https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=800',
//     gradientOverlay: 'from-purple-900/80 via-gray-900/85 to-purple-900/80'
//   },
//   {
//     id: 5,
//     name: 'Fansly',
//     backgroundImage: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800',
//     gradientOverlay: 'from-green-900/80 via-gray-900/85 to-green-900/80'
//   },
//   {
//     id: 6,
//     name: 'VRBangers',
//     backgroundImage: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800',
//     gradientOverlay: 'from-indigo-900/80 via-gray-900/85 to-indigo-900/80'
//   }
// ];

// function SubscriptionCard({ service }) {
//   return (
//     <div className="relative overflow-hidden rounded-2xl bg-gray-900 shadow-2xl transition-all duration-300 ease-out hover:scale-105 hover:shadow-3xl group cursor-pointer">
//       {/* Background Image */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
//         style={{ backgroundImage: `url(${service.backgroundImage})` }}
//       />
      
//       {/* Gradient Overlay */}
//       <div className={`absolute inset-0 bg-gradient-to-br ${service.gradientOverlay} backdrop-blur-[1px]`} />
      
//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-between p-8 h-48 sm:h-56">
//         {/* Service Name */}
//         <h2 className="text-white text-xl sm:text-2xl font-bold text-center leading-tight tracking-wide">
//           {service.name}
//         </h2>
        
//         {/* Lock Icon */}
//         <div className="flex-1 flex items-center justify-center">
//           <div className="bg-orange-500/20 backdrop-blur-sm rounded-full p-4 transition-all duration-300 group-hover:bg-orange-500/30 group-hover:scale-110">
//             <Lock className="w-8 h-8 sm:w-10 sm:h-10 text-orange-400 transition-colors duration-300 group-hover:text-orange-300" />
//           </div>
//         </div>
        
//         {/* Unlock Text */}
//         <p className="text-gray-200 text-sm sm:text-base font-medium text-center tracking-wide transition-colors duration-300 group-hover:text-white">
//           Unlock with PrivatePass
//         </p>
//       </div>
      
//       {/* Subtle Border */}
//       <div className="absolute inset-0 rounded-2xl border border-white/10 transition-colors duration-300 group-hover:border-white/20" />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12 sm:mb-16">
//           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
//             Premium Subscriptions
//           </h1>
//           <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
//             Unlock exclusive content with your PrivatePass membership
//           </p>
//         </div>
        
//         {/* Grid Layout */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-4xl mx-auto">
//           {subscriptionServices.map((service) => (
//             <SubscriptionCard key={service.id} service={service} />
//           ))}
//         </div>
        
//         {/* Footer */}
//         <div className="text-center mt-16 sm:mt-20">
//           <p className="text-gray-500 text-sm sm:text-base">
//             Secure payments • Instant access • Cancel anytime
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { Lock } from 'lucide-react';


export function SubscriptionCard({ service, onClick }) {
  return (
    <div 
      className="relative overflow-hidden rounded-2xl bg-gray-900 shadow-2xl transition-all duration-300 ease-out hover:scale-105 hover:shadow-3xl group cursor-pointer"
      onClick={onClick}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${service.backgroundImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradientOverlay} backdrop-blur-[1px]`} />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-between p-8 h-48 sm:h-56">
        {/* Service Name */}
        <h2 className="text-white text-xl sm:text-2xl font-bold text-center leading-tight tracking-wide">
          {service.name}
        </h2>
        
        {/* Lock Icon */}
        <div className="flex-1 flex items-center justify-center">
          <div className="bg-orange-500/20 backdrop-blur-sm rounded-full p-4 transition-all duration-300 group-hover:bg-orange-500/30 group-hover:scale-110">
            <Lock className="w-8 h-8 sm:w-10 sm:h-10 text-orange-400 transition-colors duration-300 group-hover:text-orange-300" />
          </div>
        </div>
        
        {/* Unlock Text */}
        <p className="text-gray-200 text-sm sm:text-base font-medium text-center tracking-wide transition-colors duration-300 group-hover:text-white">
          Unlock with PrivatePass
        </p>
      </div>
      
      {/* Subtle Border */}
      <div className="absolute inset-0 rounded-2xl border border-white/10 transition-colors duration-300 group-hover:border-white/20" />
    </div>
  );
}