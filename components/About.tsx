import React from 'react';
import Skills from './Skills';

const AboutPage: React.FC = () => (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 animate-fadeIn">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12 dark:[text-shadow:0_0_8px_rgba(255,255,255,0.4)]">About Me</h1>
        <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
                <img src="https://media.licdn.com/dms/image/v2/D5603AQE5R7LMxL8UrQ/profile-displayphoto-scale_200_200/B56ZeJ0ttcHQAo-/0/1750363987256?e=1757548800&v=beta&t=HJcZqDYJvHi9EcL3QpE4XdSAl3GnBUdt7_2e_nUPwbQ" alt="profile-picture" className="rounded-full mx-auto shadow-lg dark:shadow-fuchsia-500/20" />
            </div>
            <div className="md:col-span-2 text-lg text-gray-700 dark:text-gray-300 space-y-6">
                <p>I&apos;m a passionate developer with a knack for creating elegant solutions in the least amount of time. I specialize in front-end development, particularly with React and Next.js, but I&apos;m always eager to learn new technologies and expand my skillset.</p>
                <p>My journey into web development started with a simple Hello, World! and has since grown into a full-fledged passion for building intuitive, dynamic user experiences. I believe that great design is not just about aesthetics, but also about creating something that is functional and easy to use.</p>
                <p>When I&apos;m not coding, you can find me exploring the great outdoors, reading a good book, or experimenting with new recipes in the kitchen.</p>
            </div>
        </div>
        <Skills />
    </div>
);

export default AboutPage;
