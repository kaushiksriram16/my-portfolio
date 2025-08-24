import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import HomePage from '../components/Home';
import AboutPage from '../components/About';
import ProjectsPage from '../components/Projects';
import ContactPage from '../components/Contact';

// Define types for better type safety
export type Page = 'Home' | 'About' | 'Projects' | 'Contact';
export type Theme = 'light' | 'dark';

const Home: NextPage = () => {
  const [currentPage, setCurrentPage] = useState<Page>('Home');
  const [theme, setTheme] = useState<Theme>('dark');

  // Effect to load the saved theme from localStorage or default to 'dark'
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme && ['light', 'dark'].includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  // Effect to apply the theme class to the document and save the theme to localStorage
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Function to render the current page based on the state
  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'About':
        return <AboutPage />;
      case 'Projects':
        return <ProjectsPage />;
      case 'Contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <>
      <Head>
        <title>Kaushik portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      
      <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'dark-theme bg-black' : 'light-theme bg-gray-50'}`}>
        <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} theme={theme} toggleTheme={toggleTheme} />
        <main className="pt-20">
          {renderPage()}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Home;
