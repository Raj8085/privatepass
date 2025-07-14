// // // // // import React, { useState } from 'react';

// // // // // import { 
// // // // //   Users, 
// // // // //   DollarSign, 
// // // // //   TrendingUp, 
// // // // //   ShoppingCart 
// // // // // } from 'lucide-react';
// // // // // import Sidebar from './Sidebar';
// // // // // import Header from './Header';
// // // // // import MetricCard from './MetricCard';


// // // // // function MainDashboard() {
// // // // //   const [activeItem, setActiveItem] = useState('dashboard');
// // // // //   const [sidebarOpen, setSidebarOpen] = useState(false);

// // // // //   const handleMenuClick = () => {
// // // // //     setSidebarOpen(!sidebarOpen);
// // // // //   };

// // // // //   const handleItemClick = (item) => {
// // // // //     setActiveItem(item);
// // // // //     setSidebarOpen(false);
// // // // //   };

// // // // //   return (
// // // // //     <div className="flex min-h-screen bg-black mt-24">
// // // // //       {/* Sidebar */}
// // // // //       <div className={`fixed inset-y-0 left-0 z-50 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:relative md:translate-x-0`}>
// // // // //         <Sidebar activeItem={activeItem} onItemClick={handleItemClick} />
// // // // //       </div>

// // // // //       {/* Overlay for mobile */}
// // // // //       {sidebarOpen && (
// // // // //         <div 
// // // // //           className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
// // // // //           onClick={() => setSidebarOpen(false)}
// // // // //         />
// // // // //       )}

// // // // //       {/* Main content */}
// // // // //       <div className="flex-1 flex flex-col overflow-hidden">
// // // // //         <Header onMenuClick={handleMenuClick} />
        
// // // // //         <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-100 p-6">
// // // // //           <div className="max-w-7xl mx-auto">
// // // // //             {/* Page header */}
// // // // //             <div className="mb-8">
// // // // //               <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
// // // // //               <p className="text-slate-600 mt-2">Welcome back! Here's what's happening with your business today.</p>
// // // // //             </div>

// // // // //             {/* Metrics cards */}
// // // // //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
// // // // //               <MetricCard
// // // // //                 title="Total Revenue"
// // // // //                 value="$94,253"
// // // // //                 change="12.5%"
// // // // //                 changeType="increase"
// // // // //                 icon={DollarSign}
// // // // //                 color="bg-green-500"
// // // // //               />
// // // // //               <MetricCard
// // // // //                 title="New Customers"
// // // // //                 value="1,429"
// // // // //                 change="8.2%"
// // // // //                 changeType="increase"
// // // // //                 icon={Users}
// // // // //                 color="bg-blue-500"
// // // // //               />
// // // // //               <MetricCard
// // // // //                 title="Orders"
// // // // //                 value="2,847"
// // // // //                 change="3.1%"
// // // // //                 changeType="decrease"
// // // // //                 icon={ShoppingCart}
// // // // //                 color="bg-purple-500"
// // // // //               />
// // // // //               <MetricCard
// // // // //                 title="Growth Rate"
// // // // //                 value="23.8%"
// // // // //                 change="5.4%"
// // // // //                 changeType="increase"
// // // // //                 icon={TrendingUp}
// // // // //                 color="bg-orange-500"
// // // // //               />
// // // // //             </div>

// // // // //             {/* Charts and activity */}
          
// // // // //           </div>
// // // // //         </main>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default MainDashboard;


// // // // import React, { useState } from 'react';
// // // // import { 
// // // //   Users, 
// // // //   DollarSign, 
// // // //   TrendingUp, 
// // // //   ShoppingCart,
// // // //   Lock
// // // // } from 'lucide-react';

// // // // // MetricCard Component (embedded for demo)
// // // // const MetricCard = ({ 
// // // //   title, 
// // // //   value, 
// // // //   change, 
// // // //   changeType, 
// // // //   color,
// // // //   isLocked = false,
// // // //   unlockText = "Unlock with Premium"
// // // // }) => {
// // // //   if (isLocked) {
// // // //     return (
// // // //       <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl shadow-lg border border-slate-700 p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
// // // //         {/* Background blur effect */}
// // // //         <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        
// // // //         {/* Content */}
// // // //         <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[120px]">
// // // //           <div className="mb-4">
// // // //             <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mb-3">
// // // //               <Lock className="w-6 h-6 text-orange-400" />
// // // //             </div>
// // // //           </div>
          
// // // //           <h3 className="text-white text-lg font-semibold mb-2 text-center">{title}</h3>
          
// // // //           <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm">
// // // //             {unlockText}
// // // //           </button>
// // // //         </div>
        
// // // //         {/* Decorative elements */}
// // // //         <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
// // // //         <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-full translate-y-8 -translate-x-8"></div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow duration-200">
// // // //       <div className="flex items-center justify-between">
// // // //         <div className="flex-1">
// // // //           <h3 className="text-slate-600 text-sm font-medium">{title}</h3>
// // // //           <p className="text-2xl font-bold text-slate-900 mt-1">{value}</p>
// // // //           <div className="flex items-center mt-2">
// // // //             <span className={`text-sm font-medium ${
// // // //               changeType === 'increase' ? 'text-green-600' : 'text-red-600'
// // // //             }`}>
// // // //               {changeType === 'increase' ? '+' : '-'}{change}
// // // //             </span>
// // // //             <span className="text-slate-500 text-sm ml-1">vs last month</span>
// // // //           </div>
// // // //         </div>
        
// // // //         <div className={`p-3 rounded-lg ${color}`}>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // // Simple Header Component


// // // // // Simple Sidebar Component
// // // // const Sidebar = ({ activeItem, onItemClick }) => (
// // // //   <div className="w-64 bg-slate-900 text-white h-full">
// // // //     <div className="p-6">
// // // //       <h2 className="text-xl font-bold text-red-500">Your Private Pass Dashboard</h2>
// // // //     </div>
// // // //     <nav className="mt-8">
// // // //       {['dashboard', 'Top Sites', 'Creators', 'Support'].map((item) => (
// // // //         <button
// // // //           key={item}
// // // //           onClick={() => onItemClick(item)}
// // // //           className={`w-full text-left px-6 py-3 capitalize hover:bg-slate-800 ${
// // // //             activeItem === item ? 'bg-slate-800 border-r-2 border-blue-500' : ''
// // // //           }`}
// // // //         >
// // // //           {item}
// // // //         </button>
// // // //       ))}
// // // //     </nav>
// // // //   </div>
// // // // );

// // // // function MainDashboard() {
// // // //   const [activeItem, setActiveItem] = useState('dashboard');
// // // //   const [sidebarOpen, setSidebarOpen] = useState(false);

  

// // // //   const handleItemClick = (item) => {
// // // //     setActiveItem(item);
// // // //     setSidebarOpen(false);
// // // //   };

// // // //   return (
// // // //     <div className="flex min-h-screen bg-black mt-24">
// // // //       {/* Sidebar */}
// // // //       <div className={`fixed inset-y-0 left-0 z-50 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:relative md:translate-x-0`}>
// // // //         <Sidebar activeItem={activeItem} onItemClick={handleItemClick} />
// // // //       </div>

// // // //       {/* Overlay for mobile */}
// // // //       {sidebarOpen && (
// // // //         <div 
// // // //           className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
// // // //           onClick={() => setSidebarOpen(false)}
// // // //         />
// // // //       )}

// // // //       {/* Main content */}
// // // //       <div className="flex-1 flex flex-col overflow-hidden">
        
// // // //         <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-100 p-6">
// // // //           <div className="max-w-7xl mx-auto">
// // // //             {/* Page header */}
// // // //             <div className="mb-8">
// // // //               <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
// // // //               <p className="text-slate-600 mt-2">Welcome back! Here's what's happening with your business today.</p>
// // // //             </div>

// // // //             {/* Metrics cards - Mix of locked and unlocked */}
// // // //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
// // // //               {/* <MetricCard
// // // //                 title="Total Revenue"
// // // //                 value="$94,253"
// // // //                 change="12.5%"
// // // //                 changeType="increase"
// // // //                 icon={DollarSign}
// // // //                 color="bg-green-500"
// // // //                 isLocked={false}
// // // //               /> */}
// // // //               <MetricCard
// // // //                 title="Premium Analytics"
// // // //                 isLocked={true}
// // // //                 unlockText="Unlock with Premium"
// // // //               />
// // // //               <MetricCard
// // // //                 title="Advanced Reports"
// // // //                 isLocked={true}
// // // //                 unlockText="Unlock with Pro"
// // // //               />

// // // //                <MetricCard
// // // //                 title="Customer Insights"
// // // //                 isLocked={true}
// // // //                 unlockText="Unlock with Premium"
// // // //               />

// // // //                <MetricCard
// // // //                 title="Sales Forecasting"
// // // //                 isLocked={true}
// // // //                 unlockText="Unlock with Enterprise"
// // // //               />
// // // //                 <MetricCard
// // // //                 title="Competitor Analysis"
// // // //                 isLocked={true}
// // // //                 unlockText="Unlock with Pro"
// // // //               />
             
// // // //             </div>

// // // //             {/* Additional locked content examples */}
// // // //             {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
// // // //               <MetricCard
// // // //                 title="Customer Insights"
// // // //                 isLocked={true}
// // // //                 unlockText="Unlock with Premium"
// // // //               />
// // // //               <MetricCard
// // // //                 title="Sales Forecasting"
// // // //                 isLocked={true}
// // // //                 unlockText="Unlock with Enterprise"
// // // //               />
// // // //               <MetricCard
// // // //                 title="Competitor Analysis"
// // // //                 isLocked={true}
// // // //                 unlockText="Unlock with Pro"
// // // //               />
// // // //             </div> */}
// // // //           </div>
// // // //         </main>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default MainDashboard;


// // // import React, { useState } from 'react';
// // // import { 
// // //   Home, 
// // //   Globe, 
// // //   Users, 
// // //   HelpCircle,
// // //   Lock,
// // //   X,
// // //   Star,
// // //   Play,
// // //   Eye,
// // //   Heart,
// // //   Download,
// // //   MessageCircle,
// // //   Calendar,
// // //   Mail,
// // //   Phone,
// // //   MapPin,
// // //   Award,
// // //   TrendingUp,
// // //   DollarSign,
// // //   UserPlus,
// // //   Activity
// // // } from 'lucide-react';
// // // import { HomePage } from './Subscription/HomePage';

// // // // Enhanced MetricCard Component
// // // const MetricCard = ({ 
// // //   title, 
// // //   value, 
// // //   change, 
// // //   changeType, 
// // //   color,
// // //   icon: Icon,
// // //   isLocked = false,
// // //   unlockText = "Unlock with Premium",
// // //   onClick
// // // }) => {
// // //   if (isLocked) {
// // //     return (
// // //       <div 
// // //         className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl shadow-lg border border-slate-700 p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden cursor-pointer group"
// // //         onClick={onClick}
// // //       >
// // //         {/* Background blur effect */}
// // //         <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        
// // //         {/* Content */}
// // //         <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[120px]">
// // //           <div className="mb-4">
// // //             <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-orange-500/30 transition-colors duration-200">
// // //               <Lock className="w-6 h-6 text-orange-400" />
// // //             </div>
// // //           </div>
          
// // //           <h3 className="text-white text-lg font-semibold mb-2 text-center">{title}</h3>
          
// // //           <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm group-hover:scale-105 transform">
// // //             {unlockText}
// // //           </button>
// // //         </div>
        
// // //         {/* Decorative elements */}
// // //         <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
// // //         <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-full translate-y-8 -translate-x-8"></div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow duration-200">
// // //       <div className="flex items-center justify-between">
// // //         <div className="flex-1">
// // //           <h3 className="text-slate-600 text-sm font-medium">{title}</h3>
// // //           <p className="text-2xl font-bold text-slate-900 mt-1">{value}</p>
// // //           <div className="flex items-center mt-2">
// // //             <span className={`text-sm font-medium ${
// // //               changeType === 'increase' ? 'text-green-600' : 'text-red-600'
// // //             }`}>
// // //               {changeType === 'increase' ? '+' : '-'}{change}
// // //             </span>
// // //             <span className="text-slate-500 text-sm ml-1">vs last month</span>
// // //           </div>
// // //         </div>
        
// // //         <div className={`p-3 rounded-lg ${color}`}>
// // //           {Icon && <Icon className="w-6 h-6 text-white" />}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // // Premium Unlock Modal
// // // const PremiumModal = ({ isOpen, onClose, feature }) => {
// // //   if (!isOpen) return null;

// // //   return (
// // //     <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
// // //       {/* Backdrop */}
// // //       <div 
// // //         className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
// // //         onClick={onClose}
// // //       />
      
// // //       {/* Modal */}
// // //       <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl border border-gray-700/50 w-full max-w-md transform transition-all duration-300 scale-100">
// // //         {/* Close Button */}
// // //         <button
// // //           onClick={onClose}
// // //           className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 z-10"
// // //         >
// // //           <X className="w-6 h-6" />
// // //         </button>
        
// // //         {/* Content */}
// // //         <div className="p-8">
// // //           {/* Header */}
// // //           <div className="text-center mb-8">
// // //             <div className="bg-orange-500/20 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
// // //               <Award className="w-10 h-10 text-orange-400" />
// // //             </div>
// // //             <h2 className="text-2xl font-bold text-white mb-2">
// // //               Unlock {feature}
// // //             </h2>
// // //             <p className="text-gray-400 text-sm leading-relaxed">
// // //               Upgrade to Premium to access advanced analytics and exclusive features
// // //             </p>
// // //           </div>
          
// // //           {/* Features */}
// // //           <div className="space-y-3 mb-8">
// // //             <div className="flex items-center text-gray-300 text-sm">
// // //               <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0" />
// // //               <span>Advanced analytics dashboard</span>
// // //             </div>
// // //             <div className="flex items-center text-gray-300 text-sm">
// // //               <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0" />
// // //               <span>Real-time performance metrics</span>
// // //             </div>
// // //             <div className="flex items-center text-gray-300 text-sm">
// // //               <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0" />
// // //               <span>Priority customer support</span>
// // //             </div>
// // //           </div>
          
// // //           {/* Action Buttons */}
// // //           <div className="space-y-3">
// // //             <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2 shadow-lg">
// // //               <Award className="w-5 h-5" />
// // //               <span>Upgrade to Premium</span>
// // //             </button>
            
// // //             <button
// // //               onClick={onClose}
// // //               className="w-full bg-gray-700/50 hover:bg-gray-700 text-gray-300 hover:text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 border border-gray-600/50 hover:border-gray-500"
// // //             >
// // //               Maybe Later
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // // Site Card Component
// // // const SiteCard = ({ site, onClick }) => (
// // //   <div 
// // //     className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all duration-200 cursor-pointer group"
// // //     onClick={() => onClick(site)}
// // //   >
// // //     <div className="flex items-center space-x-4">
// // //       <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center">
// // //         <Globe className="w-6 h-6 text-white" />
// // //       </div>
// // //       <div className="flex-1">
// // //         <h3 className="font-semibold text-slate-900 group-hover:text-red-600 transition-colors">
// // //           {site.name}
// // //         </h3>
// // //         <p className="text-slate-500 text-sm">{site.category}</p>
// // //       </div>
// // //       <div className="text-right">
// // //         <div className="flex items-center space-x-1 text-yellow-500">
// // //           <Star className="w-4 h-4 fill-current" />
// // //           <span className="text-sm font-medium">{site.rating}</span>
// // //         </div>
// // //         <p className="text-slate-400 text-xs">{site.views} views</p>
// // //       </div>
// // //     </div>
// // //   </div>
// // // );

// // // // Creator Card Component
// // // const CreatorCard = ({ creator, onClick }) => (
// // //   <div 
// // //     className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all duration-200 cursor-pointer group"
// // //     onClick={() => onClick(creator)}
// // //   >
// // //     <div className="flex items-center space-x-4">
// // //       <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
// // //         <Users className="w-6 h-6 text-white" />
// // //       </div>
// // //       <div className="flex-1">
// // //         <h3 className="font-semibold text-slate-900 group-hover:text-purple-600 transition-colors">
// // //           {creator.name}
// // //         </h3>
// // //         <p className="text-slate-500 text-sm">{creator.platform}</p>
// // //       </div>
// // //       <div className="text-right">
// // //         <p className="font-semibold text-slate-900">{creator.subscribers}</p>
// // //         <p className="text-slate-400 text-xs">subscribers</p>
// // //       </div>
// // //     </div>
// // //   </div>
// // // );

// // // // Sidebar Component
// // // const Sidebar = ({ activeItem, onItemClick }) => (
// // //   <div className="w-64 bg-slate-900 text-white h-full">
// // //     <div className="p-6">
// // //       <h2 className="text-xl font-bold text-red-500">Your Private Pass Dashboard</h2>
// // //     </div>
// // //     <nav className="mt-8">
// // //       {[
// // //         { id: 'dashboard', label: 'Dashboard', icon: Home },
// // //         { id: 'Top Sites', label: 'Top Sites', icon: Globe },
// // //         { id: 'Creators', label: 'Creators', icon: Users },
// // //         { id: 'Support', label: 'Support', icon: HelpCircle }
// // //       ].map((item) => {
// // //         const Icon = item.icon;
// // //         return (
// // //           <button
// // //             key={item.id}
// // //             onClick={() => onItemClick(item.id)}
// // //             className={`w-full text-left px-6 py-3 flex items-center space-x-3 hover:bg-slate-800 transition-colors duration-200 ${
// // //               activeItem === item.id ? 'bg-slate-800 border-r-2 border-red-500' : ''
// // //             }`}
// // //           >
// // //             <Icon className="w-5 h-5" />
// // //             <span>{item.label}</span>
// // //           </button>
// // //         );
// // //       })}
// // //     </nav>
// // //   </div>
// // // );

// // // // Main Dashboard Component
// // // function Dashboard() {
// // //   const [activeItem, setActiveItem] = useState('dashboard');
// // //   const [sidebarOpen, setSidebarOpen] = useState(false);
// // //   const [premiumModalOpen, setPremiumModalOpen] = useState(false);
// // //   const [selectedFeature, setSelectedFeature] = useState('');

// // //   const handleItemClick = (item) => {
// // //     setActiveItem(item);
// // //     setSidebarOpen(false);
// // //   };

// // //   const handlePremiumClick = (feature) => {
// // //     setSelectedFeature(feature);
// // //     setPremiumModalOpen(true);
// // //   };

// // //   // Sample data
// // //   const topSites = [
// // //     { id: 1, name: 'Pornhub Premium', category: 'Adult Entertainment', rating: 4.8, views: '2.1M' },
// // //     { id: 2, name: 'Brazzers', category: 'Premium Content', rating: 4.9, views: '1.8M' },
// // //     { id: 3, name: 'Reality Kings', category: 'HD Content', rating: 4.7, views: '1.5M' },
// // //     { id: 4, name: 'OnlyFans', category: 'Creator Platform', rating: 4.6, views: '3.2M' },
// // //     { id: 5, name: 'Fansly', category: 'Creator Platform', rating: 4.5, views: '890K' },
// // //     { id: 6, name: 'VRBangers', category: 'VR Content', rating: 4.8, views: '650K' }
// // //   ];

// // //   const creators = [
// // //     { id: 1, name: 'Riley Reid', platform: 'OnlyFans', subscribers: '2.1M' },
// // //     { id: 2, name: 'Mia Khalifa', platform: 'OnlyFans', subscribers: '1.8M' },
// // //     { id: 3, name: 'Lana Rhoades', platform: 'Fansly', subscribers: '1.5M' },
// // //     { id: 4, name: 'Abella Danger', platform: 'OnlyFans', subscribers: '1.2M' },
// // //     { id: 5, name: 'Adriana Chechik', platform: 'OnlyFans', subscribers: '980K' },
// // //     { id: 6, name: 'Kendra Lust', platform: 'Fansly', subscribers: '750K' }
// // //   ];

// // //   const renderContent = () => {
// // //     switch (activeItem) {
// // //       case 'dashboard':
// // //         return (
// // //           <div className='bg-black'>
// // //             {/* Page header */}
// // //             <HomePage />

          
// // //           </div>
// // //         );

// // //       case 'Top Sites':
// // //         return (
// // //           <div>
// // //             <div className="mb-8">
// // //               <h1 className="text-3xl font-bold text-slate-900">Top Sites</h1>
// // //               <p className="text-slate-600 mt-2">Discover the most popular premium content platforms.</p>
// // //             </div>

// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //               {topSites.map((site) => (
// // //                 <SiteCard 
// // //                   key={site.id} 
// // //                   site={site} 
// // //                   onClick={(site) => console.log('Site clicked:', site)}
// // //                 />
// // //               ))}
// // //             </div>
// // //           </div>
// // //         );

// // //       case 'Creators':
// // //         return (
// // //           <div>
// // //             <div className="mb-8">
// // //               <h1 className="text-3xl font-bold text-slate-900">Top Creators</h1>
// // //               <p className="text-slate-600 mt-2">Follow your favorite content creators across platforms.</p>
// // //             </div>

// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //               {creators.map((creator) => (
// // //                 <CreatorCard 
// // //                   key={creator.id} 
// // //                   creator={creator} 
// // //                   onClick={(creator) => console.log('Creator clicked:', creator)}
// // //                 />
// // //               ))}
// // //             </div>
// // //           </div>
// // //         );

// // //       case 'Support':
// // //         return (
// // //           <div>
// // //             <div className="mb-8">
// // //               <h1 className="text-3xl font-bold text-slate-900">Support Center</h1>
// // //               <p className="text-slate-600 mt-2">Get help with your PrivatePass account and subscriptions.</p>
// // //             </div>

// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //               {/* Contact Options */}
// // //               <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
// // //                 <h2 className="text-xl font-semibold text-slate-900 mb-4">Contact Us</h2>
// // //                 <div className="space-y-4">
// // //                   <div className="flex items-center space-x-3 p-3 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
// // //                     <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
// // //                       <Mail className="w-5 h-5 text-blue-600" />
// // //                     </div>
// // //                     <div>
// // //                       <p className="font-medium text-slate-900">Email Support</p>
// // //                       <p className="text-slate-500 text-sm">support@privatepass.com</p>
// // //                     </div>
// // //                   </div>
// // //                   <div className="flex items-center space-x-3 p-3 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
// // //                     <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
// // //                       <Phone className="w-5 h-5 text-green-600" />
// // //                     </div>
// // //                     <div>
// // //                       <p className="font-medium text-slate-900">Phone Support</p>
// // //                       <p className="text-slate-500 text-sm">+1 (555) 123-4567</p>
// // //                     </div>
// // //                   </div>
// // //                   <div className="flex items-center space-x-3 p-3 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
// // //                     <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
// // //                       <MessageCircle className="w-5 h-5 text-purple-600" />
// // //                     </div>
// // //                     <div>
// // //                       <p className="font-medium text-slate-900">Live Chat</p>
// // //                       <p className="text-slate-500 text-sm">Available 24/7</p>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* FAQ */}
// // //               <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
// // //                 <h2 className="text-xl font-semibold text-slate-900 mb-4">Frequently Asked Questions</h2>
// // //                 <div className="space-y-3">
// // //                   {[
// // //                     'How do I cancel my subscription?',
// // //                     'What payment methods are accepted?',
// // //                     'How to access premium content?',
// // //                     'Is my data secure and private?',
// // //                     'How to change my password?'
// // //                   ].map((question, index) => (
// // //                     <div key={index} className="p-3 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
// // //                       <p className="text-slate-900 font-medium">{question}</p>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         );

// // //       default:
// // //         return <div>Content for {activeItem}</div>;
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex min-h-screen bg-black mt-20">
// // //       {/* Sidebar */}
// // //       <div className={`fixed inset-y-0 left-0 z-50 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:relative md:translate-x-0`}>
// // //         <Sidebar activeItem={activeItem} onItemClick={handleItemClick} />
// // //       </div>

// // //       {/* Overlay for mobile */}
// // //       {sidebarOpen && (
// // //         <div 
// // //           className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
// // //           onClick={() => setSidebarOpen(false)}
// // //         />
// // //       )}

// // //       {/* Main content */}
// // //       <div className="flex-1 flex flex-col overflow-hidden">
// // //         <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-100 p-6">
// // //           <div className="max-w-7xl mx-auto">
// // //             {renderContent()}
// // //           </div>
// // //         </main>
// // //       </div>

// // //       {/* Premium Modal */}
// // //       <PremiumModal
// // //         isOpen={premiumModalOpen}
// // //         onClose={() => setPremiumModalOpen(false)}
// // //         feature={selectedFeature}
// // //       />
// // //     </div>
// // //   );
// // // }

// // // export default Dashboard;



// // import React, { useState } from 'react';
// // import { 
// //   Home, 
// //   Globe, 
// //   Users, 
// //   HelpCircle,
// //   Lock,
// //   X,
// //   Star,
// //   Play,
// //   Eye,
// //   Heart,
// //   Download,
// //   MessageCircle,
// //   Calendar,
// //   Mail,
// //   Phone,
// //   MapPin,
// //   Award,
// //   TrendingUp,
// //   DollarSign,
// //   UserPlus,
// //   Activity,
// //   CreditCard,
// //   User,
// //   Check,
// //   Shield
// // } from 'lucide-react';
// // import { useNavigate } from 'react-router-dom';

// // // SubscriptionCard Component
// // const SubscriptionCard = ({ service, onClick }) => {
// //   return (
// //     <div 
// //       className="relative overflow-hidden rounded-2xl bg-gray-900 shadow-2xl transition-all duration-300 ease-out hover:scale-105 hover:shadow-3xl group cursor-pointer"
// //       onClick={onClick}
// //     >
// //       {/* Background Image */}
// //       <div 
// //         className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
// //         style={{ backgroundImage: `url(${service.backgroundImage})` }}
// //       />
      
// //       {/* Gradient Overlay */}
// //       <div className={`absolute inset-0 bg-gradient-to-br ${service.gradientOverlay} backdrop-blur-[1px]`} />
      
// //       {/* Content */}
// //       <div className="relative z-10 flex flex-col items-center justify-between p-8 h-48 sm:h-56">
// //         {/* Service Name */}
// //         <h2 className="text-white text-xl sm:text-2xl font-bold text-center leading-tight tracking-wide">
// //           {service.name}
// //         </h2>
        
// //         {/* Lock Icon */}
// //         <div className="flex-1 flex items-center justify-center">
// //           <div className="bg-orange-500/20 backdrop-blur-sm rounded-full p-4 transition-all duration-300 group-hover:bg-orange-500/30 group-hover:scale-110">
// //             <Lock className="w-8 h-8 sm:w-10 sm:h-10 text-orange-400 transition-colors duration-300 group-hover:text-orange-300" />
// //           </div>
// //         </div>
        
// //         {/* Unlock Text */}
// //         <p className="text-gray-200 text-sm sm:text-base font-medium text-center tracking-wide transition-colors duration-300 group-hover:text-white">
// //           Unlock with PrivatePass
// //         </p>
// //       </div>
      
// //       {/* Subtle Border */}
// //       <div className="absolute inset-0 rounded-2xl border border-white/10 transition-colors duration-300 group-hover:border-white/20" />
// //     </div>
// //   );
// // };

// // // SubscriptionModal Component
// // const SubscriptionModal = ({ isOpen, onClose, serviceName, onUnlock }) => {
// //   if (!isOpen) return null;

// //   return (
// //     <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
// //       {/* Backdrop */}
// //       <div 
// //         className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
// //         onClick={onClose}
// //       />
      
// //       {/* Modal */}
// //       <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl border border-gray-700/50 w-full max-w-md transform transition-all duration-300 scale-100">
// //         {/* Close Button */}
// //         <button
// //           onClick={onClose}
// //           className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 z-10"
// //         >
// //           <X className="w-6 h-6" />
// //         </button>
        
// //         {/* Content */}
// //         <div className="p-8">
// //           {/* Header */}
// //           <div className="text-center mb-8">
// //             <div className="bg-orange-500/20 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
// //               <Lock className="w-10 h-10 text-orange-400" />
// //             </div>
// //             <h2 className="text-2xl font-bold text-white mb-2">
// //               Unlock {serviceName}
// //             </h2>
// //             <p className="text-gray-400 text-sm leading-relaxed">
// //               Get instant access to premium content with your PrivatePass membership
// //             </p>
// //           </div>
          
// //           {/* Features */}
// //           <div className="space-y-3 mb-8">
// //             <div className="flex items-center text-gray-300 text-sm">
// //               <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0" />
// //               <span>Unlimited access to premium content</span>
// //             </div>
// //             <div className="flex items-center text-gray-300 text-sm">
// //               <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0" />
// //               <span>HD quality streaming</span>
// //             </div>
// //             <div className="flex items-center text-gray-300 text-sm">
// //               <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0" />
// //               <span>Cancel anytime</span>
// //             </div>
// //           </div>
          
// //           {/* Action Buttons */}
// //           <div className="space-y-3">
// //             <button
// //               onClick={onUnlock}
// //               className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2 shadow-lg"
// //             >
// //               <CreditCard className="w-5 h-5" />
// //               <span>Unlock Now</span>
// //             </button>
            
// //             <button
// //               onClick={onClose}
// //               className="w-full bg-gray-700/50 hover:bg-gray-700 text-gray-300 hover:text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 border border-gray-600/50 hover:border-gray-500"
// //             >
// //               Maybe Later
// //             </button>
// //           </div>
          
// //           {/* Footer */}
// //           <div className="mt-6 pt-6 border-t border-gray-700/50">
// //             <p className="text-gray-500 text-xs text-center">
// //               Secure payment • Instant access • 30-day money-back guarantee
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // Enhanced MetricCard Component
// // const MetricCard = ({ 
// //   title, 
// //   value, 
// //   change, 
// //   changeType, 
// //   color,
// //   icon: Icon,
// //   isLocked = false,
// //   unlockText = "Unlock with Premium",
// //   onClick
// // }) => {
// //   if (isLocked) {
// //     return (
// //       <div 
// //         className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl shadow-lg border border-slate-700 p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden cursor-pointer group"
// //         onClick={onClick}
// //       >
// //         {/* Background blur effect */}
// //         <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        
// //         {/* Content */}
// //         <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[120px]">
// //           <div className="mb-4">
// //             <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-orange-500/30 transition-colors duration-200">
// //               <Lock className="w-6 h-6 text-orange-400" />
// //             </div>
// //           </div>
          
// //           <h3 className="text-white text-lg font-semibold mb-2 text-center">{title}</h3>
          
// //           <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm group-hover:scale-105 transform">
// //             {unlockText}
// //           </button>
// //         </div>
        
// //         {/* Decorative elements */}
// //         <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
// //         <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-full translate-y-8 -translate-x-8"></div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow duration-200">
// //       <div className="flex items-center justify-between">
// //         <div className="flex-1">
// //           <h3 className="text-slate-600 text-sm font-medium">{title}</h3>
// //           <p className="text-2xl font-bold text-slate-900 mt-1">{value}</p>
// //           <div className="flex items-center mt-2">
// //             <span className={`text-sm font-medium ${
// //               changeType === 'increase' ? 'text-green-600' : 'text-red-600'
// //             }`}>
// //               {changeType === 'increase' ? '+' : '-'}{change}
// //             </span>
// //             <span className="text-slate-500 text-sm ml-1">vs last month</span>
// //           </div>
// //         </div>
        
// //         <div className={`p-3 rounded-lg ${color}`}>
// //           {Icon && <Icon className="w-6 h-6 text-white" />}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // Premium Unlock Modal
// // const PremiumModal = ({ isOpen, onClose, feature }) => {
// //   if (!isOpen) return null;

// //   return (
// //     <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
// //       {/* Backdrop */}
// //       <div 
// //         className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
// //         onClick={onClose}
// //       />
      
// //       {/* Modal */}
// //       <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl border border-gray-700/50 w-full max-w-md transform transition-all duration-300 scale-100">
// //         {/* Close Button */}
// //         <button
// //           onClick={onClose}
// //           className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 z-10"
// //         >
// //           <X className="w-6 h-6" />
// //         </button>
        
// //         {/* Content */}
// //         <div className="p-8">
// //           {/* Header */}
// //           <div className="text-center mb-8">
// //             <div className="bg-orange-500/20 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
// //               <Award className="w-10 h-10 text-orange-400" />
// //             </div>
// //             <h2 className="text-2xl font-bold text-white mb-2">
// //               Unlock {feature}
// //             </h2>
// //             <p className="text-gray-400 text-sm leading-relaxed">
// //               Upgrade to Premium to access advanced analytics and exclusive features
// //             </p>
// //           </div>
          
// //           {/* Features */}
// //           <div className="space-y-3 mb-8">
// //             <div className="flex items-center text-gray-300 text-sm">
// //               <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0" />
// //               <span>Advanced analytics dashboard</span>
// //             </div>
// //             <div className="flex items-center text-gray-300 text-sm">
// //               <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0" />
// //               <span>Real-time performance metrics</span>
// //             </div>
// //             <div className="flex items-center text-gray-300 text-sm">
// //               <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0" />
// //               <span>Priority customer support</span>
// //             </div>
// //           </div>
          
// //           {/* Action Buttons */}
// //           <div className="space-y-3">
// //             <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2 shadow-lg">
// //               <Award className="w-5 h-5" />
// //               <span>Upgrade to Premium</span>
// //             </button>
            
// //             <button
// //               onClick={onClose}
// //               className="w-full bg-gray-700/50 hover:bg-gray-700 text-gray-300 hover:text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 border border-gray-600/50 hover:border-gray-500"
// //             >
// //               Maybe Later
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // Site Card Component
// // const SiteCard = ({ site, onClick }) => (
// //   <div 
// //     className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all duration-200 cursor-pointer group"
// //     onClick={() => onClick(site)}
// //   >
// //     <div className="flex items-center space-x-4">
// //       <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center">
// //         <Globe className="w-6 h-6 text-white" />
// //       </div>
// //       <div className="flex-1">
// //         <h3 className="font-semibold text-slate-900 group-hover:text-red-600 transition-colors">
// //           {site.name}
// //         </h3>
// //         <p className="text-slate-500 text-sm">{site.category}</p>
// //       </div>
// //       <div className="text-right">
// //         <div className="flex items-center space-x-1 text-yellow-500">
// //           <Star className="w-4 h-4 fill-current" />
// //           <span className="text-sm font-medium">{site.rating}</span>
// //         </div>
// //         <p className="text-slate-400 text-xs">{site.views} views</p>
// //       </div>
// //     </div>
// //   </div>
// // );

// // // Creator Card Component
// // const CreatorCard = ({ creator, onClick }) => (
// //   <div 
// //     className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all duration-200 cursor-pointer group"
// //     onClick={() => onClick(creator)}
// //   >
// //     <div className="flex items-center space-x-4">
// //       <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
// //         <Users className="w-6 h-6 text-white" />
// //       </div>
// //       <div className="flex-1">
// //         <h3 className="font-semibold text-slate-900 group-hover:text-purple-600 transition-colors">
// //           {creator.name}
// //         </h3>
// //         <p className="text-slate-500 text-sm">{creator.platform}</p>
// //       </div>
// //       <div className="text-right">
// //         <p className="font-semibold text-slate-900">{creator.subscribers}</p>
// //         <p className="text-slate-400 text-xs">subscribers</p>
// //       </div>
// //     </div>
// //   </div>
// // );

// // // Sidebar Component
// // const Sidebar = ({ activeItem, onItemClick }) => (
// //   <div className="w-64 bg-slate-900 text-white h-full">
// //     <div className="p-6">
// //       <h2 className="text-xl font-bold text-red-500">Your Private Pass Dashboard</h2>
// //     </div>
// //     <nav className="mt-8">
// //       {[
// //         { id: 'dashboard', label: 'Dashboard', icon: Home },
// //         { id: 'Top Sites', label: 'Top Sites', icon: Globe },
// //         { id: 'Creators', label: 'Creators', icon: Users },
// //         { id: 'Support', label: 'Support', icon: HelpCircle }
// //       ].map((item) => {
// //         const Icon = item.icon;
// //         return (
// //           <button
// //             key={item.id}
// //             onClick={() => onItemClick(item.id)}
// //             className={`w-full text-left px-6 py-3 flex items-center space-x-3 hover:bg-slate-800 transition-colors duration-200 ${
// //               activeItem === item.id ? 'bg-slate-800 border-r-2 border-red-500' : ''
// //             }`}
// //           >
// //             <Icon className="w-5 h-5" />
// //             <span>{item.label}</span>
// //           </button>
// //         );
// //       })}
// //     </nav>
// //   </div>
// // );

// // // Main Dashboard Component
// // function Dashboard() {
// //   const [activeItem, setActiveItem] = useState('dashboard');
// //   const [sidebarOpen, setSidebarOpen] = useState(false);
// //   const [premiumModalOpen, setPremiumModalOpen] = useState(false);
// //   const [selectedFeature, setSelectedFeature] = useState('');
// //   const [selectedService, setSelectedService] = useState(null);
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const navigate = useNavigate();

// //   const handleItemClick = (item) => {
// //     setActiveItem(item);
// //     setSidebarOpen(false);
// //   };

// //   const handlePremiumClick = (feature) => {
// //     setSelectedFeature(feature);
// //     setPremiumModalOpen(true);
// //   };

// //   // Subscription services data
// //   const subscriptionServices = [
// //     {
// //       id: 1,
// //       name: 'Pornhub Premium',
// //       backgroundImage: 'https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg?auto=compress&cs=tinysrgb&w=800',
// //       gradientOverlay: 'from-gray-900/90 via-gray-800/85 to-gray-900/90'
// //     },
// //     {
// //       id: 2,
// //       name: 'Brazzers',
// //       backgroundImage: 'https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=800',
// //       gradientOverlay: 'from-red-900/80 via-gray-900/85 to-red-900/80'
// //     },
// //     {
// //       id: 3,
// //       name: 'Reality Kings',
// //       backgroundImage: 'https://images.pexels.com/photos/2167395/pexels-photo-2167395.jpeg?auto=compress&cs=tinysrgb&w=800',
// //       gradientOverlay: 'from-blue-900/80 via-gray-900/85 to-blue-900/80'
// //     },
// //     {
// //       id: 4,
// //       name: 'OnlyFans',
// //       backgroundImage: 'https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=800',
// //       gradientOverlay: 'from-purple-900/80 via-gray-900/85 to-purple-900/80'
// //     },
// //     {
// //       id: 5,
// //       name: 'Fansly',
// //       backgroundImage: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800',
// //       gradientOverlay: 'from-green-900/80 via-gray-900/85 to-green-900/80'
// //     },
// //     {
// //       id: 6,
// //       name: 'VRBangers',
// //       backgroundImage: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800',
// //       gradientOverlay: 'from-indigo-900/80 via-gray-900/85 to-indigo-900/80'
// //     }
// //   ];

// //   const checkUserAuthentication = () => {
// //     try {
// //       const userData = localStorage.getItem('user');
// //       return userData ? JSON.parse(userData) : null;
// //     } catch (error) {
// //       console.error('Error parsing user data from localStorage:', error);
// //       return null;
// //     }
// //   };

// //   const handleCardClick = (service) => {
// //     setSelectedService(service);
// //     setIsModalOpen(true);
// //   };

// //   const handleUnlock = () => {
// //     const user = checkUserAuthentication();
    
// //     if (!user) {
// //       // User not logged in, redirect to register page
// //       navigate('/register');
// //     } else {
// //       // User is logged in, proceed to payment page
// //       navigate('/payment', { 
// //         state: { 
// //           serviceName: selectedService?.name,
// //           serviceId: selectedService?.id 
// //         } 
// //       });
// //     }
    
// //     setIsModalOpen(false);
// //   };

// //   const closeModal = () => {
// //     setIsModalOpen(false);
// //     setSelectedService(null);
// //   };

// //   // Sample data
// //   const topSites = [
// //     { id: 1, name: 'Pornhub Premium', category: 'Adult Entertainment', rating: 4.8, views: '2.1M' },
// //     { id: 2, name: 'Brazzers', category: 'Premium Content', rating: 4.9, views: '1.8M' },
// //     { id: 3, name: 'Reality Kings', category: 'HD Content', rating: 4.7, views: '1.5M' },
// //     { id: 4, name: 'OnlyFans', category: 'Creator Platform', rating: 4.6, views: '3.2M' },
// //     { id: 5, name: 'Fansly', category: 'Creator Platform', rating: 4.5, views: '890K' },
// //     { id: 6, name: 'VRBangers', category: 'VR Content', rating: 4.8, views: '650K' }
// //   ];

// //   const creators = [
// //     { id: 1, name: 'Riley Reid', platform: 'OnlyFans', subscribers: '2.1M' },
// //     { id: 2, name: 'Mia Khalifa', platform: 'OnlyFans', subscribers: '1.8M' },
// //     { id: 3, name: 'Lana Rhoades', platform: 'Fansly', subscribers: '1.5M' },
// //     { id: 4, name: 'Abella Danger', platform: 'OnlyFans', subscribers: '1.2M' },
// //     { id: 5, name: 'Adriana Chechik', platform: 'OnlyFans', subscribers: '980K' },
// //     { id: 6, name: 'Kendra Lust', platform: 'Fansly', subscribers: '750K' }
// //   ];

// //   const renderContent = () => {
// //     switch (activeItem) {
// //       case 'dashboard':
// //         return (
// //           <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
// //             <div className="max-w-7xl mx-auto mt-16">
// //               {/* Header */}
// //               <div className="text-center mb-12 sm:mb-16">
// //                 <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
// //                   Premium Subscriptions
// //                 </h1>
// //                 <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
// //                   Unlock exclusive content with your PrivatePass membership
// //                 </p>
// //               </div>
              
// //               {/* Grid Layout */}
// //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-4xl mx-auto">
// //                 {subscriptionServices.map((service) => (
// //                   <SubscriptionCard 
// //                     key={service.id} 
// //                     service={service} 
// //                     onClick={() => handleCardClick(service)}
// //                   />
// //                 ))}
// //               </div>
              
// //               {/* Footer */}
// //               <div className="text-center mt-16 sm:mt-20">
// //                 <p className="text-gray-500 text-sm sm:text-base">
// //                   Secure payments • Instant access • Cancel anytime
// //                 </p>
// //               </div>
// //             </div>

// //             {/* Modal */}
// //             <SubscriptionModal
// //               isOpen={isModalOpen}
// //               onClose={closeModal}
// //               serviceName={selectedService?.name || ''}
// //               onUnlock={handleUnlock}
// //             />
// //           </div>
// //         );

// //       case 'Top Sites':
// //         return (
// //           <div>
// //             <div className="mb-8">
// //               <h1 className="text-3xl font-bold text-slate-900">Top Sites</h1>
// //               <p className="text-slate-600 mt-2">Discover the most popular premium content platforms.</p>
// //             </div>

// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //               {topSites.map((site) => (
// //                 <SiteCard 
// //                   key={site.id} 
// //                   site={site} 
// //                   onClick={(site) => console.log('Site clicked:', site)}
// //                 />
// //               ))}
// //             </div>
// //           </div>
// //         );

// //       case 'Creators':
// //         return (
// //           <div>
// //             <div className="mb-8">
// //               <h1 className="text-3xl font-bold text-slate-900">Top Creators</h1>
// //               <p className="text-slate-600 mt-2">Follow your favorite content creators across platforms.</p>
// //             </div>

// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //               {creators.map((creator) => (
// //                 <CreatorCard 
// //                   key={creator.id} 
// //                   creator={creator} 
// //                   onClick={(creator) => console.log('Creator clicked:', creator)}
// //                 />
// //               ))}
// //             </div>
// //           </div>
// //         );

// //       case 'Support':
// //         return (
// //           <div>
// //             <div className="mb-8">
// //               <h1 className="text-3xl font-bold text-slate-900">Support Center</h1>
// //               <p className="text-slate-600 mt-2">Get help with your PrivatePass account and subscriptions.</p>
// //             </div>

// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //               {/* Contact Options */}
// //               <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
// //                 <h2 className="text-xl font-semibold text-slate-900 mb-4">Contact Us</h2>
// //                 <div className="space-y-4">
// //                   <div className="flex items-center space-x-3 p-3 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
// //                     <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
// //                       <Mail className="w-5 h-5 text-blue-600" />
// //                     </div>
// //                     <div>
// //                       <p className="font-medium text-slate-900">Email Support</p>
// //                       <p className="text-slate-500 text-sm">support@privatepass.com</p>
// //                     </div>
// //                   </div>
// //                   <div className="flex items-center space-x-3 p-3 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
// //                     <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
// //                       <Phone className="w-5 h-5 text-green-600" />
// //                     </div>
// //                     <div>
// //                       <p className="font-medium text-slate-900">Phone Support</p>
// //                       <p className="text-slate-500 text-sm">+1 (555) 123-4567</p>
// //                     </div>
// //                   </div>
// //                   <div className="flex items-center space-x-3 p-3 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
// //                     <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
// //                       <MessageCircle className="w-5 h-5 text-purple-600" />
// //                     </div>
// //                     <div>
// //                       <p className="font-medium text-slate-900">Live Chat</p>
// //                       <p className="text-slate-500 text-sm">Available 24/7</p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* FAQ */}
// //               <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
// //                 <h2 className="text-xl font-semibold text-slate-900 mb-4">Frequently Asked Questions</h2>
// //                 <div className="space-y-3">
// //                   {[
// //                     'How do I cancel my subscription?',
// //                     'What payment methods are accepted?',
// //                     'How to access premium content?',
// //                     'Is my data secure and private?',
// //                     'How to change my password?'
// //                   ].map((question, index) => (
// //                     <div key={index} className="p-3 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
// //                       <p className="text-slate-900 font-medium">{question}</p>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         );

// //       default:
// //         return <div>Content for {activeItem}</div>;
// //     }
// //   };

// //   return (
// //     <div className="flex min-h-screen bg-black relative z-0">
// //       {/* Sidebar */}
// //       <div className={`fixed inset-y-0 left-0 z-30 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:relative md:translate-x-0`}>
// //         <Sidebar activeItem={activeItem} onItemClick={handleItemClick} />
// //       </div>

// //       {/* Overlay for mobile */}
// //       {sidebarOpen && (
// //         <div 
// //           className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
// //           onClick={() => setSidebarOpen(false)}
// //         />
// //       )}

// //       {/* Main content */}
// //       <div className="flex-1 flex flex-col overflow-hidden relative z-10">
// //         <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-100">
// //           <div className="w-full">
// //             {renderContent()}
// //           </div>
// //         </main>
// //       </div>

// //       {/* Premium Modal */}
// //       <PremiumModal
// //         isOpen={premiumModalOpen}
// //         onClose={() => setPremiumModalOpen(false)}
// //         feature={selectedFeature}
// //       />
// //     </div>
// //   );
// // }

// // export default Dashboard;


// import React, { useState } from 'react';
// import { 
//   Home, 
//   Globe, 
//   Users, 
//   HelpCircle,
//   Lock,
//   X,
//   Star,
//   Play,
//   Eye,
//   Heart,
//   Download,
//   MessageCircle,
//   Calendar,
//   Mail,
//   Phone,
//   MapPin,
//   Award,
//   TrendingUp,
//   DollarSign,
//   UserPlus,
//   Activity,
//   CreditCard,
//   User,
//   Check,
//   Shield,
//   Menu
// } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// // SubscriptionCard Component
// const SubscriptionCard = ({ service, onClick }) => {
//   return (
//     <div 
//       className="relative overflow-hidden rounded-2xl bg-gray-900 shadow-2xl transition-all duration-300 ease-out hover:scale-105 hover:shadow-3xl group cursor-pointer"
//       onClick={onClick}
//     >
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
// };

// // SubscriptionModal Component
// const SubscriptionModal = ({ isOpen, onClose, serviceName, onUnlock }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//       {/* Backdrop */}
//       <div 
//         className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
//         onClick={onClose}
//       />
      
//       {/* Modal */}
//       <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl border border-gray-700/50 w-full max-w-md transform transition-all duration-300 scale-100">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 z-10"
//         >
//           <X className="w-6 h-6" />
//         </button>
        
//         {/* Content */}
//         <div className="p-8">
//           {/* Header */}
//           <div className="text-center mb-8">
//             <div className="bg-orange-500/20 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
//               <Lock className="w-10 h-10 text-orange-400" />
//             </div>
//             <h2 className="text-2xl font-bold text-white mb-2">
//               Unlock {serviceName}
//             </h2>
//             <p className="text-gray-400 text-sm leading-relaxed">
//               Get instant access to premium content with your PrivatePass membership
//             </p>
//           </div>
          
//           {/* Features */}
//           <div className="space-y-3 mb-8">
//             <div className="flex items-center text-gray-300 text-sm">
//               <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0" />
//               <span>Unlimited access to premium content</span>
//             </div>
//             <div className="flex items-center text-gray-300 text-sm">
//               <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0" />
//               <span>HD quality streaming</span>
//             </div>
//             <div className="flex items-center text-gray-300 text-sm">
//               <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0" />
//               <span>Cancel anytime</span>
//             </div>
//           </div>
          
//           {/* Action Buttons */}
//           <div className="space-y-3">
//             <button
//               onClick={onUnlock}
//               className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2 shadow-lg"
//             >
//               <CreditCard className="w-5 h-5" />
//               <span>Unlock Now</span>
//             </button>
            
//             <button
//               onClick={onClose}
//               className="w-full bg-gray-700/50 hover:bg-gray-700 text-gray-300 hover:text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 border border-gray-600/50 hover:border-gray-500"
//             >
//               Maybe Later
//             </button>
//           </div>
          
//           {/* Footer */}
//           <div className="mt-6 pt-6 border-t border-gray-700/50">
//             <p className="text-gray-500 text-xs text-center">
//               Secure payment • Instant access • 30-day money-back guarantee
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Enhanced MetricCard Component
// const MetricCard = ({ 
//   title, 
//   value, 
//   change, 
//   changeType, 
//   color,
//   icon: Icon,
//   isLocked = false,
//   unlockText = "Unlock with Premium",
//   onClick
// }) => {
//   if (isLocked) {
//     return (
//       <div 
//         className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl shadow-lg border border-slate-700 p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden cursor-pointer group"
//         onClick={onClick}
//       >
//         {/* Background blur effect */}
//         <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        
//         {/* Content */}
//         <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[120px]">
//           <div className="mb-4">
//             <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-orange-500/30 transition-colors duration-200">
//               <Lock className="w-6 h-6 text-orange-400" />
//             </div>
//           </div>
          
//           <h3 className="text-white text-lg font-semibold mb-2 text-center">{title}</h3>
          
//           <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm group-hover:scale-105 transform">
//             {unlockText}
//           </button>
//         </div>
        
//         {/* Decorative elements */}
//         <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
//         <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-full translate-y-8 -translate-x-8"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow duration-200">
//       <div className="flex items-center justify-between">
//         <div className="flex-1">
//           <h3 className="text-slate-600 text-sm font-medium">{title}</h3>
//           <p className="text-2xl font-bold text-slate-900 mt-1">{value}</p>
//           <div className="flex items-center mt-2">
//             <span className={`text-sm font-medium ${
//               changeType === 'increase' ? 'text-green-600' : 'text-red-600'
//             }`}>
//               {changeType === 'increase' ? '+' : '-'}{change}
//             </span>
//             <span className="text-slate-500 text-sm ml-1">vs last month</span>
//           </div>
//         </div>
        
//         <div className={`p-3 rounded-lg ${color}`}>
//           {Icon && <Icon className="w-6 h-6 text-white" />}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Premium Unlock Modal
// const PremiumModal = ({ isOpen, onClose, feature }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//       {/* Backdrop */}
//       <div 
//         className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
//         onClick={onClose}
//       />
      
//       {/* Modal */}
//       <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl border border-gray-700/50 w-full max-w-md transform transition-all duration-300 scale-100">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 z-10"
//         >
//           <X className="w-6 h-6" />
//         </button>
        
//         {/* Content */}
//         <div className="p-8">
//           {/* Header */}
//           <div className="text-center mb-8">
//             <div className="bg-orange-500/20 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
//               <Award className="w-10 h-10 text-orange-400" />
//             </div>
//             <h2 className="text-2xl font-bold text-white mb-2">
//               Unlock {feature}
//             </h2>
//             <p className="text-gray-400 text-sm leading-relaxed">
//               Upgrade to Premium to access advanced analytics and exclusive features
//             </p>
//           </div>
          
//           {/* Features */}
//           <div className="space-y-3 mb-8">
//             <div className="flex items-center text-gray-300 text-sm">
//               <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0" />
//               <span>Advanced analytics dashboard</span>
//             </div>
//             <div className="flex items-center text-gray-300 text-sm">
//               <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0" />
//               <span>Real-time performance metrics</span>
//             </div>
//             <div className="flex items-center text-gray-300 text-sm">
//               <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0" />
//               <span>Priority customer support</span>
//             </div>
//           </div>
          
//           {/* Action Buttons */}
//           <div className="space-y-3">
//             <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2 shadow-lg">
//               <Award className="w-5 h-5" />
//               <span>Upgrade to Premium</span>
//             </button>
            
//             <button
//               onClick={onClose}
//               className="w-full bg-gray-700/50 hover:bg-gray-700 text-gray-300 hover:text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 border border-gray-600/50 hover:border-gray-500"
//             >
//               Maybe Later
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Site Card Component
// const SiteCard = ({ site, onClick }) => (
//   <div 
//     className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all duration-200 cursor-pointer group"
//     onClick={() => onClick(site)}
//   >
//     <div className="flex items-center space-x-4">
//       <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center">
//         <Globe className="w-6 h-6 text-white" />
//       </div>
//       <div className="flex-1">
//         <h3 className="font-semibold text-slate-900 group-hover:text-red-600 transition-colors">
//           {site.name}
//         </h3>
//         <p className="text-slate-500 text-sm">{site.category}</p>
//       </div>
//       <div className="text-right">
//         <div className="flex items-center space-x-1 text-yellow-500">
//           <Star className="w-4 h-4 fill-current" />
//           <span className="text-sm font-medium">{site.rating}</span>
//         </div>
//         <p className="text-slate-400 text-xs">{site.views} views</p>
//       </div>
//     </div>
//   </div>
// );

// // Creator Card Component
// const CreatorCard = ({ creator, onClick }) => (
//   <div 
//     className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all duration-200 cursor-pointer group"
//     onClick={() => onClick(creator)}
//   >
//     <div className="flex items-center space-x-4">
//       <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
//         <Users className="w-6 h-6 text-white" />
//       </div>
//       <div className="flex-1">
//         <h3 className="font-semibold text-slate-900 group-hover:text-purple-600 transition-colors">
//           {creator.name}
//         </h3>
//         <p className="text-slate-500 text-sm">{creator.platform}</p>
//       </div>
//       <div className="text-right">
//         <p className="font-semibold text-slate-900">{creator.subscribers}</p>
//         <p className="text-slate-400 text-xs">subscribers</p>
//       </div>
//     </div>
//   </div>
// );

// // Sidebar Component
// const Sidebar = ({ activeItem, onItemClick }) => (
//   <div className="w-64 bg-slate-900 text-white h-full">
//     <div className="p-6">
//       <h2 className="text-xl font-bold text-red-500">Your Private Pass Dashboard</h2>
//     </div>
//     <nav className="mt-8">
//       {[
//         { id: 'dashboard', label: 'Dashboard', icon: Home },
//         { id: 'Top Sites', label: 'Top Sites', icon: Globe },
//         { id: 'Creators', label: 'Creators', icon: Users },
//         { id: 'Support', label: 'Support', icon: HelpCircle }
//       ].map((item) => {
//         const Icon = item.icon;
//         return (
//           <button
//             key={item.id}
//             onClick={() => onItemClick(item.id)}
//             className={`w-full text-left px-6 py-3 flex items-center space-x-3 hover:bg-slate-800 transition-colors duration-200 ${
//               activeItem === item.id ? 'bg-slate-800 border-r-2 border-red-500' : ''
//             }`}
//           >
//             <Icon className="w-5 h-5" />
//             <span>{item.label}</span>
//           </button>
//         );
//       })}
//     </nav>
//   </div>
// );

// // Main Dashboard Component
// function Dashboard() {
//   const [activeItem, setActiveItem] = useState('dashboard');
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [premiumModalOpen, setPremiumModalOpen] = useState(false);
//   const [selectedFeature, setSelectedFeature] = useState('');
//   const [selectedService, setSelectedService] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleItemClick = (item) => {
//     setActiveItem(item);
//     setSidebarOpen(false);
//   };

//   const handlePremiumClick = (feature) => {
//     setSelectedFeature(feature);
//     setPremiumModalOpen(true);
//   };

//   // Subscription services data
//   const subscriptionServices = [
//     {
//       id: 1,
//       name: 'Pornhub Premium',
//       backgroundImage: 'https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg?auto=compress&cs=tinysrgb&w=800',
//       gradientOverlay: 'from-gray-900/90 via-gray-800/85 to-gray-900/90'
//     },
//     {
//       id: 2,
//       name: 'Brazzers',
//       backgroundImage: 'https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=800',
//       gradientOverlay: 'from-red-900/80 via-gray-900/85 to-red-900/80'
//     },
//     {
//       id: 3,
//       name: 'Reality Kings',
//       backgroundImage: 'https://images.pexels.com/photos/2167395/pexels-photo-2167395.jpeg?auto=compress&cs=tinysrgb&w=800',
//       gradientOverlay: 'from-blue-900/80 via-gray-900/85 to-blue-900/80'
//     },
//     {
//       id: 4,
//       name: 'OnlyFans',
//       backgroundImage: 'https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=800',
//       gradientOverlay: 'from-purple-900/80 via-gray-900/85 to-purple-900/80'
//     },
//     {
//       id: 5,
//       name: 'Fansly',
//       backgroundImage: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800',
//       gradientOverlay: 'from-green-900/80 via-gray-900/85 to-green-900/80'
//     },
//     {
//       id: 6,
//       name: 'VRBangers',
//       backgroundImage: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800',
//       gradientOverlay: 'from-indigo-900/80 via-gray-900/85 to-indigo-900/80'
//     }
//   ];

//   const checkUserAuthentication = () => {
//     try {
//       const userData = localStorage.getItem('user');
//       return userData ? JSON.parse(userData) : null;
//     } catch (error) {
//       console.error('Error parsing user data from localStorage:', error);
//       return null;
//     }
//   };

//   const handleCardClick = (service) => {
//     setSelectedService(service);
//     setIsModalOpen(true);
//   };

//   const handleUnlock = () => {
//     const user = checkUserAuthentication();
    
//     if (!user) {
//       // User not logged in, redirect to register page
//       navigate('/register');
//     } else {
//       // User is logged in, proceed to payment page
//       navigate('/payment', { 
//         state: { 
//           serviceName: selectedService?.name,
//           serviceId: selectedService?.id 
//         } 
//       });
//     }
    
//     setIsModalOpen(false);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedService(null);
//   };

//   // Sample data
//   const topSites = [
//     { id: 1, name: 'Pornhub Premium', category: 'Adult Entertainment', rating: 4.8, views: '2.1M' },
//     { id: 2, name: 'Brazzers', category: 'Premium Content', rating: 4.9, views: '1.8M' },
//     { id: 3, name: 'Reality Kings', category: 'HD Content', rating: 4.7, views: '1.5M' },
//     { id: 4, name: 'OnlyFans', category: 'Creator Platform', rating: 4.6, views: '3.2M' },
//     { id: 5, name: 'Fansly', category: 'Creator Platform', rating: 4.5, views: '890K' },
//     { id: 6, name: 'VRBangers', category: 'VR Content', rating: 4.8, views: '650K' }
//   ];

//   const creators = [
//     { id: 1, name: 'Riley Reid', platform: 'OnlyFans', subscribers: '2.1M' },
//     { id: 2, name: 'Mia Khalifa', platform: 'OnlyFans', subscribers: '1.8M' },
//     { id: 3, name: 'Lana Rhoades', platform: 'Fansly', subscribers: '1.5M' },
//     { id: 4, name: 'Abella Danger', platform: 'OnlyFans', subscribers: '1.2M' },
//     { id: 5, name: 'Adriana Chechik', platform: 'OnlyFans', subscribers: '980K' },
//     { id: 6, name: 'Kendra Lust', platform: 'Fansly', subscribers: '750K' }
//   ];

//   const renderContent = () => {
//     switch (activeItem) {
//       case 'dashboard':
//         return (
//           <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
//             <div className="max-w-7xl mx-auto">
//               {/* Header */}
//               <div className="text-center mb-12 sm:mb-16">
//                 <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
//                   Premium Subscriptions
//                 </h1>
//                 <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
//                   Unlock exclusive content with your PrivatePass membership
//                 </p>
//               </div>
              
//               {/* Grid Layout */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-4xl mx-auto">
//                 {subscriptionServices.map((service) => (
//                   <SubscriptionCard 
//                     key={service.id} 
//                     service={service} 
//                     onClick={() => handleCardClick(service)}
//                   />
//                 ))}
//               </div>
              
//               {/* Footer */}
//               <div className="text-center mt-16 sm:mt-20">
//                 <p className="text-gray-500 text-sm sm:text-base">
//                   Secure payments • Instant access • Cancel anytime
//                 </p>
//               </div>
//             </div>

//             {/* Modal */}
//             <SubscriptionModal
//               isOpen={isModalOpen}
//               onClose={closeModal}
//               serviceName={selectedService?.name || ''}
//               onUnlock={handleUnlock}
//             />
//           </div>
//         );

//       case 'Top Sites':
//         return (
//           <div>
//             <div className="mb-8">
//               <h1 className="text-3xl font-bold text-slate-900">Top Sites</h1>
//               <p className="text-slate-600 mt-2">Discover the most popular premium content platforms.</p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {topSites.map((site) => (
//                 <SiteCard 
//                   key={site.id} 
//                   site={site} 
//                   onClick={(site) => console.log('Site clicked:', site)}
//                 />
//               ))}
//             </div>
//           </div>
//         );

//       case 'Creators':
//         return (
//           <div>
//             <div className="mb-8">
//               <h1 className="text-3xl font-bold text-slate-900">Top Creators</h1>
//               <p className="text-slate-600 mt-2">Follow your favorite content creators across platforms.</p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {creators.map((creator) => (
//                 <CreatorCard 
//                   key={creator.id} 
//                   creator={creator} 
//                   onClick={(creator) => console.log('Creator clicked:', creator)}
//                 />
//               ))}
//             </div>
//           </div>
//         );

//       case 'Support':
//         return (
//           <div>
//             <div className="mb-8">
//               <h1 className="text-3xl font-bold text-slate-900">Support Center</h1>
//               <p className="text-slate-600 mt-2">Get help with your PrivatePass account and subscriptions.</p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Contact Options */}
//               <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
//                 <h2 className="text-xl font-semibold text-slate-900 mb-4">Contact Us</h2>
//                 <div className="space-y-4">
//                   <div className="flex items-center space-x-3 p-3 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
//                     <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//                       <Mail className="w-5 h-5 text-blue-600" />
//                     </div>
//                     <div>
//                       <p className="font-medium text-slate-900">Email Support</p>
//                       <p className="text-slate-500 text-sm">support@privatepass.com</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-3 p-3 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
//                     <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
//                       <Phone className="w-5 h-5 text-green-600" />
//                     </div>
//                     <div>
//                       <p className="font-medium text-slate-900">Phone Support</p>
//                       <p className="text-slate-500 text-sm">+1 (555) 123-4567</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-3 p-3 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
//                     <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
//                       <MessageCircle className="w-5 h-5 text-purple-600" />
//                     </div>
//                     <div>
//                       <p className="font-medium text-slate-900">Live Chat</p>
//                       <p className="text-slate-500 text-sm">Available 24/7</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* FAQ */}
//               <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
//                 <h2 className="text-xl font-semibold text-slate-900 mb-4">Frequently Asked Questions</h2>
//                 <div className="space-y-3">
//                   {[
//                     'How do I cancel my subscription?',
//                     'What payment methods are accepted?',
//                     'How to access premium content?',
//                     'Is my data secure and private?',
//                     'How to change my password?'
//                   ].map((question, index) => (
//                     <div key={index} className="p-3 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
//                       <p className="text-slate-900 font-medium">{question}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       default:
//         return <div>Content for {activeItem}</div>;
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-black relative z-0">
//       {/* Sidebar */}
//       <div className={`fixed inset-y-0 left-0 z-60 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:relative md:translate-x-0`}>
//         <Sidebar activeItem={activeItem} onItemClick={handleItemClick} />
//       </div>

//       {/* Overlay for mobile */}
//       {sidebarOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       {/* Main content */}
//       <div className="flex-1 flex flex-col overflow-hidden relative z-10">
//         {/* Mobile Header with Menu Button */}
//         <div className="md:hidden bg-slate-900 text-white p-4 flex items-center justify-between">
//           <h2 className="text-lg font-bold text-red-500">PrivatePass Dashboard</h2>
//           <button
//             onClick={() => setSidebarOpen(true)}
//             className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors duration-200"
//           >
//             <Menu className="w-6 h-6" />
//           </button>
//         </div>

//         <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-100">
//           <div className="w-full">
//             {renderContent()}
//           </div>
//         </main>
//       </div>

//       {/* Premium Modal */}
//       <PremiumModal
//         isOpen={premiumModalOpen}
//         onClose={() => setPremiumModalOpen(false)}
//         feature={selectedFeature}
//       />
//     </div>
//   );
// }

// export default Dashboard;



import React, { useState } from 'react';
import { 
  Home, 
  Globe, 
  Users, 
  HelpCircle,
  Lock,
  X,
  Star,
  Play,
  Eye,
  Heart,
  Download,
  MessageCircle,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Award,
  TrendingUp,
  DollarSign,
  UserPlus,
  Activity,
  CreditCard,
  User,
  Check,
  Shield,
  Menu
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// SubscriptionCard Component
const SubscriptionCard = ({ service, onClick }) => {
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
};

// SubscriptionModal Component
const SubscriptionModal = ({ isOpen, onClose, serviceName, onUnlock }) => {
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
};

// Enhanced MetricCard Component
const MetricCard = ({ 
  title, 
  value, 
  change, 
  changeType, 
  color,
  icon: Icon,
  isLocked = false,
  unlockText = "Unlock with Premium",
  onClick
}) => {
  if (isLocked) {
    return (
      <div 
        className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl shadow-lg border border-slate-700 p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden cursor-pointer group"
        onClick={onClick}
      >
        {/* Background blur effect */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[120px]">
          <div className="mb-4">
            <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-orange-500/30 transition-colors duration-200">
              <Lock className="w-6 h-6 text-orange-400" />
            </div>
          </div>
          
          <h3 className="text-white text-lg font-semibold mb-2 text-center">{title}</h3>
          
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm group-hover:scale-105 transform">
            {unlockText}
          </button>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-full translate-y-8 -translate-x-8"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className="text-slate-600 text-sm font-medium">{title}</h3>
          <p className="text-2xl font-bold text-slate-900 mt-1">{value}</p>
          <div className="flex items-center mt-2">
            <span className={`text-sm font-medium ${
              changeType === 'increase' ? 'text-green-600' : 'text-red-600'
            }`}>
              {changeType === 'increase' ? '+' : '-'}{change}
            </span>
            <span className="text-slate-500 text-sm ml-1">vs last month</span>
          </div>
        </div>
        
        <div className={`p-3 rounded-lg ${color}`}>
          {Icon && <Icon className="w-6 h-6 text-white" />}
        </div>
      </div>
    </div>
  );
};

// Premium Unlock Modal
const PremiumModal = ({ isOpen, onClose, feature }) => {
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
              <Award className="w-10 h-10 text-orange-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Unlock {feature}
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Upgrade to Premium to access advanced analytics and exclusive features
            </p>
          </div>
          
          {/* Features */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center text-gray-300 text-sm">
              <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0" />
              <span>Advanced analytics dashboard</span>
            </div>
            <div className="flex items-center text-gray-300 text-sm">
              <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0" />
              <span>Real-time performance metrics</span>
            </div>
            <div className="flex items-center text-gray-300 text-sm">
              <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0" />
              <span>Priority customer support</span>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="space-y-3">
            <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2 shadow-lg">
              <Award className="w-5 h-5" />
              <span>Upgrade to Premium</span>
            </button>
            
            <button
              onClick={onClose}
              className="w-full bg-gray-700/50 hover:bg-gray-700 text-gray-300 hover:text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 border border-gray-600/50 hover:border-gray-500"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Site Card Component
const SiteCard = ({ site, onClick }) => (
  <div 
    className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all duration-200 cursor-pointer group"
    onClick={() => onClick(site)}
  >
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center">
        <Globe className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-slate-900 group-hover:text-red-600 transition-colors">
          {site.name}
        </h3>
        <p className="text-slate-500 text-sm">{site.category}</p>
      </div>
      <div className="text-right">
        <div className="flex items-center space-x-1 text-yellow-500">
          <Star className="w-4 h-4 fill-current" />
          <span className="text-sm font-medium">{site.rating}</span>
        </div>
        <p className="text-slate-400 text-xs">{site.views} views</p>
      </div>
    </div>
  </div>
);

// Creator Card Component
const CreatorCard = ({ creator, onClick }) => (
  <div 
    className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all duration-200 cursor-pointer group"
    onClick={() => onClick(creator)}
  >
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
        <Users className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-slate-900 group-hover:text-purple-600 transition-colors">
          {creator.name}
        </h3>
        <p className="text-slate-500 text-sm">{creator.platform}</p>
      </div>
      <div className="text-right">
        <p className="font-semibold text-slate-900">{creator.subscribers}</p>
        <p className="text-slate-400 text-xs">subscribers</p>
      </div>
    </div>
  </div>
);

// Sidebar Component
const Sidebar = ({ activeItem, onItemClick }) => (
  <div className="w-64 bg-slate-900 text-white h-full">
    <div className="p-6">
      <h2 className="text-xl font-bold text-red-500">Your Private Pass Dashboard</h2>
    </div>
    <nav className="mt-8">
      {[
        { id: 'dashboard', label: 'Dashboard', icon: Home },
        { id: 'Top Sites', label: 'Top Sites', icon: Globe },
        { id: 'Creators', label: 'Creators', icon: Users },
        { id: 'Support', label: 'Support', icon: HelpCircle }
      ].map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            onClick={() => onItemClick(item.id)}
            className={`w-full text-left px-6 py-3 flex items-center space-x-3 hover:bg-slate-800 transition-colors duration-200 ${
              activeItem === item.id ? 'bg-slate-800 border-r-2 border-red-500' : ''
            }`}
          >
            <Icon className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  </div>
);

// Main Dashboard Component
function Dashboard() {
  const [activeItem, setActiveItem] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [premiumModalOpen, setPremiumModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState('');
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    setActiveItem(item);
    setSidebarOpen(false);
  };

  const handlePremiumClick = (feature) => {
    setSelectedFeature(feature);
    setPremiumModalOpen(true);
  };

  // Subscription services data
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

  // Sample data
  const topSites = [
    { id: 1, name: 'Pornhub Premium', category: 'Adult Entertainment', rating: 4.8, views: '2.1M' },
    { id: 2, name: 'Brazzers', category: 'Premium Content', rating: 4.9, views: '1.8M' },
    { id: 3, name: 'Reality Kings', category: 'HD Content', rating: 4.7, views: '1.5M' },
    { id: 4, name: 'OnlyFans', category: 'Creator Platform', rating: 4.6, views: '3.2M' },
    { id: 5, name: 'Fansly', category: 'Creator Platform', rating: 4.5, views: '890K' },
    { id: 6, name: 'VRBangers', category: 'VR Content', rating: 4.8, views: '650K' }
  ];

  const creators = [
    { id: 1, name: 'Riley Reid', platform: 'OnlyFans', subscribers: '2.1M' },
    { id: 2, name: 'Mia Khalifa', platform: 'OnlyFans', subscribers: '1.8M' },
    { id: 3, name: 'Lana Rhoades', platform: 'Fansly', subscribers: '1.5M' },
    { id: 4, name: 'Abella Danger', platform: 'OnlyFans', subscribers: '1.2M' },
    { id: 5, name: 'Adriana Chechik', platform: 'OnlyFans', subscribers: '980K' },
    { id: 6, name: 'Kendra Lust', platform: 'Fansly', subscribers: '750K' }
  ];

  const renderContent = () => {
    switch (activeItem) {
      case 'dashboard':
        return (
          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto mt-16">
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

      case 'Top Sites':
        return (
          <div>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-900">Top Sites</h1>
              <p className="text-slate-600 mt-2">Discover the most popular premium content platforms.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {topSites.map((site) => (
                <SiteCard 
                  key={site.id} 
                  site={site} 
                  onClick={(site) => console.log('Site clicked:', site)}
                />
              ))}
            </div>
          </div>
        );

      case 'Creators':
        return (
          <div>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-900">Top Creators</h1>
              <p className="text-slate-600 mt-2">Follow your favorite content creators across platforms.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {creators.map((creator) => (
                <CreatorCard 
                  key={creator.id} 
                  creator={creator} 
                  onClick={(creator) => console.log('Creator clicked:', creator)}
                />
              ))}
            </div>
          </div>
        );

      case 'Support':
        return (
          <div>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-900">Support Center</h1>
              <p className="text-slate-600 mt-2">Get help with your PrivatePass account and subscriptions.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Contact Options */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Contact Us</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Email Support</p>
                      <p className="text-slate-500 text-sm">support@privatepass.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Phone Support</p>
                      <p className="text-slate-500 text-sm">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Live Chat</p>
                      <p className="text-slate-500 text-sm">Available 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {[
                    'How do I cancel my subscription?',
                    'What payment methods are accepted?',
                    'How to access premium content?',
                    'Is my data secure and private?',
                    'How to change my password?'
                  ].map((question, index) => (
                    <div key={index} className="p-3 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
                      <p className="text-slate-900 font-medium">{question}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Content for {activeItem}</div>;
    }
  };

  return (
    <div className="flex min-h-screen bg-black relative">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-[60] transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:relative md:translate-x-0 md:z-auto`}>
        <Sidebar activeItem={activeItem} onItemClick={handleItemClick} />
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-[55] md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header with Menu Button */}
        <div className="md:hidden bg-slate-900 text-white p-4 flex items-center justify-between mt-16 relative z-10">
          <h2 className="text-lg font-bold text-red-500">PrivatePass Dashboard</h2>
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors duration-200 z-[70]"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-100 md:mt-0">
          <div className="w-full">
            {renderContent()}
          </div>
        </main>
      </div>

      {/* Premium Modal */}
      <PremiumModal
        isOpen={premiumModalOpen}
        onClose={() => setPremiumModalOpen(false)}
        feature={selectedFeature}
      />
    </div>
  );
}

export default Dashboard;