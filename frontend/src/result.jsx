import { useEffect, useState } from 'react';
import QualityPieCharts from './QualityPieCharts';
import { useLocation } from "react-router-dom"; 
import axios from "axios";

const Result = () => {
  const [diseases, setDiseases] = useState([]);
  const { state } = useLocation();
  const { latitude, longitude } = state || {};
  const [loading, setLoading] = useState(false);

  const handleTrackPollution = async () => {
    if (!latitude || !longitude) return;
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:3000/api/analyze-health-impact?lat=${latitude}&lng=${longitude}`);
      const responseText = res.data?.data || "";
      const jsonMatch = responseText.match(/```json\n([\s\S]*?)\n```/);
      const parsed = JSON.parse(jsonMatch ? jsonMatch[1] : responseText);
      setDiseases(parsed.diseases || []);
    } catch (err) {
      console.error("Error fetching health data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleTrackPollution();
  }, [latitude, longitude]);

  return (
    <div className="bg-neutral-900 text-white min-h-screen">
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>Environmental Dashboard</title>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        rel="stylesheet"
      />
      
      <div className="container mx-auto p-4">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold">Environmental Dashboard</h1>
          <p className="text-lg text-gray-300">
            Monitor air and water quality indices in real-time, understand health
            impacts, and learn about preventive measures.
          </p>
        </header>
        <QualityPieCharts />
      </div>

      <div className="container mx-auto p-4">
        {diseases.map((disease, idx) => (
          <div key={idx} className="bg-gray-800 p-6 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-2">{disease.name}</h3>
            <p className="text-gray-400 mb-4">{disease.description}</p>
            <div className="flex justify-between flex-wrap gap-6">
              <div>
                <h4 className="text-white font-semibold">Artificial Precautions</h4>
                <ul className="list-none">
                  {disease.artificial_precautions.map((item, i) => (
                    <li className="flex items-center text-gray-300" key={i}>
                      <i className="fas fa-tools mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold">Natural Precautions</h4>
                <ul className="list-none">
                  {disease.natural_precautions.map((item, i) => (
                    <li className="flex items-center text-gray-300" key={i}>
                      <i className="fas fa-leaf mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;
