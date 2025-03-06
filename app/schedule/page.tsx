'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaCalendarAlt, FaClock, FaUser } from 'react-icons/fa';

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const scheduleData = {
  Monday: [
    { time: '07:00 - 09:00', activity: 'Basketball Training', coach: 'John Smith', level: 'Intermediate' },
    { time: '09:30 - 11:30', activity: 'Football Practice', coach: 'Mike Johnson', level: 'Advanced' },
    { time: '14:00 - 16:00', activity: 'Volleyball Session', coach: 'Sarah Davis', level: 'Beginner' },
    { time: '16:30 - 18:30', activity: 'Table Tennis Class', coach: 'David Lee', level: 'All Levels' }
  ],
  Tuesday: [
    { time: '08:00 - 10:00', activity: 'Football Youth Training', coach: 'Mike Johnson', level: 'Junior' },
    { time: '10:30 - 12:30', activity: 'Basketball Advanced', coach: 'John Smith', level: 'Advanced' },
    { time: '15:00 - 17:00', activity: 'Table Tennis Tournament', coach: 'David Lee', level: 'Advanced' },
    { time: '17:30 - 19:30', activity: 'Volleyball League', coach: 'Sarah Davis', level: 'Intermediate' }
  ],
  Wednesday: [
    { time: '07:00 - 09:00', activity: 'Basketball Beginners', coach: 'John Smith', level: 'Beginner' },
    { time: '09:30 - 11:30', activity: 'Football Skills', coach: 'Mike Johnson', level: 'Intermediate' },
    { time: '14:00 - 16:00', activity: 'Volleyball Training', coach: 'Sarah Davis', level: 'Advanced' },
    { time: '16:30 - 18:30', activity: 'Table Tennis Practice', coach: 'David Lee', level: 'Intermediate' }
  ],
  Thursday: [
    { time: '08:00 - 10:00', activity: 'Football Training', coach: 'Mike Johnson', level: 'Advanced' },
    { time: '10:30 - 12:30', activity: 'Basketball League', coach: 'John Smith', level: 'Advanced' },
    { time: '15:00 - 17:00', activity: 'Table Tennis Session', coach: 'David Lee', level: 'Beginner' },
    { time: '17:30 - 19:30', activity: 'Volleyball Practice', coach: 'Sarah Davis', level: 'Intermediate' }
  ],
  Friday: [
    { time: '07:00 - 09:00', activity: 'Basketball Training', coach: 'John Smith', level: 'Intermediate' },
    { time: '09:30 - 11:30', activity: 'Football Practice', coach: 'Mike Johnson', level: 'Beginner' },
    { time: '14:00 - 16:00', activity: 'Volleyball Session', coach: 'Sarah Davis', level: 'Advanced' },
    { time: '16:30 - 18:30', activity: 'Table Tennis Class', coach: 'David Lee', level: 'All Levels' }
  ],
  Saturday: [
    { time: '09:00 - 11:00', activity: 'Open Basketball', coach: 'John Smith', level: 'All Levels' },
    { time: '11:30 - 13:30', activity: 'Junior Football', coach: 'Mike Johnson', level: 'Junior' },
    { time: '14:00 - 16:00', activity: 'Family Volleyball', coach: 'Sarah Davis', level: 'All Levels' },
    { time: '16:30 - 18:30', activity: 'Table Tennis Social', coach: 'David Lee', level: 'All Levels' }
  ],
  Sunday: [
    { time: '10:00 - 12:00', activity: 'Basketball Workshop', coach: 'John Smith', level: 'All Levels' },
    { time: '12:30 - 14:30', activity: 'Football Match Day', coach: 'Mike Johnson', level: 'All Levels' },
    { time: '15:00 - 17:00', activity: 'Volleyball Games', coach: 'Sarah Davis', level: 'All Levels' },
    { time: '17:30 - 19:30', activity: 'Table Tennis Fun', coach: 'David Lee', level: 'All Levels' }
  ]
};

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState('Monday');

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <Image
          src="/backgrounds/hero.jpg"
          alt="Sports facility"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Weekly Schedule
            </h1>
            <p className="text-xl max-w-2xl">
              View our weekly activities and plan your training sessions.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Day Selection */}
          <div className="flex overflow-x-auto space-x-4 mb-12 pb-4">
            {weekDays.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-6 py-3 rounded-full text-lg font-semibold whitespace-nowrap transition duration-300 ${
                  selectedDay === day
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Schedule Grid */}
          <div className="grid gap-6">
            {scheduleData[selectedDay as keyof typeof scheduleData].map((session, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between"
              >
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                    <FaClock size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{session.activity}</h3>
                    <p className="text-gray-600">{session.time}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-8">
                  <div className="flex items-center">
                    <FaUser className="text-gray-400 mr-2" />
                    <span className="text-gray-600">{session.coach}</span>
                  </div>
                  <div className="flex items-center">
                    <FaCalendarAlt className="text-gray-400 mr-2" />
                    <span className="text-gray-600">{session.level}</span>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Important Information
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Booking Policy</h3>
                <p className="text-gray-600">
                  Please book your sessions at least 24 hours in advance. Cancellations should be made no later than 12 hours before the scheduled time.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Equipment</h3>
                <p className="text-gray-600">
                  Basic equipment is provided for all sessions. Participants are welcome to bring their own equipment if preferred.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Class Levels</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Beginner: For those new to the sport</li>
                  <li>Intermediate: For players with some experience</li>
                  <li>Advanced: For experienced players</li>
                  <li>All Levels: Open to everyone</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 