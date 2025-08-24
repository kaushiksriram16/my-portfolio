import React, { Dispatch, SetStateAction } from 'react';
import ProjectCard from './ProjectCard';
import { Page } from '../pages/index';
import { projects } from '../utils/projects';
import Skills from './Skills';

// --- PROPS TYPE DEFINITION ---
interface HomePageProps {
  setCurrentPage: Dispatch<SetStateAction<Page>>;
}


const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => (
  <div className="animate-fadeIn">
    {/* Hero Section */}
    <header className="bg-blue-50 dark:bg-black text-center py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-100 dark:opacity-10"></div>
        <div className="relative z-10">
            <div className="max-w-8xl mx-auto px-4">
                <h1 className="text-6xl md:text-5xl font-extrabold leading-tight mb-4 text-gray-900 dark:text-cyan-400 dark:[text-shadow:0_0_8px_rgba(0,255,255,0.8)]">Full Stack Developer | CS Graduate</h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">I build beautiful and functional web experiences.</p>
                <a href="#" onClick={() => setCurrentPage('Projects')} className="bg-blue-600 text-white dark:bg-cyan-500 dark:text-black font-bold py-3 px-8 rounded-full hover:bg-blue-700 dark:hover:bg-cyan-400 transition-all duration-300 shadow-lg hover:shadow-xl dark:shadow-cyan-500/25">View My Work</a>
            </div>
        </div>
    </header>

    {/* About Me Section */}
    <section className="py-20 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 dark:[text-shadow:0_0_8px_rgba(255,255,255,0.3)]">Hi, I&apos;m Kaushik. Nice to meet you.</h2>
        <p className="max-w-5xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          Since beginning my journey in tech, I&apos;ve worked across the stack—building full-stack web applications with a strong focus on clean, scalable frontend experiences. I&apos;m passionate about cloud technologies, constantly exploring tools that improve deployment and automation workflows. I have a deep interest in APIs—whether it&apos;s designing, integrating, or just experimenting with them, they&apos;re at the heart of much of my work. I&apos;m quietly confident, naturally curious, and always learning—one pull request, API call, and cloud experiment at a time.
        </p>
      </div>
    </section>

    {/* Skills Section */}
    <Skills />

    {/* Featured Projects Section */}
    <section className="py-20 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-12 dark:[text-shadow:0_0_8px_rgba(255,255,255,0.3)">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map(p => <ProjectCard key={p.id} project={p} />)}
            </div>
        </div>
    </section>
  </div>
);

export default HomePage;
