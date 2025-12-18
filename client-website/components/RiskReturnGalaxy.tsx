import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { MOCK_FUNDS } from '../mockData';

const RiskReturnGalaxy: React.FC = () => {
  const textColor = '#FFFFFF';
  const mutedTextColor = '#666666';
  const gridColor = '#ffffff08';

  const data = MOCK_FUNDS.map(f => ({
    name: f.name,
    risk: f.stdDev,
    return: f.returns3y,
    alpha: f.alpha,
    category: f.category
  }));

  return (
    <div className="neumorphic-flat p-8 rounded-[40px] border border-white/10 h-[450px]">
      <div className="mb-8">
        <h3 className="text-xl font-bold text-white">Risk-Return Galaxy</h3>
        <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Visualizing Alpha potential</p>
      </div>

      <div className="w-full h-[300px] min-h-[300px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: -20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
            <XAxis type="number" dataKey="risk" stroke={mutedTextColor} fontSize={10} axisLine={false} tickLine={false} />
            <YAxis type="number" dataKey="return" stroke={mutedTextColor} fontSize={10} axisLine={false} tickLine={false} />
            <ZAxis type="number" dataKey="alpha" range={[100, 400]} />
            <Tooltip content={({ active, payload }) => {
              if (active && payload?.length) {
                const d = payload[0].payload;
                return (
                  <div className="glass p-4 rounded-xl border border-white/20 bg-black/80">
                    <div className="text-sm font-bold text-white">{d.name}</div>
                    <div className="text-xs text-gray-400">Alpha: +{d.alpha}%</div>
                  </div>
                );
              }
              return null;
            }} />
            <Scatter name="Funds" data={data} fill={textColor}>
              {data.map((_, index) => <Cell key={index} fill={textColor} />)}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RiskReturnGalaxy;