import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import 'nouislider/distribute/nouislider.css';
import Map from "./map";
import pollution1 from './a.jpeg';
import water1 from './b.jpeg';
import air1 from './c.jpeg';
import pollution2 from './d.jpeg';

const images = [pollution1, water1, air1, pollution2];
const Hero = () => {
  

  const sliderSettings = {
    dots: true,        
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: false,
    fade: true,
    cssEase: 'linear',
  };


      

  return (
    <div className="bg-neutral-900 text-white">
     
      <main id = "home" className="flex flex-col lg:flex-row items-center justify-between p-12">
        <div className="text-center lg:text-left lg:w-1/2">
          <h2 className="text-5xl font-bold mb-4">Air & Water Quality Intelligence </h2>
          <p className="mb-6">Stay effortlessly informed about the air you breathe and the water you use.</p>
          <div className="flex justify-center lg:justify-start space-x-4">
          <div className="space-x-4">
              <a href="#hero" className="bg-[#FFB302] text-neutral-900 px-8 py-4 rounded-full font-bold inline-block hover:bg-[#FFB302]/90 transition-colors">Get Started</a>
            </div>
          </div>
        </div>
        <div className="environment-slider lg:w-1/3 mt-8 lg:mt-0">
      <Slider {...sliderSettings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Environment image ${index + 1}`}
              className="rounded-lg w-full h-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
        
      </main>

     
      <section id="hero" className="bg-neutral-900 text-white py-20">
     
      <div className="pt-20 border-t border-neutral-800"/>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate__animated animate__fadeInUp">
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-[#FFB302]">Inform</span> & Protect Your Community
            </h1>
            <p className="text-xl mb-8">
              Track air and water quality, receive real-time alerts, and contribute to conservation efforts. Join our community of Pollution Trackers and make a difference.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              <div className="bg-neutral-800 p-6 rounded-lg">
                <div className="text-[#FFB302] text-4xl mb-2">500+</div>
                <div className="text-gray-300">Cities Tracked</div>
              </div>
              <div className="bg-neutral-800 p-6 rounded-lg">
                <div className="text-[#FFB302] text-4xl mb-2">10K+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
            </div>
          </div>

          <div className="lg:pl-12 animate__animated animate__fadeInRight">
            <div className="bg-neutral-800 rounded-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB302]/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Quick Pollution Search</h3>
                <form className="space-y-6">
                    <div>
                      <label className="block mb-2 text-sm">Your Location</label>
                      <div className="flex gap-4">
                        <button type="button" className="bg-neutral-700 p-3 rounded-lg">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </button>

                        <button 
                          type="button"
                          className="bg-[#FFB302] text-neutral-900 px-40 py-3 rounded-lg font-bold hover:bg-[#FFB302]/90 transition-colors"
                        >
                          Track Pollution
                        </button>
                      </div>
                    </div>
                  </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="installation-map" className="bg-neutral-900 py-20 text-white relative z-10">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1">
      <div className="animate__animated animate__fadeInRight">
        <h2 className="text-3xl font-bold mb-6">Devices Installation Map</h2>
        <p className="text-neutral-300 mb-6">
          Explore real-time installations across your region.
        </p>

        {/* Reduced width from left/right via px-4 */}
        <div className="mx-auto w-full max-w-5xl">
          <div className="bg-neutral-700 rounded-xl overflow-hidden h-[600px]">
            <Map />
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

<>
  <section id="features" className="py-20 bg-neutral-900 text-white">
  <div className="pt-20 border-t border-neutral-800"/>

    <div className="container mx-auto px-6">
      <div className="text-center mb-16 animate__animated animate__fadeIn">
        <h2 className="text-4xl font-bold mb-4 text-white">Key Features</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Discover how our platform helps to protect from pollution and enhance your
          outdoor experience
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="bg-neutral-800 rounded-xl p-6 hover:shadow-lg transition-shadow animate__animated animate__fadeInUp">
          <div className="bg-yellow-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">
            Real-Time Mapping
          </h3>
          <p className="text-gray-400 mb-4">
            Interactive heatmaps showing pollution activity patterns and movement
            in your area.
          </p>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Installations tracking
            </li>
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Seasonal activity patterns
            </li>
          </ul>
        </div>
        {/* Feature 2 */}
        <div
          className="bg-neutral-800 rounded-xl p-6 hover:shadow-lg transition-shadow animate__animated animate__fadeInUp"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="bg-yellow-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">Smart Alerts</h3>
          <p className="text-gray-400 mb-4">
            Receive instant notifications about alerts and protected
            zones.
          </p>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Air pollution alerts
            </li>
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Water pollution alerts
            </li>
          </ul>
        </div>
        {/* Feature 3 */}
        <div
          className="bg-neutral-800 rounded-xl p-6 hover:shadow-lg transition-shadow animate__animated animate__fadeInUp"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="bg-yellow-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">
            Community Reporting
          </h3>
          <p className="text-gray-400 mb-4">
            Contribute to environment conservation by using our application and collecting data for the precautions.
          </p>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Disease information
            </li>
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              GPS location tracking
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-16 text-center">
        <a
          href="#hero"
          className="inline-block bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-yellow-400 transition-colors"
        >
          Start Exploring Now
        </a>
      </div>
    </div>
  </section>
</>

<section id="protection-guide" className="py-20 bg-neutral-900 text-white ">
  <div className="container mx-auto px-6">

  <div className="pt-20 border-t border-neutral-800"/>

    <div className="text-center mb-16 animate__animated animate__fadeIn">

      <h2 className="text-4xl font-bold mb-4 text-white">
        Protection Guide
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Learn how to protect and preserve yourself and environment in your area with our
        comprehensive guidelines
      </p>
    </div>
    <div className="grid lg:grid-cols-2 gap-12">
      <div className="animate__animated animate__fadeInLeft">
        <div className="bg-neutral-800 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Essential Protection Guidelines
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 rounded-full p-2 mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-white">
                  Wear a Mask
                  </h4>
                  <p className="text-gray-400">
                  If you must go outside during high pollution levels,
                   wear a high-efficiency particulate air (HEPA) mask or N95 mask to filter harmful particles from the air.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 rounded-full p-2 mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-white">
                  Stay Indoors During Poor Air Quality
                  </h4>
                  <p className="text-gray-400">
                  When air quality is unhealthy, limit outdoor activities to avoid inhaling pollutants.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 rounded-full p-2 mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-white">
                  Use Water Filtration Systems
                  </h4>
                  <p className="text-gray-400">
                  Install water filters or purifiers at home to ensure safe drinking water, 
                  especially in areas with known water contamination issues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="animate__animated animate__fadeInRight">
        <div className="bg-neutral-800 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Seasonal Protection Tips
            </h3>
            <div className="space-y-6">
              <div className="group cursor-pointer">
                <div className="flex items-center justify-between p-4 bg-neutral-900 rounded-lg hover:bg-yellow-500/100 transition-colors">
                  <h4 className="font-semibold text-white">
                    Spring Season
                  </h4>
                  <svg
                    className="w-5 h-5 transform group-hover:rotate-180 transition-transform text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <div className="hidden group-hover:block p-4">
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Keep windows closed and use air purifiers to reduce pollen and pollution.</li>
                    <li>Ensure water safety by filtering or boiling due to possible contamination.</li>
                    <li>Limit outdoor exposure during high allergen and pollution levels.</li>
                  </ul>
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="flex items-center justify-between p-4 bg-neutral-900 rounded-lg hover:bg-yellow-500/100 transition-colors">
                  <h4 className="font-semibold text-white">
                    Summer Season
                  </h4>
                  <svg
                    className="w-5 h-5 transform group-hover:rotate-180 transition-transform text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <div className="hidden group-hover:block p-4">
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Limit outdoor activities during peak heat and pollution; wear a mask if necessary.</li>
                  <li>Avoid swimming in contaminated water bodies and rely on purified drinking water.</li>
                  <li>Stay hydrated with safe, filtered water to avoid waterborne diseases.</li>

                  </ul>
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="flex items-center justify-between p-4 bg-neutral-900 rounded-lg hover:bg-yellow-500/100 transition-colors">
                  <h4 className="font-semibold text-white">
                    Winter Season
                  </h4>
                  <svg
                    className="w-5 h-5 transform group-hover:rotate-180 transition-transform text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <div className="hidden group-hover:block p-4">
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Keep indoor air clean using air purifiers and seal windows to prevent pollution infiltration.</li>
                  <li>Insulate water pipes to avoid contamination and freezing.</li>
                  <li>Drink filtered water to avoid any waterborne health risks.</li>

                  </ul>
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="flex items-center justify-between p-4 bg-neutral-900 rounded-lg hover:bg-yellow-500/100 transition-colors">
                  <h4 className="font-semibold text-white">
                    Fall Season
                  </h4>
                  <svg
                    className="w-5 h-5 transform group-hover:rotate-180 transition-transform text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <div className="hidden group-hover:block p-4">
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Monitor air quality and limit outdoor activities during high particulate matter levels.</li>
                  <li>Clean rainwater collection systems and filter water after rainfall.</li>
                  <li>Boil or filter water to ensure safety after heavy rain or storms.</li>


                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</section>
    </div>
  );
};

export default Hero;
