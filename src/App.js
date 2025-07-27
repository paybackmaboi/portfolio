import React, { useState, useEffect } from 'react';
// --- CORRECTED: Removed 'ExternalLink' and 'Server' ---
import { Github, Menu, X, Database, BrainCircuit } from 'lucide-react';

// --- CORRECTED IMPORTS: Fixed C# icon name and its import source ---
import { SiJavascript, SiNodedotjs, SiHtml5, SiCss3, SiTailwindcss, SiReact, SiExpress, SiLaravel } from 'react-icons/si';
import { TbBrandCSharp,TbBrandCpp } from "react-icons/tb";


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


  const portfolioData = {
    name: "Roy Estorco",
    title: "Information Technology Student",
    about: "I am a passionate and dedicated Information Technology student based in Cebu City, Philippines. With a strong foundation in software development and a keen interest in web technologies, I am constantly exploring new tools and techniques to build efficient, scalable, and user-friendly applications. My goal is to leverage my skills to solve real-world problems and contribute to innovative projects.",
    
    skills: [
        { name: 'JavaScript (ES6+)', icon: <SiJavascript className="w-8 h-8 text-yellow-400" /> },
        { name: 'React', icon: <SiReact className="w-8 h-8 text-cyan-400" /> },
        { name: 'C++', icon: <TbBrandCpp className="w-8 h-8 text-purple-400" /> },
        { name: 'C#', icon: <TbBrandCSharp className="w-8 h-8 text-purple-400" /> },
        { name: 'Node.js', icon: <SiNodedotjs className="w-8 h-8 text-green-400" /> },
         { name: 'Express.js', icon: <SiExpress className="w-8 h-8 text-gray-400" /> },
        { name: 'HTML5 & CSS3', icon: <div className="flex gap-x-2"><SiHtml5 className="w-8 h-8 text-orange-500" /> <SiCss3 className="w-8 h-8 text-blue-500" /></div> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-8 h-8 text-teal-400" /> },
        { name: 'SQL & NoSQL', icon: <Database className="w-8 h-8 text-indigo-400" /> },
        { name: 'Laravel', icon: <SiLaravel className="w-8 h-8 text-indigo-400" /> },
        { name: 'Git & GitHub', icon: <Github className="w-8 h-8 text-gray-300" /> },
        { name: 'Problem Solving', icon: <BrainCircuit className="w-8 h-8 text-indigo-400" /> },
    ],
    projects: [
      {
        title: 'Student Violation System',
        description: "A robust Student Violation System built with Laravel to efficiently track, manage, and report student misconduct. This application streamlines the disciplinary process for educational institutions by providing a centralized database for violations, sanctions, and student records.",
        tech: ['Laravel', ],
        liveUrl: '#',
        repoUrl: '#',
      },
      {
        title: 'BPO tech Bridge AI [Hackathon Project prototype]',
        description: "Intelligent career navigator that builds a personalized bridge from a BPO professional's current job to their future in tech. It's not just another job board or a list of courses. It's a smart, supportive, end-to-end ecosystem powered by AI.",
        tech: ['React', 'Tailwind CSS','Node.js', 'Express', 'Sequelize', 'Mysql','Recharts','axios','Lightswind UI'],
        liveUrl: '#',
        repoUrl: '#',
      },
      {
        title: 'Personal Portfolio Website',
        description: 'This very portfolio, designed to be a clean, modern, and responsive showcase of my skills and work. Built with React and Tailwind CSS.',
        tech: ['React', 'Tailwind CSS', 'Lucide Icons', 'React Icons'],
        liveUrl: '#',
        repoUrl: '#',
      },
      {
        title: 'Student Management System [Capstone 2 project]',
        description: 'Developing a Student Management System to digitize and streamline school operations, featuring modules for student enrollment, grade management, and attendance tracking, and autmated report generation.',
        tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'Sequelize', 'Mysql','Recharts','axios','RESTful API'],
        liveUrl: '#',
        repoUrl: '#',
      },
       {
        title: 'CebuRoute: Jeepney Navigator [Personal Project]',
        description: 'Designed and developed a full stack web application from concept to deployment to help Cebu commuters navigate jeepney routes.Implemented a key feature that calculates estimated fares based on distance, helping users budget their travel.',
        tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'RESTful API', 'Mysql','axios'],
        liveUrl: '#',
        repoUrl: '#',
      },
      {
        title: 'Scientific Calculator',
        description: 'Developed a scientific calcuator using c++ that performs basic arithmetic operations, trigonometric functions, logarithmic calculations, and more. The calculator features a user-friendly interface and supports both integer and floating-point calculations.',
        tech: ['c++'],
        liveUrl: '#',
        repoUrl: '#',
      },
      {
        title: 'Clinic consultation system',
        description: 'Ongoing project to develop a Clinic Consultation System that allows patients to book appointments, view medical history, and communicate with healthcare providers. The system aims to enhance patient experience and streamline clinic operations. And soon to convert react to Next.js framework.',
        tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'RESTful API', 'Mysql','axios'],
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
  const NavLink = ({ id, title, activeSection, onClick }) => (
    <button
      onClick={() => onClick(id)}
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
                {navLinks.map(link => <NavLink key={link.id} {...link} activeSection={activeSection} onClick={scrollToSection} />)}
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
                    <img 
                      src="ye.png" 
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
                  <div className="flex justify-center items-center h-10 mb-4">{skill.icon}</div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {portfolioData.projects.map((project, index) => (
                <div key={index} className="bg-gray-900 rounded-lg shadow-xl overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="bg-indigo-600/50 text-indigo-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tech}</span>
                      ))}
                    </div>
                  </div>
               
                  <div className="bg-gray-800 p-4 flex justify-end space-x-4 mt-auto">
                     {/* <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-400 transition duration-300 flex items-center">
                       <ExternalLink className="w-5 h-5 mr-2" /> Live Demo
                     </a>
                     <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-400 transition duration-300 flex items-center">
                       <Github className="w-5 h-5 mr-2" /> Code
                     </a> */}
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
                {/* <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                  <Github className="w-8 h-8" />
                </a>
                <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                  <Linkedin className="w-8 h-8" />
                </a> */}
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