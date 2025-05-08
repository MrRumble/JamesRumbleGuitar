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

  // Regular Expression for phone number (basic validation allowing digits, spaces, dashes, and parentheses)
  const phoneRegex = /^[\d\s\-\(\)]*$/;

  // Regular Expression for email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,}$/;

  return (
    <div className="bg-customBlue min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-navySlate">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">

          {/* Name */}
          <div>
            <label className="block font-medium text-gray-700">Your Name <span className="text-red-600">*</span></label>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          {/* Age Range */}
          <div>
            <label className="block font-medium text-gray-700">Age Range <span className="text-red-600">*</span></label>
            <select name="age_range" required className="w-full border rounded px-3 py-2">
              <option value="">Select age range</option>
              <option value="6-11">6-11</option>
              <option value="12-17">12-17</option>
              <option value="18+">18+</option>
            </select>
          </div>

          {/* Level of Playing */}
          <div>
            <label className="block font-medium text-gray-700">Level of Playing <span className="text-red-600">*</span></label>
            <select name="level_of_playing" required className="w-full border rounded px-3 py-2">
              <option value="">Select level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          {/* Email Address */}
          <div>
            <label className="block font-medium text-gray-700">Email Address <span className="text-red-600">*</span></label>
            <input
              type="email"
              name="user_email"
              className="w-full border rounded px-3 py-2"
              required
              pattern={emailRegex.source} // Email validation using regex pattern
              title="Please enter a valid email address (e.g., example@domain.com)"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block font-medium text-gray-700">Phone Number <span className="text-red-600">*</span></label>
            <input
              type="tel"
              name="user_phone"
              className="w-full border rounded px-3 py-2"
              required
              pattern={phoneRegex.source} // Phone number validation using regex pattern
              title="Please enter a valid phone number (numbers, spaces, dashes, or parentheses are allowed)"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block font-medium text-gray-700">Message <span className="text-red-600">*</span></label>
            <textarea
              name="message"
              rows="4"
              className="w-full border rounded px-3 py-2"
              placeholder="Tell me a bit about what you want to get out of lessons, or if it's a general enquiry. I'll get back to you promptly!"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-navySlate text-white px-4 py-2 rounded hover:bg-skyTint transition"
          >
            Send Enquiry
          </button>

          {sent && <p className="text-green-600 mt-2">Message sent successfully!</p>}
          {error && <p className="text-red-600 mt-2">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </div>
  );
}
