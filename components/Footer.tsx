import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-white dark:bg-black text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-cyan-900/30">
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
      <p className='mb-5'>Built in Next.js</p>
      <p>&copy; {new Date().getFullYear()} Kaushik Sriram. All rights reserved.</p>
      <div className="flex justify-center space-x-6 mt-4">
        <a href="#" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Twitter</a>
        <a href="#" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">GitHub</a>
      </div>
    </div>
  </footer>
);

export default Footer;
