import { Menu, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#hero" className="text-2xl font-bold text-gray-900">JD</a>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900 transition-colors">Skills</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-gray-900">About</a>
          <a href="#projects" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Projects</a>
          <a href="#skills" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Skills</a>
          <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Contact</a>
        </div>
      </div>
    </header>
  );
}