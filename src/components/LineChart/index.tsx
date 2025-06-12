import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface DataPoint {
  name: string;
  value: number;
  [key: string]: any;
}

interface LineChartProps {
  data: DataPoint[];
  xDataKey: string;
  lines: {
    dataKey: string;
    stroke: string;
    name: string;
  }[];
  title?: string;
  className?: string;
  height?: number | string;
}

export function LineChart({ data, xDataKey, lines, title, className = "", height = 400 }: LineChartProps) {
  return (
    <div className={`w-full ${className}`}>
      {title && (
        <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>
      )}
      <ResponsiveContainer width="100%" height={height}>
        <RechartsLineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xDataKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          {lines.map((line, index) => (
            <Line
              key={index}
              type="monotone"
              dataKey={line.dataKey}
              stroke={line.stroke}
              name={line.name}
              activeDot={{ r: 8 }}
            />
          ))}
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
}
