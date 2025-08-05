import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../utils/projects';

// // --- MOCK DATA & TYPE ---
// interface Project {
//   id: number;
//   title: string;
//   description: string;
//   category: string;
//   imageUrl: string;
// }

// const projects: Project[] = [
//   { id: 1, title: 'Project Cyberspace', description: 'A brief description of project one.', category: 'Web App', imageUrl: 'https://placehold.co/600x400/f3f4f6/1f2937?text=Project+One' },
//   { id: 2, title: 'Project Glass', description: 'A brief description of project two.', category: 'Mobile App', imageUrl: 'https://placehold.co/600x400/e5e7eb/1f2937?text=Project+Two' },
//   { id: 3, title: 'Project Minimal', description: 'A brief description of project three.', category: 'Web App', imageUrl: 'https://placehold.co/600x400/d1d5db/1f2937?text=Project+Three' },
//   { id: 4, title: 'Project Abstract', description: 'A brief description of project four.', category: 'Design', imageUrl: 'https://placehold.co/600x400/e5e7eb/1f2937?text=Project+Four' },
//   { id: 5, title: 'Project Structure', description: 'A brief description of project five.', category: 'Mobile App', imageUrl: 'https://placehold.co/600x400/f3f4f6/1f2937?text=Project+Five' },
//   { id: 6, title: 'Project Form', description: 'A brief description of project six.', category: 'Web App', imageUrl: 'https://placehold.co/600x400/d1d5db/1f2937?text=Project+Six' },
// ];


const ProjectsPage: React.FC = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', ...new Set(projects.map(p => p.category))];
    const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

    return (
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 animate-fadeIn">
            <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-4 dark:[text-shadow:0_0_8px_rgba(255,255,255,0.4)]">My Work</h1>
            <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12">A collection of my projects.</p>
            
            <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
                {categories.map(cat => (
                    <button 
                        key={cat} 
                        onClick={() => setFilter(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${filter === cat ? 'bg-blue-600 text-white border-transparent dark:bg-cyan-500 dark:text-black dark:shadow-md dark:shadow-cyan-500/30' : 'bg-white/70 backdrop-blur-sm text-gray-700 border-gray-300 hover:bg-blue-100/70 hover:border-blue-300 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:text-cyan-400 dark:hover:border-cyan-700'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map(p => <ProjectCard key={p.id} project={p} />)}
            </div>
        </div>
    );
};

export default ProjectsPage;
