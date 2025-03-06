'use client';

import React from 'react';
import Image from 'next/image';

const facilities = [
  {
    id: 1,
    name: 'Basketball Arena',
    description: 'Professional-grade indoor basketball court with high-quality flooring, scoreboards, and spectator seating.',
    images: [
      '/sports/basketball/court.jpg',
      '/sports/basketball/training.jpg',
      '/sports/basketball/game.jpg'
    ]
  },
  {
    id: 2,
    name: 'Football Field',
    description: 'FIFA standard football field with natural grass, floodlights, and professional training equipment.',
    images: [
      '/sports/football/field.jpg',
      '/sports/football/match.jpg',
      '/sports/football/training.jpg'
    ]
  },
  {
    id: 3,
    name: 'Volleyball Courts',
    description: 'Indoor and outdoor volleyball courts with professional nets and training facilities.',
    images: [
      '/sports/volleyball/court.jpg',
      '/sports/volleyball/match.jpg',
      '/sports/volleyball/training.jpg'
    ]
  },
  {
    id: 4,
    name: 'Table Tennis Center',
    description: 'State-of-the-art table tennis facility with professional tables and training equipment.',
    images: [
      '/sports/table-tennis/facility.jpg',
      '/sports/table-tennis/match.jpg',
      '/sports/table-tennis/training.jpg'
    ]
  }
];

export default function Facilities() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <Image
          src="/backgrounds/hero.jpg"
          alt="Sports facilities"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Our World-Class Facilities
            </h1>
            <p className="text-xl max-w-2xl">
              Experience state-of-the-art sports facilities designed for both professional
              athletes and enthusiasts alike.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities List */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {facilities.map((facility) => (
            <div key={facility.id} className="mb-20">
              <h2 className="text-3xl font-bold mb-6">{facility.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="text-gray-600 text-lg">
                    {facility.description}
                  </p>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Professional equipment</li>
                    <li>Expert coaching available</li>
                    <li>Regular maintenance</li>
                    <li>Available for booking</li>
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {facility.images.map((image, index) => (
                    <div
                      key={index}
                      className={`relative ${
                        index === 0 ? 'col-span-2' : 'col-span-1'
                      } h-64 rounded-lg overflow-hidden`}
                    >
                      <Image
                        src={image}
                        alt={`${facility.name} image ${index + 1}`}
                        fill
                        className="object-cover hover:scale-110 transition duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Book a Facility?
          </h2>
          <p className="text-white text-lg mb-8">
            Contact us to schedule your session or get more information about our facilities.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 transition duration-300">
            Book Now
          </button>
        </div>
      </section>
    </div>
  );
} 