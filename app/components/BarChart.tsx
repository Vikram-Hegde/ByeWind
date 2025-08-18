import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';

const ProjectionsVsActualsChart = () => {
  const data = [
    { month: 'Jan', projections: 20000000, actuals: 18000000 },
    { month: 'Feb', projections: 25000000, actuals: 22000000 },
    { month: 'Mar', projections: 21000000, actuals: 19000000 },
    { month: 'Apr', projections: 28000000, actuals: 26000000 },
    { month: 'May', projections: 18000000, actuals: 16000000 },
    { month: 'Jun', projections: 24000000, actuals: 22000000 }
  ];

  const formatYAxis = (value) => {
    if (value >= 1000000) {
      return `${value / 1000000}M`;
    }
    return value;
  };

  return (
    <div style={{ 
      backgroundColor: '#f8f9fa', 
      padding: '20px', 
      borderRadius: '8px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Header with Custom Legend */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ 
            margin: '0', 
            fontSize: '18px', 
            fontWeight: '600',
            color: '#1a1a1a'
          }}>
            Projections vs Actuals
          </h3>
          
          {/* Custom Legend */}
          <div style={{ display: 'flex', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{
                width: '12px',
                height: '12px',
                backgroundColor: '#93c5fd',
                borderRadius: '2px'
              }}></div>
              <span style={{ fontSize: '12px', color: '#6b7280' }}>
                Projections
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{
                width: '12px',
                height: '12px',
                backgroundColor: '#60a5fa',
                borderRadius: '2px'
              }}></div>
              <span style={{ fontSize: '12px', color: '#6b7280' }}>
                Actuals
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div style={{ height: '300px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#e5e7eb" 
              horizontal={true}
              vertical={false}
            />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#9ca3af' }}
              dy={10}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#9ca3af' }}
              tickFormatter={formatYAxis}
              domain={[0, 50000000]}
              ticks={[0, 10000000, 20000000, 30000000, 40000000, 50000000]}
            />
            {/* Stacked Bars - order matters for stacking */}
            <Bar 
              dataKey="actuals" 
              stackId="a"
              fill="#60a5fa" 
              radius={[0, 0, 0, 0]}
              maxBarSize={60}
            />
            <Bar 
              dataKey="projections" 
              stackId="a"
              fill="#93c5fd" 
              radius={[2, 2, 0, 0]}
              maxBarSize={60}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProjectionsVsActualsChart;