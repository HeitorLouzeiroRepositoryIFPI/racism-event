interface StatCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: string;
  color: 'orange' | 'blue' | 'purple' | 'red';
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

const colorClasses = {
  orange: {
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    icon: 'bg-orange-500',
    text: 'text-orange-600',
    accent: 'text-orange-700'
  },
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-200', 
    icon: 'bg-blue-500',
    text: 'text-blue-600',
    accent: 'text-blue-700'
  },
  purple: {
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    icon: 'bg-purple-500', 
    text: 'text-purple-600',
    accent: 'text-purple-700'
  },
  red: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    icon: 'bg-red-500',
    text: 'text-red-600', 
    accent: 'text-red-700'
  }
};

export function StatCard({ title, value, subtitle, icon, color, trend }: StatCardProps) {
  const styles = colorClasses[color];
  
  return (
    <div className={`${styles.bg} ${styles.border} border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
      <div className="flex items-center justify-between mb-4">
        <div className={`${styles.icon} w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl font-bold`}>
          {icon}
        </div>
        {trend && (
          <div className={`flex items-center text-sm font-medium ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
            <span className="mr-1">{trend.isPositive ? '↗' : '↘'}</span>
            {trend.value}%
          </div>
        )}
      </div>
      
      <div className="space-y-1">
        <h3 className={`${styles.text} text-sm font-semibold uppercase tracking-wide`}>
          {title}
        </h3>
        <div className={`${styles.accent} text-3xl font-bold`}>
          {value}
        </div>
        <p className="text-gray-600 text-sm">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
