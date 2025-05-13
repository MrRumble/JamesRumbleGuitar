import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import jamesBg from '../assets/rumble_bgd.jpg'; // blue-toned image
import teaching1 from '../assets/teaching1.jpg'; // added new image

export default function Home() {
  return (
    <div className="relative min-h-screen bg-customBlue text-white overflow-hidden">

      {/* Blue-toned Background Image on Left Half with Fade */}
      <div className="absolute inset-0 z-0">
        <div
          className="relative w-1/2 h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${jamesBg})`,
            maskImage: 'linear-gradient(to right, black 70%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, black 70%, transparent)'
          }}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen p-6">
        
        {/* Right Section */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <div
            className="relative overflow-hidden w-72 h-72 md:w-96 md:h-96 border-4 border-white transform rotate-3"
          >
            <img
              src={teaching1}
              alt="Teaching Shot"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Left Section (Text) */}
        <div className="text-center md:text-left md:w-1/2">
  <h1 className="text-2xl text-white mb-4">
    Become a guitarist!
  </h1>

  <h2 className="text-6xl font-bold font-heading mb-4">
    JAMES RUMBLE GUITAR LESSONS!
  </h2>

  <p className="text-lg md:text-xl mb-4 font-body">
    Welcome to the wonderful world of guitar! Whether you're a beginner or experienced, book a lesson now and start your musical journey with personalised tuition for any level.
  </p>

  <p className="text-lg md:text-xl mb-4 font-body">
  Based in Caterham, Surrey – available for home visits and flexible travel.
  </p>

  <p className="text-lg md:text-xl mb-4 font-body">
  Available 7 days a week!
  </p>

  <Link 
    to="/contact" 
    className="inline-block mt-6 px-4 py-2 bg-white text-customBlue font-semibold font-body rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
  >
    Contact Me
  </Link>
</div>



      </div>
    </div>
  );
}