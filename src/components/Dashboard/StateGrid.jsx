const StatsGrid = () => {
  const stats = [
    { label: 'Conversion Rate', value: '3.24%', change: '+0.4%' },
    { label: 'Avg. Session', value: '4m 32s', change: '+1.2%' },
    { label: 'Bounce Rate', value: '42.3%', change: '-2.1%' },
    { label: 'Page Views', value: '87.2K', change: '+8.3%' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h3 className="text-lg font-semibold text-slate-900 mb-4">Key Metrics</h3>
      
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center p-4 bg-slate-50 rounded-lg">
            <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
            <p className="text-sm text-slate-600 mt-1">{stat.label}</p>
            <p className="text-xs text-green-600 mt-1">{stat.change}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsGrid;