import { FaReact, FaNodeJs, FaJava, FaPython, FaAws } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFastapi } from 'react-icons/si';

const skills = [
  { name: 'React.js', icon: <FaReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'FastAPI', icon: <SiFastapi /> },
  { name: 'AWS', icon: <FaAws /> },
];


const Skills: React.FC = () => (
    <div className="mt-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12 dark:[text-shadow:0_0_8px_rgba(255,255,255,0.3)]">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center p-10">
            {skills.map(skill => (
                <div key={skill.name} className="flex flex-col items-center justify-center p-4 bg-white/60 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-md border border-gray-200/50 dark:border-cyan-900/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                     <div className="text-4xl text-blue-600 dark:text-cyan-400 mb-2">
                        {skill.icon}
                     </div>
                        <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                </div>
            ))}
        </div>
    </div>
);

export default Skills;