// import React, { useState, useEffect } from 'react';
// import { Menu, X, CreditCard, BarChart3, FileText, UserPlus, Zap, Shield } from 'lucide-react';
// import { Link } from 'react-router-dom';

// export default function ResponsiveNavbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeItem, setActiveItem] = useState('Plan');

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { 
//       name: 'Plan', 
//       icon: FileText, 
//       href: '/plan',
//       description: 'Choose your subscription'
//     },
//     { 
//       name: 'Dashboard', 
//       icon: BarChart3, 
//       href: '/dashboard',
//       description: 'View your account'
//     },
//     { 
//       name: 'Get Your Card', 
//       icon: CreditCard, 
//       href: '/register',
//       description: 'Digital & Physical cards'
//     },
   
//   ];

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleItemClick = (itemName) => {
//     setActiveItem(itemName);
//     setIsOpen(false);
//   };

 

//   return (
//     <>
//       {/* Navbar */}
//       <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled 
//           ? 'bg-black/90 backdrop-blur-md border-b border-gray-800/50' 
//           : 'bg-black'
//       }`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16 sm:h-20">
//             {/* Logo */}
//             <Link to="/">
//             <div className="flex items-center space-x-2 group cursor-pointer">
//               <div className="relative">
//                 <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
//                   <Shield className="w-6 h-6 text-white" />
//                 </div>
//                 <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
//                   <Zap className="w-2 h-2 text-white" />
//                 </div>
//               </div>
//               <div className="hidden sm:block">
//                 <h1 className="text-xl font-bold bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
//                   PrivatePass
//                 </h1>
//                 <p className="text-xs text-gray-400 -mt-1">Premium Access</p>
//               </div>
//             </div>
//             </Link>
//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center space-x-1">
//               {navItems.map((item) => (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   onClick={() => handleItemClick(item.name)}
//                   className={`group relative px-4 py-2 rounded-lg transition-all duration-300 ${
//                     activeItem === item.name
//                       ? 'bg-red-500/20 text-red-400'
//                       : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
//                   }`}
//                 >
//                   <div className="flex items-center space-x-2">
//                     <item.icon className="w-4 h-4" />
//                     <span className="font-medium">{item.name}</span>
//                   </div>
                  
//                   {/* Active indicator */}
//                   {activeItem === item.name && (
//                     <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 rounded-full"></div>
//                   )}
                  
//                   {/* Hover tooltip */}
//                   <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
//                     {item.description}
//                     <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900"></div>
//                   </div>
//                 </a>
//               ))}
//             </div>

//             {/* CTA Button - Desktop */}
//             <div className="hidden sm:block">
//               <Link to="/register">
//               <button className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25 cursor-pointer">
//                 <span className="relative z-10">Get Started</span>
//                 <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </button>
//               </Link>
//             </div>

//             {/* Mobile menu button */}
//             <div className="lg:hidden">
//               <button
//                 onClick={toggleMenu}
//                 className="relative w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-300"
//               >
//                 <div className="relative">
//                   <Menu className={`w-5 h-5 text-white transition-all duration-300 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
//                   <X className={`w-5 h-5 text-white absolute inset-0 transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
//                 </div>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation Menu */}
//         <div className={`lg:hidden transition-all duration-300 ${
//           isOpen 
//             ? 'max-h-screen opacity-100' 
//             : 'max-h-0 opacity-0'
//         } overflow-hidden`}>
//           <div className="bg-gray-900/95 backdrop-blur-md border-t border-gray-800/50">
//             <div className="px-4 py-6 space-y-4">
//               {navItems.map((item, index) => (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   onClick={() => handleItemClick(item.name)}
//                   className={`group flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
//                     activeItem === item.name
//                       ? 'bg-red-500/20 border border-red-500/30 text-red-400'
//                       : 'bg-gray-800/50 hover:bg-gray-800 text-gray-300 hover:text-white'
//                   }`}
//                   style={{ 
//                     animationDelay: `${index * 100}ms`,
//                     animation: isOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
//                   }}
//                 >
//                   <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
//                     activeItem === item.name 
//                       ? 'bg-red-500/20' 
//                       : 'bg-gray-700 group-hover:bg-gray-600'
//                   }`}>
//                     <item.icon className="w-6 h-6" />
//                   </div>
//                   <div className="flex-1">
//                     <div className="font-semibold text-lg">{item.name}</div>
//                     <div className="text-sm text-gray-400">{item.description}</div>
//                   </div>
//                   {activeItem === item.name && (
//                     <div className="w-2 h-2 bg-red-500 rounded-full"></div>
//                   )}
//                 </a>
//               ))}
              
//               {/* Mobile CTA Button */}
//               <a href="/register">

//               <button className="w-full mt-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25 cursor-pointer">
//                 Get Started
//               </button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>

     

//       {/* CSS Animations */}
//       <style jsx>{`
//         @keyframes slideInLeft {
//           from {
//             opacity: 0;
//             transform: translateX(-30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//       `}</style>
//     </>
//   );
// }

import React, { useState, useEffect } from 'react';
import { Menu, X, CreditCard, BarChart3, FileText, UserPlus, Zap, Shield, User, LogOut } from 'lucide-react';

export default function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('Plan');
  const [user, setUser] = useState(null);
  const [showUserMenu, setShowUserMenu] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load user data from localStorage
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
  }, []);

  const navItems = [
    { 
      name: 'Plan', 
      icon: FileText, 
      href: '/plan',
      description: 'Choose your subscription'
    },
    { 
      name: 'Dashboard', 
      icon: BarChart3, 
      href: '/dashboard',
      description: 'View your account'
    },
    { 
      name: 'Get Your Card', 
      icon: CreditCard, 
      href: '/register',
      description: 'Digital & Physical cards'
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    setIsOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setShowUserMenu(false);
    // You might want to redirect to login page here
    // window.location.href = '/login';
  };

  const getInitials = (firstName, lastName) => {
    return `${firstName?.charAt(0) || ''}${lastName?.charAt(0) || ''}`.toUpperCase();
  };

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-gray-800/50' 
          : 'bg-black'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="/">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <Zap className="w-2 h-2 text-white" />
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
                  PrivatePass
                </h1>
                <p className="text-xs text-gray-400 -mt-1">Premium Access</p>
              </div>
            </div>
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleItemClick(item.name)}
                  className={`group relative px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeItem === item.name
                      ? 'bg-red-500/20 text-red-400'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <item.icon className="w-4 h-4" />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  
                  {/* Active indicator */}
                  {activeItem === item.name && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 rounded-full"></div>
                  )}
                  
                  {/* Hover tooltip */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    {item.description}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900"></div>
                  </div>
                </a>
              ))}
            </div>

            {/* Right side - User or CTA */}
            <div className="hidden sm:flex items-center space-x-4">
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-300"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {getInitials(user.firstName, user.lastName)}
                    </div>
                    <div className="text-left">
                      <div className="text-white font-medium text-sm">
                        {user.firstName} {user.lastName}
                      </div>
                      <div className="text-gray-400 text-xs">
                        {user.email}
                      </div>
                    </div>
                  </button>
                  
                  {/* User dropdown menu */}
                  {showUserMenu && (
                    <div className="absolute right-0 top-full mt-2 w-56 bg-gray-900 rounded-lg shadow-lg border border-gray-700 overflow-hidden">
                      <div className="p-4 border-b border-gray-700">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                            {getInitials(user.firstName, user.lastName)}
                          </div>
                          <div>
                            <div className="text-white font-medium">
                              {user.firstName} {user.lastName}
                            </div>
                            <div className="text-gray-400 text-sm">
                              {user.email}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-2">
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center space-x-2 p-3 text-left hover:bg-gray-800 rounded-lg transition-colors duration-200 text-gray-300 hover:text-white"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Sign Out</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <a href="/register">
                  <button className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25 cursor-pointer">
                    <span className="relative z-10">Get Started</span>
                    <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </a>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="relative w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <div className="relative">
                  <Menu className={`w-5 h-5 text-white transition-all duration-300 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
                  <X className={`w-5 h-5 text-white absolute inset-0 transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ${
          isOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="bg-gray-900/95 backdrop-blur-md border-t border-gray-800/50">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile User Info */}
              {user && (
                <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50 mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {getInitials(user.firstName, user.lastName)}
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-medium">
                        {user.firstName} {user.lastName}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {user.email}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full mt-3 flex items-center justify-center space-x-2 p-3 bg-red-600/20 hover:bg-red-600/30 rounded-lg transition-colors duration-200 text-red-400 hover:text-red-300"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}

              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleItemClick(item.name)}
                  className={`group flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
                    activeItem === item.name
                      ? 'bg-red-500/20 border border-red-500/30 text-red-400'
                      : 'bg-gray-800/50 hover:bg-gray-800 text-gray-300 hover:text-white'
                  }`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animation: isOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                  }}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    activeItem === item.name 
                      ? 'bg-red-500/20' 
                      : 'bg-gray-700 group-hover:bg-gray-600'
                  }`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-lg">{item.name}</div>
                    <div className="text-sm text-gray-400">{item.description}</div>
                  </div>
                  {activeItem === item.name && (
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  )}
                </a>
              ))}
              
              {/* Mobile CTA Button - only show if user not logged in */}
              {!user && (
                <a href="/register">
                  <button className="w-full mt-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25 cursor-pointer">
                    Get Started
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Click outside to close user menu */}
      {showUserMenu && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowUserMenu(false)}
        />
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}