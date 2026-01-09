import React from 'react';
import { ArrowRight } from 'lucide-react';

const IndustryCard = ({ title, description, image }) => {
  return (
    <article className="group bg-white rounded-lg overflow-hidden border border-gray-100 flex flex-col h-full shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col grow">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-6 grow line-clamp-3 leading-relaxed">
          {description}
        </p>
        
        {/* Link with Animated Arrow */}
        <a href="#" className="flex items-center gap-2 text-sm font-semibold text-red-600 mt-auto group/link">
          <span>Learn more</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
        </a>
      </div>
    </article>
  );
};

export default IndustryCard;