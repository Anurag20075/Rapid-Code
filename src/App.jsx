import React from 'react';
import Navbar from './Component/Navbar';
import IndustryCard from './Component/IndustryCard';
import Footer from './Component/Footer';
import { industriesData } from './data';

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white flex flex-col min-h-screen">
      
      {/* 1. Header */}
      <Navbar />

      {/* 2. Hero Section */}
      <section className="relative bg-white pt-16 pb-20 lg:pt-24 lg:pb-28 px-4">
        <div className="container mx-auto">
          {/* Breadcrumb */}
          <nav className="flex text-sm text-gray-500 mb-6">
            <a href="#" className="hover:underline">Home</a>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Industries</span>
          </nav>

          {/* Content */}
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.1]">
              Industries
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl leading-relaxed">
              Kyndryl helps modernize, digitize and secure your IT to provide outstanding customer experiences.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 border border-gray-300 text-gray-900 font-medium rounded hover:bg-gray-50 transition hover:border-black hover:shadow-sm">
                Read the story
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-900 font-medium rounded hover:bg-gray-50 transition hover:border-black hover:shadow-sm">
                Read the 2024 report
              </button>
            </div>
          </div>

          {/* Decorative Background Gradient */}
          <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-5 pointer-events-none hidden lg:block">
            <div className="absolute top-20 right-10 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* 3. Promo / CTA Banner */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">How does your AI strategy stack up?</h2>
            <p className="text-gray-300 text-lg">
              Take our quick AI assessment and discover how your organization compares to industry benchmarks.
            </p>
          </div>
          <div className="shrink-0">
            <a href="#" className="inline-block bg-linear-to-r from-red-600 to-orange-500 hover:opacity-90 text-white font-semibold px-8 py-3 rounded transition shadow-lg transform hover:-translate-y-0.5">
              Start the assessment
            </a>
          </div>
        </div>
      </section>

      {/* 4. Industries Grid */}
      <section className="py-20 lg:py-24 bg-gray-50 px-4 grow">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Explore by Industry</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesData.map((industry) => (
              <IndustryCard 
                key={industry.id} 
                title={industry.title} 
                description={industry.description} 
                image={industry.image} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="py-24 bg-white text-center px-4 border-t border-gray-100">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Connect with Kyndryl</h2>
          <p className="text-xl text-gray-600 mb-8">Together we can make sure the world thrives.</p>
          <button className="bg-black text-white px-8 py-3 rounded font-medium hover:bg-gray-800 transition shadow-lg hover:shadow-xl">
            Contact us
          </button>
        </div>
      </section>

      {/* 6. Footer */}
      <Footer />

    </div>
  );
}

export default App;



