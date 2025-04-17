import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const QualityPieCharts = () => {
  const [airData, setAirData] = useState([]);
  const [waterData, setWaterData] = useState([]);

  useEffect(() => {
    const fetchAirData = async () => {
      const res = await fetch('http://localhost:3000/api/air-quality');
      const records = await res.json();

      const levels = {
        Good: 0,
        Moderate: 0,
        Excellent: 0,
        Dengerous: 0,
        
      };

      records.forEach(record => {
        const aqi = record.aqi;
        if (400 <= aqi < 500) levels.Good++;
        else if (500 <= aqi < 800) levels.Moderate++;
        else if (800 <= aqi < 850) levels.Excellent++;
        else if (aqi >= 850) levels.Dengerous++;
        
      });
      if(levels.Dengerous > 0){
        alert("Air Quality is very dengerous. Immediate action is required!");
      }

      setAirData(Object.entries(levels).map(([name, value]) => ({ name, value })));
    };

    const fetchWaterData = async () => {
      const res = await fetch('http://localhost:3000/api/water-quality');
      const records = await res.json();

      const categories = {
        Excellent: 0,
        Good: 0,
        Fair: 0,
        Poor: 0,
        VeryPoor: 0
      };

      records.forEach(record => {
        const wqi = record.wqi;
        if ( wqi >= 90) categories.Excellent++;
        else if (wqi >= 70) categories.Good++;
        else if (wqi >= 50) categories.Fair++;
        else if (wqi >= 25) categories.Poor++;
        else categories.VeryPoor++;
      });

      setWaterData(Object.entries(categories).map(([name, value]) => ({ name, value })));
    };

    fetchAirData();
    fetchWaterData();
  }, []);

  const AIR_COLORS = ['#34D399', '#FBBF24', '#FCD34D', '#F87171', '#A78BFA', '#6366F1'];
  const WATER_COLORS = ['#2DD4BF', '#3B82F6', '#F59E0B', '#F87171', '#DC2626'];

  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center p-4">
     
      <div className="bg-neutral-600 p-4 rounded-2xl shadow-md">
        <h3 className="text-white text-xl font-semibold mb-2 text-center">Air Quality Distribution</h3>
        <PieChart width={300} height={300}>
          <Pie
            dataKey="value"
            data={airData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {airData.map((_, index) => (
              <Cell key={`air-cell-${index}`} fill={AIR_COLORS[index % AIR_COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

   
      <div className="bg-neutral-600 p-4 rounded-2xl shadow-md">
        <h3 className="text-white text-xl font-semibold mb-2 text-center">Water Quality Distribution</h3>
        <PieChart width={300} height={300}>
          <Pie
            dataKey="value"
            data={waterData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {waterData.map((_, index) => (
              <Cell key={`water-cell-${index}`} fill={WATER_COLORS[index % WATER_COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default QualityPieCharts;
