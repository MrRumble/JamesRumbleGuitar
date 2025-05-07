import React from 'react';
import jamesBg from '../assets/rumble_bgd.jpg'; // blue-toned image

export default function Lessons() {
  return (
    <div className="relative min-h-screen bg-customBlue text-white p-6">
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
      
      {/* Content Container - Aligned to Right */}
      <div className="relative z-10 flex justify-end">
        <div className="w-full md:w-1/2 ml-auto space-y-10">
          <section>
            <h1 className="text-5xl font-bold mb-4">Guitar Lessons</h1>
            <p className="text-lg md:text-xl leading-relaxed">
              Whether you're just starting out or looking to level up your playing, I offer expert tuition tailored to you. With years of experience as a performer and educator, I create fun, structured sessions that build confidence and skill in every student.
            </p>
          </section>
          
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
            <h2 className="text-3xl font-semibold mb-2">Get in Touch</h2>
            <p className="text-lg">
              Interested in booking a lesson or want to find out more? I'd love to hear from you. Reach out via my <a href="/contact" className="underline font-medium hover:text-yellow-300">Contact</a> page and let's get you started.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}