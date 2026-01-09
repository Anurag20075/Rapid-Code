// import React from 'react';
// import { Linkedin, Twitter, Youtube } from 'lucide-react';

// const Footer = () => {
//   const linkColumns = [
//     {
//       title: 'Services',
//       links: ['Cloud Services', 'Core Enterprise & zCloud', 'Cybersecurity', 'Network & Edge', 'App & Data']
//     },
//     {
//       title: 'Consulting',
//       links: ['Strategy & Design', 'Implementation', 'Managed Services']
//     },
//     {
//       title: 'Insights',
//       links: ['Articles', 'Blogs', 'Case Studies']
//     },
//     {
//       title: 'About Us',
//       links: ['Our Company', 'Leadership', 'Investors', 'Careers', 'Newsroom']
//     },
//   ];

//   return (
//     <footer className="bg-gray-900 text-gray-300 text-sm py-12 border-t border-gray-800">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
//           {/* Dynamically render main columns */}
//           {linkColumns.map((col, idx) => (
//             <div key={idx} className="flex flex-col space-y-4">
//               <h3 className="text-white font-bold mb-2">{col.title}</h3>
//               {col.links.map((link) => (
//                 <a key={link} href="#" className="hover:text-white transition hover:underline">
//                   {link}
//                 </a>
//               ))}
//             </div>
//           ))}

//           {/* Contact / Social Column */}
//           <div className="flex flex-col space-y-4">
//             <h3 className="text-white font-bold mb-2">Connect</h3>
//             <a href="#" className="hover:text-white transition">Sales</a>
//             <a href="#" className="hover:text-white transition">Support</a>
//             <div className="flex gap-4 pt-4">
//               <a href="#" className="text-gray-400 hover:text-white transition"><Linkedin /></a>
//               <a href="#" className="text-gray-400 hover:text-white transition"><Twitter /></a>
//               <a href="#" className="text-gray-400 hover:text-white transition"><Youtube /></a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
//           <div>
//             &copy; 2024 Kyndryl Inc. All rights reserved.
//           </div>
//           <div className="flex gap-6">
//             <a href="#" className="hover:text-gray-300">Privacy Policy</a>
//             <a href="#" className="hover:text-gray-300">Terms of Use</a>
//             <a href="#" className="hover:text-gray-300">Cookie Preferences</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-red-600">Applications, Data & AI</a></li>
              <li><a href="#" className="hover:text-red-600">Cloud Services</a></li>
              <li><a href="#" className="hover:text-red-600">Security & Resiliency</a></li>
              <li><a href="#" className="hover:text-red-600">Network & Edge</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-red-600">About Us</a></li>
              <li><a href="#" className="hover:text-red-600">Careers</a></li>
              <li><a href="#" className="hover:text-red-600">Investor Relations</a></li>
              <li><a href="#" className="hover:text-red-600">Newsroom</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Insights</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-red-600">Analyst Reports</a></li>
              <li><a href="#" className="hover:text-red-600">Case Studies</a></li>
              <li><a href="#" className="hover:text-red-600">Blog</a></li>
              <li><a href="#" className="hover:text-red-600">Events</a></li>
            </ul>
          </div>

           {/* Column 4 - Socials */}
           <div>
            <h4 className="font-bold text-gray-900 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Linkedin className="w-5 h-5 text-gray-600 hover:text-red-600 cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-600 hover:text-red-600 cursor-pointer" />
              <Facebook className="w-5 h-5 text-gray-600 hover:text-red-600 cursor-pointer" />
              <Youtube className="w-5 h-5 text-gray-600 hover:text-red-600 cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-600 hover:text-red-600 cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2024 Kyndryl Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms of Use</a>
            <a href="#" className="hover:text-gray-900">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;