import React from 'react';
import Slider from 'react-slick';
import jam1 from '../assets/jam1.jpg';
import jam2 from '../assets/jam2.jpg';
import jam3 from '../assets/jam3.png';
import jam4 from '../assets/jam4.png';
import jam5 from '../assets/live_shot.jpeg';
import jam6 from '../assets/jam5.png';
import jam7 from '../assets/jam7.png';
import mugshot from '../assets/rumble_mug.png';
import jamesBg from '../assets/rumble_bgd.jpg';

export default function About() {
  // Slider settings for auto play and infinite loop
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust speed of carousel movement
    draggable: true, // Enable dragging
    centerMode: true, // Enable center mode for better visualization
    centerPadding: '20px', // Space between images
    focusOnSelect: true, // Allows selection of images
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative min-h-screen bg-customBlue text-white overflow-hidden p-6">
      {/* Blue-toned Background Image on Left Half with Fade */}
      <div className="absolute inset-0 z-0">
        <div
          className="relative w-1/2 h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${jamesBg})`,
            maskImage: 'linear-gradient(to right, black 80%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, black 20%, transparent)',
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center md:text-left">
        {/* Bio Section */}
        <section className="w-full mb-16">
          <h2 className="text-5xl font-bold mb-4">About Me</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Text */}
            <p className="text-lg md:text-xl leading-relaxed md:text-left max-w-3xl">
              Hi, I'm James Rumble, and I've been playing guitar for over 20 years. My passion for music spans across a variety of styles — from rock and metal in my younger years, to blues, funk, pop, and classical music.
              <br /><br />
              Currently, I perform with White Noise, a professional wedding and function band. You can check us out at <a href="https://www.whitenoiseband.uk" className="text-white hover:text-skyTint underline">whitenoiseband.uk</a> and on <a href="https://www.instagram.com/whitenoisecovers" className="text-white hover:text-skyTint underline">Instagram</a>.
              <br /><br />
              Alongside performing, I’ve spent over 2 years teaching guitar to students of all ages, from young children in an extracurricular program designed to introduce them to playing in a band, to adults looking to refine their skills. I believe that learning music is a journey for everyone, regardless of age or experience, and I’m passionate about helping students achieve their goals.
              <br /><br />
              Whether you're picking up the guitar for the first time at 6 or 60, I’m here to offer personalised lessons that cater to your musical tastes and learning style. My goal is to make learning fun, engaging, and rewarding for every student.
              <br /><br />
              ✅ Fully DBS checked  
              <br />
              📍 Based in Caterham, Surrey — available for home visits or travel
            </p>

            {/* Image */}
            <div className="w-48 h-64 flex-shrink-0">
              <img
                src={mugshot}
                alt="James Rumble"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </section>

        {/* Gallery Reel */}
        <section className="w-full mb-16">
          <h2 className="text-3xl font-semibold mb-4">Photo Gallery</h2>
          <Slider {...settings}>
            {[jam1, jam2, jam3, jam4, jam5, jam6, jam7].map((img, idx) => (
              <div key={idx} className="px-2">
                <img
                  src={img}
                  alt={`jam-${idx}`}
                  className="w-full h-80 object-cover rounded-lg border-2 border-white"  // Adjust height for portrait
                />
              </div>
            ))}
          </Slider>
        </section>

        {/* YouTube Shorts */}
        <section className="w-full">
          <h2 className="text-3xl font-semibold mb-4">Watch Me Play</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Replace these with your actual Shorts video IDs */}
            {["z77tQE8svE0", "DJaOorPuEFA", "SHORTS_VIDEO_ID_3"].map((id) => (
              <div key={id} className="w-full aspect-video">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${id}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
