import React from 'react';

// --- PROPS TYPE DEFINITION ---
interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
    <div className="bg-white/80 dark:bg-gray-900/50 backdrop-blur-md rounded-lg shadow-lg dark:shadow-cyan-500/10 overflow-hidden transition-all duration-300 border border-gray-200/80 dark:border-transparent hover:shadow-xl hover:-translate-y-2 dark:hover:border-cyan-500/50 dark:hover:shadow-cyan-500/20">
        <img className="w-full h-56 object-cover object-center" src={project.imageUrl} alt={project.title} onError={(e) => { (e.target as HTMLImageElement).src='https://placehold.co/600x400/d1d5db/374151?text=Image+Error'; }} />
        <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-cyan-400 mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-base">{project.description}</p>
            <span className="inline-block bg-blue-100 text-blue-800 dark:bg-fuchsia-900/50 dark:text-fuchsia-300 text-xs font-semibold mt-4 px-2.5 py-0.5 rounded-full">{project.category}</span>
        </div>
    </div>
);

export default ProjectCard;
