'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBasketballBall, FaFootballBall, FaTableTennis } from 'react-icons/fa';
import { MdSportsVolleyball } from 'react-icons/md';

const sportsPrograms = [
  {
    id: 1,
    name: 'Basketball',
    description: 'Professional coaching with state-of-the-art courts and equipment.',
    icon: FaBasketballBall,
    image: '/sports/basketball/court.jpg',
    gallery: [
      '/sports/basketball/training.jpg',
      '/sports/basketball/game.jpg',
      '/sports/basketball/team.jpg'
    ]
  },
  {
    id: 2,
    name: 'Football',
    description: 'FIFA standard fields with expert trainers and regular tournaments.',
    icon: FaFootballBall,
    image: '/sports/football/field.jpg',
    gallery: [
      '/sports/football/match.jpg',
      '/sports/football/training.jpg',
      '/sports/football/team.jpg'
    ]
  },
  {
    id: 3,
    name: 'Volleyball',
    description: 'Indoor and beach volleyball courts with professional coaching.',
    icon: MdSportsVolleyball,
    image: '/sports/volleyball/court.jpg',
    gallery: [
      '/sports/volleyball/match.jpg',
      '/sports/volleyball/training.jpg',
      '/sports/volleyball/team.jpg'
    ]
  },
  {
    id: 4,
    name: 'Table Tennis',
    description: 'Olympic standard tables and equipment with certified trainers.',
    icon: FaTableTennis,
    image: '/sports/table-tennis/facility.jpg',
    gallery: [
      '/sports/table-tennis/match.jpg',
      '/sports/table-tennis/training.jpg',
      '/sports/table-tennis/equipment.jpg'
    ]
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    since: '2022',
    image: '/members/member1.jpg',
    text: "The facilities and coaching at Elite Sports Club are world-class. I've improved my game significantly since joining."
  },
  {
    id: 2,
    name: 'Michael Chen',
    since: '2021',
    image: '/members/member2.jpg',
    text: 'The variety of sports and professional training programs make this club stand out. Highly recommended!'
  },
  {
    id: 3,
    name: 'Emma Williams',
    since: '2023',
    image: '/members/member3.jpg',
    text: 'Great community, excellent facilities, and amazing coaches. My skills have improved tremendously.'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh]">
        <Image
          src="/backgrounds/hero.jpg"
          alt="Sports facility"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70"></div>
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Welcome to Elite Sports Club
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Join the most exclusive sports community. Experience world-class facilities
              and expert coaching in multiple sports disciplines.
            </p>
            <Link 
              href="/membership"
              className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold 
                       hover:bg-blue-100 transition duration-300 inline-flex items-center"
            >
              Join Now
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Sports Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Our Sports Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sportsPrograms.map((sport) => (
              <div key={sport.id} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={sport.image}
                    alt={`${sport.name} facility`}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-4xl text-blue-600 mb-4">
                    <sport.icon />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{sport.name}</h3>
                  <p className="text-gray-600">
                    {sport.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            What Our Members Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="relative h-12 w-12 mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600">Member since {testimonial.since}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <Image
          src="/backgrounds/cta.jpg"
          alt="Sports facility"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/80"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Start Your Sports Journey?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Join our club today and get access to all facilities, expert coaching,
            and a vibrant sports community.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold 
                     hover:bg-blue-50 transition duration-300 inline-flex items-center"
          >
            Contact Us
            <span className="ml-2">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
} 