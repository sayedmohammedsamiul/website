'use client';

import React from 'react';
import Image from 'next/image';

const programs = [
  {
    id: 1,
    name: 'Basketball',
    description: 'Join our basketball program for all skill levels.',
    image: '/sports/basketball/court.jpg',
  },
  {
    id: 2,
    name: 'Football',
    description: 'Train with professional coaches on FIFA-standard fields.',
    image: '/sports/football/field.jpg',
  },
  {
    id: 3,
    name: 'Volleyball',
    description: 'Indoor and beach volleyball training available.',
    image: '/sports/volleyball/court.jpg',
  },
  {
    id: 4,
    name: 'Table Tennis',
    description: 'Olympic standard tables and certified trainers.',
    image: '/sports/table-tennis/facility.jpg',
  },
];

export default function Programs() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <Image
          src="/backgrounds/programs-hero.jpg"
          alt="Programs"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Our Sports Programs
            </h1>
            <p className="text-xl max-w-2xl">
              Discover a variety of sports programs designed for all skill levels.
            </p>
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program) => (
              <div key={program.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={program.image}
                    alt={`${program.name} program`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{program.name}</h3>
                  <p className="text-gray-600">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Join Our Programs Today!</h2>
          <p className="text-lg mb-8">
            Sign up now and take the first step towards improving your skills.
          </p>
          <a
            href="/membership"
            className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </section>
    </div>
  );
}
