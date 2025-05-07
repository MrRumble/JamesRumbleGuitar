import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Send the form data to EmailJS
    emailjs
      .sendForm('service_ahgkuwh', 'template_jxwtgxk', form.current, '9YG13qa6WrNz5YHUv') // Replace with your IDs
      .then(
        () => {
          setSent(true);
          setError(false);
          form.current.reset(); // Reset the form on success
        },
        (error) => {
          console.error('FAILED...', error.text);
          setError(true);
        }
      );
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4 text-navySlate">Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">

        {/* Age Range */}
        <div>
          <label className="block font-medium text-gray-700">Age Range</label>
          <select name="age_range" required className="w-full border rounded px-3 py-2">
            <option value="">Select age range</option>
            <option value="6-11">6-11</option>
            <option value="12-18">12-18</option>
            <option value="adult">Adult</option>
          </select>
        </div>

        {/* Booking Type */}
        <div>
          <label className="block font-medium text-gray-700">Booking Type</label>
          <select name="booking_type" required className="w-full border rounded px-3 py-2">
            <option value="">Select booking type</option>
            <option value="trial">Trial Lesson</option>
            <option value="regular">Regular Lessons</option>
            <option value="group">Group Class</option>
          </select>
        </div>

        {/* Lesson Details */}
        <div>
          <label className="block font-medium text-gray-700">Lesson Details</label>
          <input
            type="text"
            name="lesson_details"
            placeholder="e.g. acoustic beginner, electric blues"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            name="user_email"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="user_phone"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label className="block font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            rows="4"
            className="w-full border rounded px-3 py-2"
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-navySlate text-white px-4 py-2 rounded hover:bg-skyTint transition"
        >
          Send Message
        </button>

        {sent && <p className="text-green-600 mt-2">Message sent successfully!</p>}
        {error && <p className="text-red-600 mt-2">Something went wrong. Please try again.</p>}
      </form>
    </div>
  );
}
