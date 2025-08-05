import React, { useState, FormEvent } from 'react';

const ContactPage: React.FC = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Sending...');
        
        const form = e.currentTarget;
        const nameInput = form.elements.namedItem('name') as HTMLInputElement;
        const emailInput = form.elements.namedItem('email') as HTMLInputElement;
        const messageInput = form.elements.namedItem('message') as HTMLTextAreaElement;

        setTimeout(() => {
            if (nameInput.value && emailInput.value && messageInput.value) {
                setStatus('Message sent successfully!');
                form.reset();
            } else {
                setStatus('Please fill out all fields.');
            }
             setTimeout(() => setStatus(''), 3000);
        }, 1000);
    };

    return (
        <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 animate-fadeIn">
            <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-4 dark:[text-shadow:0_0_8px_rgba(255,255,255,0.4)]">Get In Touch</h1>
            <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12">Have a question or want to work together? Leave your details and I'll get back to you.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6 bg-white/60 dark:bg-gray-900/50 backdrop-blur-md p-8 rounded-lg shadow-lg border border-gray-200/80 dark:shadow-fuchsia-500/15 dark:border-fuchsia-900/50">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                    <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 bg-white/80 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:focus:ring-fuchsia-500 dark:focus:border-transparent sm:text-sm" />
                </div>
                 <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                    <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 bg-white/80 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:focus:ring-fuchsia-500 dark:focus:border-transparent sm:text-sm" />
                </div>
                 <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                    <textarea name="message" id="message" rows={4} required className="mt-1 block w-full px-3 py-2 bg-white/80 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:focus:ring-fuchsia-500 dark:focus:border-transparent sm:text-sm"></textarea>
                </div>
                <div>
                    <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-fuchsia-600 dark:hover:bg-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-fuchsia-500 dark:shadow-lg dark:shadow-fuchsia-500/25">
                        Send Message
                    </button>
                </div>
                {status && <p className="text-center text-gray-600 dark:text-fuchsia-300">{status}</p>}
            </form>
        </div>
    );
};

export default ContactPage;
