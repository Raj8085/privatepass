
const MetricCard = ({ 
  title, 
  value, 
  change, 
  changeType, 
  color 
}) => {
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
        </div>
      </div>
    </div>
  );
};

export default MetricCard;