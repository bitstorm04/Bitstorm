import { useState } from "react";

const PollutionSearch = () => {
  
  const [nearestLocation, setNearestLocation] = useState(null); 
  const [pollutionData, setPollutionData] = useState(null); 


  const haversine = (lat1, lon1, lat2, lon2) => {
    const R = 6371; 
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; 
    return distance;
  };


  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        findNearestLocation(latitude, longitude);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };


  const findNearestLocation = (lat, lon) => {

    fetch("/api/locations")
      .then((response) => response.json())
      .then((data) => {
        let nearest = null;
        let minDistance = Infinity;

  
        data.forEach((location) => {
          const distance = haversine(lat, lon, location.latitude, location.longitude);
          if (distance < minDistance) {
            minDistance = distance;
            nearest = location;
          }
        });

        setNearestLocation(nearest);

   
        fetch(`/api/pollution/${nearest.id}`)
          .then((res) => res.json())
          .then((pollution) => {
            setPollutionData(pollution); 
          });
      })
      .catch((error) => console.error("Error fetching locations:", error));
  };

  return (
    <div className="lg:pl-12 animate__animated animate__fadeInRight">
      <div className="bg-neutral-800 rounded-xl p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB302]/10 rounded-full -mr-16 -mt-16"></div>
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-6">Quick Pollution Search</h3>
          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-sm">Your Location</label>
              <div className="flex gap-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
              </div>
            </div>

            <button
              type="button"
              onClick={getCurrentLocation} 
              className="w-full bg-[#FFB302] text-neutral-900 py-4 rounded-full font-bold hover:bg-[#FFB302]/90 transition-colors cursor-pointer"
            >
              Track Pollution
            </button>
          </form>
        </div>
      </div>

      {nearestLocation && (
        <div className="mt-6 text-neutral-900">
          <h4 className="text-xl font-bold">Nearest Location: {nearestLocation.city}</h4>
          <p>
            Coordinates: {nearestLocation.latitude}, {nearestLocation.longitude}
          </p>
          {pollutionData && (
            <div>
              <h5 className="text-lg font-semibold">Pollution Data</h5>
              <p>Air Quality: {pollutionData.aqi}</p>
              <p>Water Quality: {pollutionData.wqi}</p>
              
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PollutionSearch;
