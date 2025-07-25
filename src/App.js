import React, { useState, useEffect } from 'react';
import { Linkedin, Github, Menu, X, Code, ExternalLink, Server, Database, BrainCircuit } from 'lucide-react';

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- Smooth Scrolling & Active Nav Link ---
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // --- Placeholder Data ---
  // Roy can easily replace this with his actual information.
  const portfolioData = {
    name: "Roy Estorco",
    title: "Information Technology Student",
    about: "I am a passionate and dedicated Information Technology student based in Tagbilaran City, Philippines. With a strong foundation in software development and a keen interest in web technologies, I am constantly exploring new tools and techniques to build efficient, scalable, and user-friendly applications. My goal is to leverage my skills to solve real-world problems and contribute to innovative projects.",
    skills: [
      { name: 'JavaScript (ES6+)', icon: <Code className="w-8 h-8 text-indigo-400" /> },
      { name: 'React', icon: <Code className="w-8 h-8 text-indigo-400" /> },
      { name: 'Node.js', icon: <Server className="w-8 h-8 text-indigo-400" /> },
      { name: 'HTML5 & CSS3', icon: <Code className="w-8 h-8 text-indigo-400" /> },
      { name: 'Tailwind CSS', icon: <Code className="w-8 h-8 text-indigo-400" /> },
      { name: 'SQL & NoSQL', icon: <Database className="w-8 h-8 text-indigo-400" /> },
      { name: 'Git & GitHub', icon: <Github className="w-8 h-8 text-indigo-400" /> },
      { name: 'Problem Solving', icon: <BrainCircuit className="w-8 h-8 text-indigo-400" /> },
    ],
    projects: [
      {
        title: 'E-commerce Platform',
        description: 'A full-featured e-commerce website with product listings, a shopping cart, and a secure checkout process. Built with the MERN stack.',
        tech: ['React', 'Node.js', 'Express', 'MongoDB'],
        liveUrl: '#',
        repoUrl: '#',
      },
      {
        title: 'Task Management App',
        description: 'A collaborative task management tool that allows users to create projects, assign tasks, and track progress in real-time.',
        tech: ['React', 'Firebase', 'Tailwind CSS'],
        liveUrl: '#',
        repoUrl: '#',
      },
      {
        title: 'Personal Portfolio Website',
        description: 'This very portfolio, designed to be a clean, modern, and responsive showcase of my skills and work. Built with React and Tailwind CSS.',
        tech: ['React', 'Tailwind CSS', 'Lucide Icons'],
        liveUrl: '#',
        repoUrl: '#',
      },
    ],
    contact: {
      email: "roy.estorco123@gmail.com",
      linkedin: "https://linkedin.com/in/royestorco",
      github: "https://github.com/royestorco",
    }
  };

  // --- Navigation Links ---
  const navLinks = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'skills', title: 'Skills' },
    { id: 'projects', title: 'Projects' },
    { id: 'contact', title: 'Contact' },
  ];
  
  // --- Reusable NavLink Component ---
  const NavLink = ({ id, title }) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
        activeSection === id
          ? 'text-white bg-indigo-500/50'
          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
      }`}
    >
      {title}
    </button>
  );

  return (
    <div className="bg-gray-900 text-gray-100 font-sans leading-normal tracking-tight">
      {/* --- Header --- */}
      <header className="bg-gray-800/80 backdrop-blur-sm fixed w-full top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-white font-bold text-xl cursor-pointer" onClick={() => scrollToSection('home')}>RE.</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map(link => <NavLink key={link.id} {...link} />)}
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map(link => (
                 <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`w-full text-left block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                    activeSection === link.id
                      ? 'text-white bg-indigo-500'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {link.title}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        {/* --- Hero Section --- */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-gray-900 pt-16">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
              <span className="block">Hi, I'm</span>
              <span className="block text-indigo-400 animate-pulse">{portfolioData.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">{portfolioData.title}</p>
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
            >
              View My Work
            </button>
          </div>
        </section>

        {/* --- About Section --- */}
        <section id="about" className="py-20 sm:py-32 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">About Me</h2>
              <div className="w-20 h-1 bg-indigo-500 mx-auto mt-4 rounded"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center">
                 <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden shadow-2xl">
                    {/* TODO: Replace this with your actual picture! 
                      1. Upload your photo to a service like Imgur or a similar image host.
                      2. Copy the direct link to the image (e.g., https://i.imgur.com/your-image.jpg).
                      3. Paste the link into the `src` attribute below, replacing the placeholder URL.
                    */}
                    <img 
                      src="11.jpeg" 
                      alt="Roy Estorco"
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/256x256/4A5568/E2E8F0?text=Error'; }}
                    />
                 </div>
              </div>
              <div className="md:col-span-2 text-lg text-gray-300 space-y-4">
                <p>{portfolioData.about}</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Skills Section --- */}
        <section id="skills" className="py-20 sm:py-32 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Technical Skills</h2>
              <div className="w-20 h-1 bg-indigo-500 mx-auto mt-4 rounded"></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
              {portfolioData.skills.map((skill, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-indigo-500/20 transform hover:-translate-y-2 transition-all duration-300">
                  <div className="flex justify-center mb-4">{skill.icon}</div>
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Projects Section --- */}
        <section id="projects" className="py-20 sm:py-32 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">My Projects</h2>
              <div className="w-20 h-1 bg-indigo-500 mx-auto mt-4 rounded"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioData.projects.map((project, index) => (
                <div key={index} className="bg-gray-900 rounded-lg shadow-xl overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="bg-indigo-600/50 text-indigo-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-800 p-4 flex justify-end space-x-4">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-400 transition duration-300 flex items-center">
                      <ExternalLink className="w-5 h-5 mr-2" /> Live Demo
                    </a>
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-400 transition duration-300 flex items-center">
                      <Github className="w-5 h-5 mr-2" /> Code
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Contact Section --- */}
        <section id="contact" className="py-20 sm:py-32 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Get In Touch</h2>
              <div className="w-20 h-1 bg-indigo-500 mx-auto mt-4 rounded"></div>
              <p className="mt-4 text-lg text-gray-400">I'm currently open to new opportunities. Feel free to reach out!</p>
            </div>
            <div className="max-w-lg mx-auto text-center">
              <a href={`mailto:${portfolioData.contact.email}`} className="inline-block bg-indigo-600 text-white font-bold py-4 px-8 rounded-full hover:bg-indigo-500 transition duration-300 ease-in-out transform hover:scale-105 text-lg">
                {portfolioData.contact.email}
              </a>
              <div className="flex justify-center space-x-6 mt-8">
                <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                  <Github className="w-8 h-8" />
                </a>
                <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                  <Linkedin className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
