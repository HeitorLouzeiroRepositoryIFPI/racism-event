import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface DataPoint {
  name: string;
  value: number;
  [key: string]: any;
}

interface BarChartProps {
  data: DataPoint[];
  xDataKey: string;
  bars: {
    dataKey: string;
    fill: string;
    name: string;
  }[];
  title?: string;
  className?: string;
  height?: number | string;
}

// Custom Tooltip Component
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
        <p className="font-semibold text-gray-800 mb-2">{`${label}`}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}%`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function BarChart({ data, xDataKey, bars, title, className = "", height = 400 }: BarChartProps) {
  return (
    <div className={`w-full ${className}`}>
      {title && (
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full"></div>
        </div>
      )}
      <ResponsiveContainer width="100%" height={height}>
        <RechartsBarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey={xDataKey} 
            stroke="#6b7280"
            fontSize={12}
            fontWeight={500}
            angle={data.length > 4 ? -45 : 0}
            textAnchor={data.length > 4 ? "end" : "middle"}
            height={data.length > 4 ? 80 : 60}
          />
          <YAxis 
            stroke="#6b7280"
            fontSize={12}
            fontWeight={500}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            wrapperStyle={{
              fontSize: '14px',
              fontWeight: '500'
            }}
          />
          {bars.map((bar, index) => (
            <Bar
              key={index}
              dataKey={bar.dataKey}
              fill={bar.fill}
              name={bar.name}
              radius={[4, 4, 0, 0]}
              animationDuration={1000}
            />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
}
