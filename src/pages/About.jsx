import React from 'react';
import jam1 from '../assets/jam1.jpg';
import jam2 from '../assets/jam2.jpg';
import jam3 from '../assets/jam3.png';
import jam4 from '../assets/jam4.png';
import mugshot from '../assets/rumble_mug.png';

// Add more as needed

export default function About() {
  return (
    <div className="relative min-h-screen bg-customBlue text-white overflow-hidden p-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center md:text-left">

{/* Bio Section */}
<section className="w-full mb-16">
  <h2 className="text-5xl font-bold mb-4">About Me</h2>
  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
    {/* Text */}
    <p className="text-lg md:text-xl leading-relaxed md:text-left max-w-3xl">
      I'm James Rumble – a passionate guitarist and full-time music teacher. From playing lead guitar in function bands to experimenting with funk, rock, and blues styles, my life revolves around sharing the joy of guitar playing. I love jamming live, collaborating with other musicians, and helping students find their voice on the instrument.
    </p>

    {/* Image */}
    <div className="w-48 h-64 flex-shrink-0">
      <img
        src={mugshot}
        alt="James Rumble"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</section>

        {/* Gallery Reel */}
        <section className="w-full mb-16">
          <h2 className="text-3xl font-semibold mb-4">Photo Gallery</h2>
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {[jam1, jam2, jam3, jam4].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`jam-${idx}`}
                className="w-64 h-40 object-cover rounded-lg border-2 border-white flex-shrink-0"
              />
            ))}
          </div>
        </section>

        {/* YouTube Shorts */}
        <section className="w-full">
          <h2 className="text-3xl font-semibold mb-4">Watch Me Play</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Replace these with your actual Shorts video IDs */}
            {["SHORTS_VIDEO_ID_1", "SHORTS_VIDEO_ID_2", "SHORTS_VIDEO_ID_3"].map((id) => (
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
