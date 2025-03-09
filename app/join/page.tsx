'use client';

import React from 'react';
import Image from 'next/image';

const benefits = [
  {
    id: 1,
    title: 'World-Class Facilities',
    description: 'Access to state-of-the-art sports facilities.',
    icon: '/icons/facilities.svg',
  },
  {
    id: 2,
    title: 'Expert Coaching',
    description: 'Learn from certified and experienced coaches.',
    icon: '/icons/coaching.svg',
  },
  {
    id: 3,
    title: 'Community Events',
    description: 'Participate in exclusive events and tournaments.',
    icon: '/icons/events.svg',
  },
  {
    id: 4,
    title: 'Flexible Membership',
    description: 'Choose a plan that suits your lifestyle.',
    icon: '/icons/membership.svg',
  },
];

export default function JoinNow() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <Image
          src="/backgrounds/join-hero.jpg"
          alt="Join Now"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/70 to-blue-800/70"></div>
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
              Join the Elite Sports Club
            </h1>
            <p className="text-xl max-w-2xl">
              Become a part of our exclusive community and elevate your game.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Why Join Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <Image src={benefit.icon} alt={benefit.title} width={50} height={50} />
                <h3 className="text-xl font-semibold mb-4 text-blue-600">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign-Up Form */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Sign Up Now</h2>
          <form className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg text-gray-800">
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Full Name</label>
              <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Email Address</label>
              <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Choose Membership Plan</label>
              <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option>Basic</option>
                <option>Premium</option>
                <option>Elite</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              Join Now
            </button>
          </form>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">What Our Members Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Add testimonials here */}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-purple-800 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Game?</h2>
          <p className="text-lg mb-8">
            Join us today and start your journey towards excellence.
          </p>
          <a
            href="/membership"
            className="bg-white text-purple-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-100 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </section>
    </div>
  );
}
