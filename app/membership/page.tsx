'use client';

import React from 'react';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

const membershipPlans = [
  {
    id: 1,
    name: 'Basic',
    price: '49',
    period: 'month',
    features: [
      'Access to all basic facilities',
      'Standard gym equipment',
      'Group classes',
      'Locker room access',
      'Online booking system'
    ],
    recommended: false
  },
  {
    id: 2,
    name: 'Premium',
    price: '89',
    period: 'month',
    features: [
      'All Basic features',
      'Personal trainer sessions',
      'Priority booking',
      'Spa access',
      'Nutritional consultation',
      'Free parking'
    ],
    recommended: true
  },
  {
    id: 3,
    name: 'Elite',
    price: '149',
    period: 'month',
    features: [
      'All Premium features',
      'Private coaching',
      'VIP locker room',
      'Performance tracking',
      'Physiotherapy sessions',
      'Guest passes',
      'Event access'
    ],
    recommended: false
  }
];

const benefits = [
  {
    title: 'Expert Coaching',
    description: 'Learn from certified professional coaches in all sports disciplines.'
  },
  {
    title: 'Modern Facilities',
    description: 'Access to state-of-the-art equipment and well-maintained facilities.'
  },
  {
    title: 'Flexible Schedule',
    description: 'Open 7 days a week with extended hours for your convenience.'
  },
  {
    title: 'Community Events',
    description: 'Regular tournaments, social events, and community gatherings.'
  }
];

export default function Membership() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <Image
          src="/backgrounds/cta.jpg"
          alt="Sports training"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Membership Plans
            </h1>
            <p className="text-xl max-w-2xl">
              Choose the perfect membership plan that suits your sporting needs and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipPlans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-2xl p-8 ${
                  plan.recommended
                    ? 'bg-blue-600 text-white ring-4 ring-blue-600 shadow-xl scale-105'
                    : 'bg-white text-gray-600 shadow-lg'
                }`}
              >
                {plan.recommended && (
                  <span className="inline-block bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    Recommended
                  </span>
                )}
                <h3 className={`text-2xl font-bold ${plan.recommended ? 'text-white' : 'text-gray-800'}`}>
                  {plan.name}
                </h3>
                <div className="mt-4 mb-8">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-lg">/{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <FaCheck className="mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-6 rounded-full font-semibold transition duration-300 ${
                    plan.recommended
                      ? 'bg-white text-blue-600 hover:bg-blue-50'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Membership Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                How do I get started?
              </h3>
              <p className="text-gray-600">
                Simply choose your preferred membership plan and visit our facility. Our staff will guide you through the registration process and give you a tour of our facilities.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Can I switch between plans?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your membership plan at any time. Changes will be effective from the next billing cycle.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Is there a joining fee?
              </h3>
              <p className="text-gray-600">
                No, we don't charge any joining fees. You only pay the monthly membership fee for your chosen plan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 