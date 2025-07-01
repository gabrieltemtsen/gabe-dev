import React from 'react';
import { Terminal, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative z-10 text-green-400 p-8 max-w-4xl mx-auto">
      <div className="flex items-center mb-8">
        <Terminal className="w-12 h-12 mr-4" />
        <h1 className="text-4xl font-mono font-bold">John.Developer</h1>
      </div>
      
      <div className="space-y-6 mb-12">
        <p className="text-xl font-mono">
          <span className="typing-effect">Full Stack Developer // Security Enthusiast // AI Explorer</span>
        </p>
        <p className="text-green-300 font-mono leading-relaxed">
          Transforming complex problems into elegant solutions. Specialized in building
          secure, scalable applications with modern technologies.
        </p>
      </div>

      <div className="flex space-x-6">
        <a href="https://github.com" className="hover:text-white transition-colors">
          <Github className="w-6 h-6" />
        </a>
        <a href="https://linkedin.com" className="hover:text-white transition-colors">
          <Linkedin className="w-6 h-6" />
        </a>
        <a href="mailto:contact@example.com" className="hover:text-white transition-colors">
          <Mail className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
