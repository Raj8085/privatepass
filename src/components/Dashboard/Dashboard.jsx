// // // import React, { useState, useEffect } from 'react';
// // // import { Home, BarChart3, CreditCard, Users, HelpCircle, Menu, X, Lock, Unlock, Star, TrendingUp, Eye, Zap, Crown, Sparkles } from 'lucide-react';

// import ActivityCard from "./ActivityCard"
// import ChartCard from "./ChartCard"
// import Header from "./Header"
// import MetricCard from "./MetricCard"
// import Sidebar from "./Sidebar"
// import StatsGrid from "./StateGrid"

// // // const Dashboard = () => {
// // //   const [sidebarOpen, setSidebarOpen] = useState(false);
// // //   const [hoveredCard, setHoveredCard] = useState(null);
// // //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

// // //   const services = [
// // //     { 
// // //       name: 'Pornhub Premium', 
// // //       locked: true, 
// // //       popularity: 95,
// // //       subscribers: '2.1M',
// // //       gradient: 'from-orange-500 via-red-500 to-pink-500',
// // //       icon: Crown,
// // //       features: ['4K Content', 'Ad-Free', 'Exclusive']
// // //     },
// // //     { 
// // //       name: 'Brazzers', 
// // //       locked: true, 
// // //       popularity: 88,
// // //       subscribers: '1.8M',
// // //       gradient: 'from-yellow-400 via-orange-500 to-red-500',
// // //       icon: Star,
// // //       features: ['HD Streaming', 'Premium', 'New Daily']
// // //     },
// // //     { 
// // //       name: 'Reality Kings', 
// // //       locked: true, 
// // //       popularity: 92,
// // //       subscribers: '1.5M',
// // //       gradient: 'from-purple-500 via-pink-500 to-red-500',
// // //       icon: Zap,
// // //       features: ['Reality Content', 'HD Quality', 'Exclusive']
// // //     },
// // //     { 
// // //       name: 'OnlyFans', 
// // //       locked: true, 
// // //       popularity: 97,
// // //       subscribers: '3.2M',
// // //       gradient: 'from-blue-500 via-purple-500 to-pink-500',
// // //       icon: Sparkles,
// // //       features: ['Creator Content', 'Interactive', 'Personal']
// // //     },
// // //     { 
// // //       name: 'Fansly', 
// // //       locked: true, 
// // //       popularity: 85,
// // //       subscribers: '890K',
// // //       gradient: 'from-green-400 via-blue-500 to-purple-500',
// // //       icon: Eye,
// // //       features: ['Fan Interaction', 'Premium', 'Exclusive']
// // //     },
// // //     { 
// // //       name: 'VRBangers', 
// // //       locked: true, 
// // //       popularity: 90,
// // //       subscribers: '650K',
// // //       gradient: 'from-indigo-500 via-purple-500 to-pink-500',
// // //       icon: TrendingUp,
// // //       features: ['VR Experience', '360° Content', 'Immersive']
// // //     }
// // //   ];

// // //   const sidebarItems = [
// // //     { icon: Home, label: 'Home', active: false, gradient: 'from-blue-500 to-cyan-500' },
// // //     { icon: BarChart3, label: 'Dashboard', active: true, gradient: 'from-purple-500 to-pink-500' },
// // //     { icon: CreditCard, label: 'Plans', active: false, gradient: 'from-green-500 to-emerald-500' },
// // //     { icon: Users, label: 'Creators', active: false, gradient: 'from-orange-500 to-red-500' },
// // //     { icon: HelpCircle, label: 'Support', active: false, gradient: 'from-indigo-500 to-purple-500' }
// // //   ];

// // //   const stats = [
// // //     { label: 'Total Services', value: '6', icon: Crown, gradient: 'from-purple-500 to-pink-500' },
// // //     { label: 'Active Users', value: '10.2M', icon: Users, gradient: 'from-blue-500 to-cyan-500' },
// // //     { label: 'Monthly Revenue', value: '$2.4M', icon: TrendingUp, gradient: 'from-green-500 to-emerald-500' },
// // //     { label: 'Success Rate', value: '98.5%', icon: Star, gradient: 'from-orange-500 to-red-500' }
// // //   ];

// // //   useEffect(() => {
// // //     const handleMouseMove = (e) => {
// // //       setMousePosition({ x: e.clientX, y: e.clientY });
// // //     };
// // //     window.addEventListener('mousemove', handleMouseMove);
// // //     return () => window.removeEventListener('mousemove', handleMouseMove);
// // //   }, []);

// // //   return (
// // //     <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
// // //       {/* Animated Background */}
// // //       <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/10 to-pink-900/10"></div>
// // //       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      
// // //       {/* Floating Elements */}
// // //       <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-pulse"></div>
// // //       <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      
// // //       {/* Mouse Follow Effect */}
// // //       <div 
// // //         className="absolute pointer-events-none transition-all duration-300 ease-out"
// // //         style={{
// // //           left: mousePosition.x - 100,
// // //           top: mousePosition.y - 100,
// // //           width: 200,
// // //           height: 200,
// // //           background: 'radial-gradient(circle, rgba(147,51,234,0.05) 0%, transparent 70%)',
// // //           borderRadius: '50%',
// // //           filter: 'blur(40px)'
// // //         }}
// // //       />

// // //       {/* Mobile Sidebar Overlay */}
// // //       {sidebarOpen && (
// // //         <div 
// // //           className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
// // //           onClick={() => setSidebarOpen(false)}
// // //         />
// // //       )}

// // //       {/* Sidebar */}
// // //       <div className={`fixed left-0 top-0 h-full w-72 bg-gray-800/40 backdrop-blur-xl border-r border-gray-700/50 transform transition-all duration-500 ease-in-out z-50 ${
// // //         sidebarOpen ? 'translate-x-0' : '-translate-x-full'
// // //       } lg:translate-x-0 lg:static lg:inset-0`}>
// // //         <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
// // //           <div className="flex items-center space-x-3">
// // //             <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
// // //               <Crown className="text-white" size={20} />
// // //             </div>
// // //             <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
// // //               PrivatePass
// // //             </h1>
// // //           </div>
// // //           <button 
// // //             onClick={() => setSidebarOpen(false)}
// // //             className="lg:hidden text-gray-400 hover:text-white transition-colors"
// // //           >
// // //             <X size={24} />
// // //           </button>
// // //         </div>
        
// // //         <nav className="mt-8 px-4">
// // //           {sidebarItems.map((item, index) => (
// // //             <button
// // //               key={index}
// // //               className={`w-full flex items-center px-4 py-4 mb-2 rounded-xl text-left transition-all duration-300 group ${
// // //                 item.active 
// // //                   ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white shadow-lg shadow-purple-500/20' 
// // //                   : 'text-gray-300 hover:bg-white/5 hover:text-white hover:shadow-lg hover:shadow-white/10'
// // //               }`}
// // //             >
// // //               <div className={`p-2 rounded-lg mr-4 bg-gradient-to-r ${item.gradient} ${item.active ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'} transition-opacity`}>
// // //                 <item.icon size={18} className="text-white" />
// // //               </div>
// // //               <span className="font-medium">{item.label}</span>
// // //             </button>
// // //           ))}
// // //         </nav>

// // //         {/* Sidebar Stats */}
// // //         <div className="absolute bottom-6 left-4 right-4 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
// // //           <div className="text-sm text-gray-400 mb-2">Premium Status</div>
// // //           <div className="flex items-center justify-between">
// // //             <span className="text-green-400 font-semibold">Active</span>
// // //             <Crown className="text-yellow-400" size={16} />
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Main Content */}
// // //       <div className="lg:ml-72">
// // //         {/* Header */}
// // //         <header className="bg-gray-800/40 backdrop-blur-xl px-6 py-4 border-b border-gray-700/50 sticky top-0 z-30">
// // //           <div className="flex items-center justify-between">
// // //             <div className="flex items-center">
// // //               <button 
// // //                 onClick={() => setSidebarOpen(true)}
// // //                 className="mr-4 lg:hidden text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
// // //               >
// // //                 <Menu size={24} />
// // //               </button>
// // //               <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
// // //                 Dashboard
// // //               </h2>
// // //             </div>
// // //             <div className="flex items-center space-x-4">
// // //               <div className="hidden sm:flex items-center space-x-4 px-4 py-2 bg-green-500/10 rounded-xl border border-green-500/20">
// // //                 <span className="text-sm text-gray-300">Wallet Balance</span>
// // //                 <span className="text-xl font-bold text-green-400">$0.00</span>
// // //               </div>
// // //               <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
// // //                 <div className="w-6 h-6 bg-white/20 rounded-full"></div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </header>

// // //         {/* Dashboard Content */}
// // //         <main className="p-6 lg:p-8">
// // //           {/* Stats Cards */}
// // //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
// // //             {stats.map((stat, index) => (
// // //               <div 
// // //                 key={index}
// // //                 className="bg-gray-800/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group"
// // //               >
// // //                 <div className="flex items-center justify-between mb-4">
// // //                   <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.gradient} shadow-lg`}>
// // //                     <stat.icon className="text-white" size={20} />
// // //                   </div>
// // //                   <div className="text-right">
// // //                     <div className="text-2xl font-bold">{stat.value}</div>
// // //                     <div className="text-sm text-gray-400">{stat.label}</div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>

// // //           {/* Mobile Wallet Balance */}
// // //           <div className="sm:hidden mb-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20">
// // //             <div className="flex justify-between items-center">
// // //               <span className="text-sm text-gray-300">Wallet Balance</span>
// // //               <span className="text-xl font-bold text-green-400">$0.00</span>
// // //             </div>
// // //           </div>

// // //           {/* Services Grid */}
// // //           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
// // //             {services.map((service, index) => (
// // //               <div 
// // //                 key={index}
// // //                 className="relative bg-gray-800/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 group cursor-pointer overflow-hidden"
// // //                 onMouseEnter={() => setHoveredCard(index)}
// // //                 onMouseLeave={() => setHoveredCard(null)}
// // //               >
// // //                 {/* Gradient Background */}
// // //                 <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
// // //                 {/* Content */}
// // //                 <div className="relative z-10">
// // //                   <div className="flex items-center justify-between mb-4">
// // //                     <div className={`p-3 rounded-xl bg-gradient-to-r ${service.gradient} shadow-lg`}>
// // //                       <service.icon className="text-white" size={24} />
// // //                     </div>
// // //                     <div className="text-right">
// // //                       <div className="text-sm text-gray-400">Subscribers</div>
// // //                       <div className="text-lg font-bold">{service.subscribers}</div>
// // //                     </div>
// // //                   </div>
                  
// // //                   <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">
// // //                     {service.name}
// // //                   </h3>
                  
// // //                   {/* Popularity Bar */}
// // //                   <div className="mb-4">
// // //                     <div className="flex justify-between text-sm text-gray-400 mb-2">
// // //                       <span>Popularity</span>
// // //                       <span>{service.popularity}%</span>
// // //                     </div>
// // //                     <div className="w-full bg-gray-700 rounded-full h-2">
// // //                       <div 
// // //                         className={`h-2 rounded-full bg-gradient-to-r ${service.gradient} transition-all duration-1000`}
// // //                         style={{ width: hoveredCard === index ? `${service.popularity}%` : '0%' }}
// // //                       ></div>
// // //                     </div>
// // //                   </div>
                  
// // //                   {/* Features */}
// // //                   <div className="mb-6">
// // //                     <div className="flex flex-wrap gap-2">
// // //                       {service.features.map((feature, idx) => (
// // //                         <span 
// // //                           key={idx}
// // //                           className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300"
// // //                         >
// // //                           {feature}
// // //                         </span>
// // //                       ))}
// // //                     </div>
// // //                   </div>
                  
// // //                   {/* Lock Section */}
// // //                   <div className="flex flex-col items-center space-y-3">
// // //                     <div className="relative">
// // //                       <Lock 
// // //                         size={32} 
// // //                         className="text-red-400 group-hover:text-red-300 transition-colors" 
// // //                       />
// // //                       <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
// // //                     </div>
// // //                     <button className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
// // //                       Unlock with PrivatePass
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>

// // //           {/* Quick Actions */}
// // //           <div className="bg-gray-800/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
// // //             <h3 className="text-xl font-bold mb-6">Quick Actions</h3>
// // //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
// // //               <button className="group p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
// // //                 <div className="flex items-center justify-center space-x-2">
// // //                   <CreditCard size={20} />
// // //                   <span>Add Funds</span>
// // //                 </div>
// // //               </button>
// // //               <button className="group p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25">
// // //                 <div className="flex items-center justify-center space-x-2">
// // //                   <Crown size={20} />
// // //                   <span>Upgrade Plan</span>
// // //                 </div>
// // //               </button>
// // //               <button className="group p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
// // //                 <div className="flex items-center justify-center space-x-2">
// // //                   <BarChart3 size={20} />
// // //                   <span>View Analytics</span>
// // //                 </div>
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </main>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Dashboard;





// // import React, { useState, useEffect } from 'react';
// // import { Home, BarChart3, CreditCard, Users, HelpCircle, Menu, X, Lock, Unlock, Star, TrendingUp, Eye, Zap, Crown, Sparkles, ChevronRight, Activity, Award, Shield, Globe } from 'lucide-react';

// // const Dashboard = () => {
// //   const [sidebarOpen, setSidebarOpen] = useState(false);
// //   const [hoveredCard, setHoveredCard] = useState(null);
// //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
// //   const [activeFilter, setActiveFilter] = useState('all');

// //   const services = [
// //     { 
// //       name: 'Pornhub Premium', 
// //       locked: true, 
// //       popularity: 95,
// //       subscribers: '2.1M',
// //       gradient: 'from-orange-500 via-red-500 to-pink-500',
// //       bgGradient: 'from-orange-500/20 via-red-500/20 to-pink-500/20',
// //       icon: Crown,
// //       features: ['4K Content', 'Ad-Free', 'Exclusive', 'Downloads'],
// //       rating: 4.9,
// //       category: 'premium',
// //       trending: true
// //     },
// //     { 
// //       name: 'Brazzers', 
// //       locked: true, 
// //       popularity: 88,
// //       subscribers: '1.8M',
// //       gradient: 'from-yellow-400 via-orange-500 to-red-500',
// //       bgGradient: 'from-yellow-400/20 via-orange-500/20 to-red-500/20',
// //       icon: Star,
// //       features: ['HD Streaming', 'Premium', 'New Daily', 'Studio Quality'],
// //       rating: 4.7,
// //       category: 'premium',
// //       trending: false
// //     },
// //     { 
// //       name: 'Reality Kings', 
// //       locked: true, 
// //       popularity: 92,
// //       subscribers: '1.5M',
// //       gradient: 'from-purple-500 via-pink-500 to-red-500',
// //       bgGradient: 'from-purple-500/20 via-pink-500/20 to-red-500/20',
// //       icon: Zap,
// //       features: ['Reality Content', 'HD Quality', 'Exclusive', 'Interactive'],
// //       rating: 4.8,
// //       category: 'premium',
// //       trending: true
// //     },
// //     { 
// //       name: 'OnlyFans', 
// //       locked: true, 
// //       popularity: 97,
// //       subscribers: '3.2M',
// //       gradient: 'from-blue-500 via-purple-500 to-pink-500',
// //       bgGradient: 'from-blue-500/20 via-purple-500/20 to-pink-500/20',
// //       icon: Sparkles,
// //       features: ['Creator Content', 'Interactive', 'Personal', 'Live Streams'],
// //       rating: 4.9,
// //       category: 'creator',
// //       trending: true
// //     },
// //     { 
// //       name: 'Fansly', 
// //       locked: true, 
// //       popularity: 85,
// //       subscribers: '890K',
// //       gradient: 'from-green-400 via-blue-500 to-purple-500',
// //       bgGradient: 'from-green-400/20 via-blue-500/20 to-purple-500/20',
// //       icon: Eye,
// //       features: ['Fan Interaction', 'Premium', 'Exclusive', 'Tips'],
// //       rating: 4.6,
// //       category: 'creator',
// //       trending: false
// //     },
// //     { 
// //       name: 'VRBangers', 
// //       locked: true, 
// //       popularity: 90,
// //       subscribers: '650K',
// //       gradient: 'from-indigo-500 via-purple-500 to-pink-500',
// //       bgGradient: 'from-indigo-500/20 via-purple-500/20 to-pink-500/20',
// //       icon: TrendingUp,
// //       features: ['VR Experience', '360° Content', 'Immersive', '8K Quality'],
// //       rating: 4.8,
// //       category: 'vr',
// //       trending: true
// //     }
// //   ];

// //   const sidebarItems = [
// //     { icon: Home, label: 'Home', active: false, gradient: 'from-blue-500 to-cyan-500' },
// //     { icon: BarChart3, label: 'Dashboard', active: true, gradient: 'from-purple-500 to-pink-500' },
// //     { icon: CreditCard, label: 'Plans', active: false, gradient: 'from-green-500 to-emerald-500' },
// //     { icon: Users, label: 'Creators', active: false, gradient: 'from-orange-500 to-red-500' },
// //     { icon: HelpCircle, label: 'Support', active: false, gradient: 'from-indigo-500 to-purple-500' }
// //   ];

// //   const stats = [
// //     { label: 'Total Services', value: '6', change: '+12%', icon: Crown, gradient: 'from-purple-500 to-pink-500' },
// //     { label: 'Active Users', value: '10.2M', change: '+8.5%', icon: Users, gradient: 'from-blue-500 to-cyan-500' },
// //     { label: 'Monthly Revenue', value: '$2.4M', change: '+15.2%', icon: TrendingUp, gradient: 'from-green-500 to-emerald-500' },
// //     { label: 'Success Rate', value: '98.5%', change: '+2.1%', icon: Star, gradient: 'from-orange-500 to-red-500' }
// //   ];

// //   const filters = [
// //     { id: 'all', label: 'All Services', count: 6 },
// //     { id: 'premium', label: 'Premium', count: 3 },
// //     { id: 'creator', label: 'Creator', count: 2 },
// //     { id: 'vr', label: 'VR Content', count: 1 }
// //   ];

// //   const filteredServices = activeFilter === 'all' 
// //     ? services 
// //     : services.filter(service => service.category === activeFilter);

// //   useEffect(() => {
// //     const handleMouseMove = (e) => {
// //       setMousePosition({ x: e.clientX, y: e.clientY });
// //     };
// //     window.addEventListener('mousemove', handleMouseMove);
// //     return () => window.removeEventListener('mousemove', handleMouseMove);
// //   }, []);

// //   return (
// //     <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
// //       {/* Enhanced Animated Background for Laptop */}
// //       <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-pink-900/20"></div>
// //       <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.15),transparent_50%)]"></div>
// //       <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_50%)]"></div>
      
// //       {/* Multiple Floating Elements for Laptop */}
// //       <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
// //       <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
// //       <div className="absolute bottom-20 left-40 w-48 h-48 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
// //       <div className="absolute bottom-40 right-60 w-56 h-56 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse delay-1500"></div>
      
// //       {/* Enhanced Mouse Follow Effect */}
// //       <div 
// //         className="absolute pointer-events-none transition-all duration-300 ease-out hidden lg:block"
// //         style={{
// //           left: mousePosition.x - 150,
// //           top: mousePosition.y - 150,
// //           width: 300,
// //           height: 300,
// //           background: 'radial-gradient(circle, rgba(147,51,234,0.08) 0%, rgba(236,72,153,0.05) 30%, transparent 70%)',
// //           borderRadius: '50%',
// //           filter: 'blur(60px)'
// //         }}
// //       />

// //       {/* Mobile Sidebar Overlay */}
// //       {sidebarOpen && (
// //         <div 
// //           className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
// //           onClick={() => setSidebarOpen(false)}
// //         />
// //       )}

// //       {/* Enhanced Sidebar for Laptop */}
// //       <div className={`fixed left-0 top-0 h-full w-80 bg-gray-800/30 backdrop-blur-2xl border-r border-gray-700/30 transform transition-all duration-500 ease-in-out z-50 ${
// //         sidebarOpen ? 'translate-x-0' : '-translate-x-full'
// //       } lg:translate-x-0 lg:static lg:inset-0`}>
// //         <div className="flex items-center justify-between p-8 border-b border-gray-700/30">
// //           <div className="flex items-center space-x-4">
// //             <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25">
// //               <Crown className="text-white" size={24} />
// //             </div>
// //             <div>
// //               <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
// //                 PrivatePass
// //               </h1>
// //               <p className="text-xs text-gray-400">Premium Dashboard</p>
// //             </div>
// //           </div>
// //           <button 
// //             onClick={() => setSidebarOpen(false)}
// //             className="lg:hidden text-gray-400 hover:text-white transition-colors"
// //           >
// //             <X size={24} />
// //           </button>
// //         </div>
        
// //         <nav className="mt-8 px-6">
// //           {sidebarItems.map((item, index) => (
// //             <button
// //               key={index}
// //               className={`w-full flex items-center px-6 py-4 mb-3 rounded-2xl text-left transition-all duration-300 group ${
// //                 item.active 
// //                   ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white shadow-lg shadow-purple-500/20 border border-purple-500/20' 
// //                   : 'text-gray-300 hover:bg-white/5 hover:text-white hover:shadow-lg hover:shadow-white/10'
// //               }`}
// //             >
// //               <div className={`p-3 rounded-xl mr-4 bg-gradient-to-r ${item.gradient} ${item.active ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'} transition-opacity shadow-lg`}>
// //                 <item.icon size={20} className="text-white" />
// //               </div>
// //               <span className="font-medium text-lg">{item.label}</span>
// //               {item.active && <ChevronRight className="ml-auto" size={16} />}
// //             </button>
// //           ))}
// //         </nav>

// //         {/* Enhanced Sidebar Bottom Section */}
// //         <div className="absolute bottom-6 left-6 right-6 space-y-4">
// //           <div className="p-6 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-2xl border border-purple-500/20 backdrop-blur-xl">
// //             <div className="flex items-center justify-between mb-3">
// //               <div className="flex items-center space-x-3">
// //                 <Shield className="text-green-400" size={20} />
// //                 <span className="text-green-400 font-semibold">Premium Active</span>
// //               </div>
// //               <Crown className="text-yellow-400" size={20} />
// //             </div>
// //             <div className="text-xs text-gray-400 mb-2">Valid until: Dec 2025</div>
// //             <div className="w-full bg-gray-700/50 rounded-full h-2">
// //               <div className="h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full" style={{width: '75%'}}></div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main Content Enhanced for Laptop */}
// //       <div className="lg:ml-80">
// //         {/* Enhanced Header */}
// //         <header className="bg-gray-800/30 backdrop-blur-2xl px-8 py-6 border-b border-gray-700/30 sticky top-0 z-30">
// //           <div className="flex items-center justify-between">
// //             <div className="flex items-center space-x-6">
// //               <button 
// //                 onClick={() => setSidebarOpen(true)}
// //                 className="mr-4 lg:hidden text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
// //               >
// //                 <Menu size={24} />
// //               </button>
// //               <div>
// //                 <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
// //                   Dashboard
// //                 </h2>
// //                 <p className="text-gray-400 text-sm mt-1">Welcome back to your premium dashboard</p>
// //               </div>
// //             </div>
// //             <div className="flex items-center space-x-6">
// //               <div className="hidden md:flex items-center space-x-4 px-6 py-3 bg-green-500/15 rounded-2xl border border-green-500/20 backdrop-blur-xl">
// //                 <Activity className="text-green-400" size={20} />
// //                 <div>
// //                   <div className="text-sm text-gray-300">Wallet Balance</div>
// //                   <div className="text-2xl font-bold text-green-400">$0.00</div>
// //                 </div>
// //               </div>
// //               <div className="flex items-center space-x-3">
// //                 <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25">
// //                   <div className="w-6 h-6 bg-white/20 rounded-full"></div>
// //                 </div>
// //                 <div className="hidden lg:block">
// //                   <div className="text-sm font-medium">John Doe</div>
// //                   <div className="text-xs text-gray-400">Premium User</div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </header>

// //         {/* Enhanced Dashboard Content */}
// //         <main className="p-8 lg:p-12">
// //           {/* Enhanced Stats Cards for Laptop */}
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
// //             {stats.map((stat, index) => (
// //               <div 
// //                 key={index}
// //                 className="bg-gray-800/30 backdrop-blur-2xl rounded-3xl p-8 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 group hover:transform hover:scale-105 hover:shadow-2xl"
// //               >
// //                 <div className="flex items-center justify-between mb-6">
// //                   <div className={`p-4 rounded-2xl bg-gradient-to-r ${stat.gradient} shadow-lg group-hover:shadow-xl transition-shadow`}>
// //                     <stat.icon className="text-white" size={24} />
// //                   </div>
// //                   <div className="text-right">
// //                     <div className="text-3xl font-bold mb-1">{stat.value}</div>
// //                     <div className="text-sm text-green-400 font-medium">{stat.change}</div>
// //                   </div>
// //                 </div>
// //                 <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Mobile Wallet Balance */}
// //           <div className="md:hidden mb-8 p-6 bg-gradient-to-r from-green-500/15 to-emerald-500/15 rounded-2xl border border-green-500/20 backdrop-blur-xl">
// //             <div className="flex justify-between items-center">
// //               <div className="flex items-center space-x-3">
// //                 <Activity className="text-green-400" size={20} />
// //                 <span className="text-sm text-gray-300">Wallet Balance</span>
// //               </div>
// //               <span className="text-2xl font-bold text-green-400">$0.00</span>
// //             </div>
// //           </div>

// //           {/* Enhanced Filter Section */}
// //           <div className="mb-8">
// //             <div className="flex flex-wrap gap-4 mb-6">
// //               {filters.map((filter) => (
// //                 <button
// //                   key={filter.id}
// //                   onClick={() => setActiveFilter(filter.id)}
// //                   className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
// //                     activeFilter === filter.id
// //                       ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
// //                       : 'bg-gray-800/30 text-gray-300 hover:bg-gray-700/50 hover:text-white backdrop-blur-xl border border-gray-700/30'
// //                   }`}
// //                 >
// //                   {filter.label} ({filter.count})
// //                 </button>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Enhanced Services Grid for Laptop */}
// //           <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 mb-12">
// //             {filteredServices.map((service, index) => (
// //               <div 
// //                 key={index}
// //                 className="relative bg-gray-800/30 backdrop-blur-2xl rounded-3xl p-8 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-500 group cursor-pointer overflow-hidden min-h-[400px]"
// //                 onMouseEnter={() => setHoveredCard(index)}
// //                 onMouseLeave={() => setHoveredCard(null)}
// //               >
// //                 {/* Enhanced Gradient Background */}
// //                 <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
// //                 {/* Trending Badge */}
// //                 {service.trending && (
// //                   <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-xs font-bold text-white">
// //                     🔥 TRENDING
// //                   </div>
// //                 )}
                
// //                 {/* Content */}
// //                 <div className="relative z-10 h-full flex flex-col">
// //                   <div className="flex items-center justify-between mb-6">
// //                     <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.gradient} shadow-lg group-hover:shadow-xl transition-shadow`}>
// //                       <service.icon className="text-white" size={28} />
// //                     </div>
// //                     <div className="text-right">
// //                       <div className="text-sm text-gray-400 mb-1">Subscribers</div>
// //                       <div className="text-xl font-bold">{service.subscribers}</div>
// //                       <div className="flex items-center space-x-1 mt-1">
// //                         <Star className="text-yellow-400 fill-current" size={14} />
// //                         <span className="text-sm text-yellow-400 font-medium">{service.rating}</span>
// //                       </div>
// //                     </div>
// //                   </div>
                  
// //                   <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
// //                     {service.name}
// //                   </h3>
                  
// //                   {/* Enhanced Popularity Bar */}
// //                   <div className="mb-6">
// //                     <div className="flex justify-between text-sm text-gray-400 mb-3">
// //                       <span>Popularity Score</span>
// //                       <span className="font-medium">{service.popularity}%</span>
// //                     </div>
// //                     <div className="w-full bg-gray-700/50 rounded-full h-3">
// //                       <div 
// //                         className={`h-3 rounded-full bg-gradient-to-r ${service.gradient} transition-all duration-1000 shadow-lg`}
// //                         style={{ width: hoveredCard === index ? `${service.popularity}%` : '0%' }}
// //                       ></div>
// //                     </div>
// //                   </div>
                  
// //                   {/* Enhanced Features */}
// //                   <div className="mb-8 flex-grow">
// //                     <div className="text-sm text-gray-400 mb-3 font-medium">Features</div>
// //                     <div className="grid grid-cols-2 gap-2">
// //                       {service.features.map((feature, idx) => (
// //                         <div 
// //                           key={idx}
// //                           className="flex items-center space-x-2 px-3 py-2 bg-gray-700/30 rounded-xl text-sm text-gray-300 backdrop-blur-xl"
// //                         >
// //                           <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
// //                           <span>{feature}</span>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </div>
                  
// //                   {/* Enhanced Lock Section */}
// //                   <div className="flex flex-col items-center space-y-4 mt-auto">
// //                     <div className="relative">
// //                       <div className="p-4 bg-red-500/20 rounded-2xl border border-red-500/30">
// //                         <Lock 
// //                           size={32} 
// //                           className="text-red-400 group-hover:text-red-300 transition-colors" 
// //                         />
// //                       </div>
// //                       <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
// //                     </div>
// //                     <button className="w-full py-4 px-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 text-lg">
// //                       Unlock Premium Access
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Enhanced Quick Actions for Laptop */}
// //           <div className="bg-gray-800/30 backdrop-blur-2xl rounded-3xl p-8 border border-gray-700/30">
// //             <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Quick Actions</h3>
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //               <button className="group p-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
// //                 <div className="flex items-center justify-center space-x-3 mb-2">
// //                   <CreditCard size={24} />
// //                   <span className="text-lg">Add Funds</span>
// //                 </div>
// //                 <div className="text-sm opacity-80">Add money to your wallet</div>
// //               </button>
// //               <button className="group p-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25">
// //                 <div className="flex items-center justify-center space-x-3 mb-2">
// //                   <Crown size={24} />
// //                   <span className="text-lg">Upgrade Plan</span>
// //                 </div>
// //                 <div className="text-sm opacity-80">Get premium features</div>
// //               </button>
// //               <button className="group p-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
// //                 <div className="flex items-center justify-center space-x-3 mb-2">
// //                   <BarChart3 size={24} />
// //                   <span className="text-lg">View Analytics</span>
// //                 </div>
// //                 <div className="text-sm opacity-80">Check your statistics</div>
// //               </button>
// //             </div>
// //           </div>
// //         </main>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;



// const Dashboard = () => {
//   return (
//     <div>
//         <Header/>
//         <Sidebar/>
//       <ActivityCard/>
//       <ChartCard/>
//       <MetricCard/>
//       <StatsGrid/>
//     </div>
//   )
// }

// export default Dashboard
