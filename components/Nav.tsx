import React, { useState, Dispatch, SetStateAction } from 'react';
import { Page, Theme } from '../pages/index';

// --- PROPS TYPE DEFINITION ---
interface NavProps {
  currentPage: Page;
  setCurrentPage: Dispatch<SetStateAction<Page>>;
  theme: Theme;
  toggleTheme: () => void;
}

// --- ICONS ---
const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M12 12a5 5 0 100-10 5 5 0 000 10z" />
    </svg>
);

const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);

const Nav: React.FC<NavProps> = ({ currentPage, setCurrentPage, theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks: Page[] = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <nav className="bg-white/80 dark:bg-black/70 backdrop-blur-lg shadow-sm dark:shadow-cyan-500/10 fixed w-full top-0 z-50 transition-all duration-300 border-b border-gray-200/50 dark:border-cyan-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" onClick={() => setCurrentPage('Home')} className="text-2xl font-bold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors dark:[text-shadow:0_0_6px_rgba(0,255,255,0.7)]">&lt;Kaushik Sriram /&gt;</a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  onClick={() => setCurrentPage(link)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${currentPage === link ? 'bg-blue-600 text-white dark:bg-cyan-500 dark:text-black' : 'text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-cyan-900/50 dark:hover:text-cyan-400'}`}
                >
                  {link}
                </a>
              ))}
              <button onClick={toggleTheme} className="p-2 rounded-full text-gray-700 dark:text-cyan-400 hover:bg-blue-100 dark:hover:bg-cyan-900/50 transition-colors">
                {theme === 'light' ? <MoonIcon /> : <SunIcon />}
              </button>
          </div>
          <div className="md:hidden flex items-center">
             <button onClick={toggleTheme} className="p-2 mr-2 rounded-full text-gray-700 dark:text-cyan-400 hover:bg-blue-100 dark:hover:bg-cyan-900/50 transition-colors">
                {theme === 'light' ? <MoonIcon /> : <SunIcon />}
              </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200/50 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                onClick={() => {
                  setCurrentPage(link);
                  setIsMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium ${currentPage === link ? 'bg-blue-600 text-white dark:bg-cyan-500 dark:text-black' : 'text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-cyan-900/50 dark:hover:text-cyan-400'} transition-all duration-300`}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
