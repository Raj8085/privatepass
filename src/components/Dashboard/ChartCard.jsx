const ChartCard = ({ title, subtitle }) => {
  // Simple CSS-based chart visualization
  const data = [65, 40, 80, 45, 90, 55, 75, 35, 85, 60, 70, 50];
  const maxValue = Math.max(...data);
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="text-slate-600 text-sm">{subtitle}</p>
        </div>
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
        </div>
      </div>
      
      <div className="flex items-end space-x-2 h-32">
        {data.map((value, index) => (
          <div
            key={index}
            className="flex-1 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity duration-200"
            style={{ height: `${(value / maxValue) * 100}%` }}
          />
        ))}
      </div>
      
      <div className="flex justify-between text-xs text-slate-500 mt-2">
        <span>Jan</span>
        <span>Dec</span>
      </div>
    </div>
  );
};

export default ChartCard;