import { User, MessageSquare, FileText, TrendingUp } from 'lucide-react';

const ActivityCard = () => {
  const activities = [
    {
      id: 1,
      user: 'Sarah Johnson',
      action: 'completed project review',
      time: '2 hours ago',
      icon: FileText,
      color: 'bg-blue-500'
    },
    {
      id: 2,
      user: 'Mike Chen',
      action: 'sent a message',
      time: '4 hours ago',
      icon: MessageSquare,
      color: 'bg-green-500'
    },
    {
      id: 3,
      user: 'Alex Rivera',
      action: 'updated performance metrics',
      time: '6 hours ago',
      icon: TrendingUp,
      color: 'bg-purple-500'
    },
    {
      id: 4,
      user: 'Emma Davis',
      action: 'joined the team',
      time: '1 day ago',
      icon: User,
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Activity</h3>
      
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          
          return (
            <div key={activity.id} className="flex items-center space-x-4">
              <div className={`p-2 rounded-lg ${activity.color}`}>
                <Icon className="w-4 h-4 text-white" />
              </div>
              
              <div className="flex-1">
                <p className="text-sm text-slate-900">
                  <span className="font-medium">{activity.user}</span> {activity.action}
                </p>
                <p className="text-xs text-slate-500">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
      
      <button className="w-full mt-4 py-2 text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors">
        View all activities
      </button>
    </div>
  );
};

export default ActivityCard;