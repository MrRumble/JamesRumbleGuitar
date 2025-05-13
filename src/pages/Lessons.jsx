import React from 'react';
import { Link } from 'react-router-dom';
import jamesBg from '../assets/rumble_bgd.jpg'; // blue-toned image
import image from '../assets/teaching2.jpg'; // replace with your image

export default function Lessons() {
  return (
    <div className="relative min-h-screen bg-customBlue text-white overflow-hidden">

      {/* Blue-toned Background Image on Left Half with Fade */}
      <div className="absolute inset-0 z-0">
        <div
          className="relative w-1/2 h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${jamesBg})`,
            maskImage: 'linear-gradient(to right, black 70%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, black 70%, transparent)',
          }}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center min-h-screen p-6">

        {/* Right Section (Image) */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <div className="relative overflow-hidden w-72 h-72 md:w-96 md:h-96 border-4 border-white transform rotate-3">
            <img
              src={image}
              alt="Teaching Shot"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Left Section (Text) */}
        <div className="text-center md:text-left md:w-1/2">
        

          <section>
            <h2 className="text-3xl font-semibold mb-2">Lesson Prices</h2>
            <ul className="list-disc list-inside text-lg">
              <li>£40 for a 1-hour lesson</li>
              <li>£20 for a 30-minute lesson</li>
              <li><span className="font-bold">Block Booking Deal:</span> Book 5 hour-long lessons and get the 6th free – just £200 for 6 hours</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-3xl font-semibold mb-2">What's Included</h2>
            <ul className="list-disc list-inside text-lg space-y-1">
              <li>Expert, experienced tuition tailored to your goals</li>
              <li>Beginner to intermediate level guidance</li>
              <li>Lessons available for ages 6 and up</li>
              <li>Fully enhanced DBS check for peace of mind</li>
              <li>Electric and acoustic guitars provided for lessons</li>
              <li>I can travel to you (within reasonable distance)</li>
              <li>Support between lessons via email or video clips</li>
              <li>Optional goal setting and practice plans</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-3xl font-semibold mb-2">Availability</h2>
            <p className="text-lg">
              I am available for lessons every day of the week from 9 AM to 9 PM. Feel free to reach out and book a session that suits you!
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-2">Get in Touch</h2>
            <p className="text-lg">
              Interested in booking a lesson or want to find out more? I'd love to hear from you. Reach out via my <Link to="/contact" className="underline font-medium hover:text-yellow-300">Contact</Link> page and let's get you started.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
