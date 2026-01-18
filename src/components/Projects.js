import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile, FaJava, FaDatabase, FaDesktop, FaPuzzlePiece, FaReact, FaChartLine, FaImage, FaMapMarkedAlt, FaPalette, FaBolt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiMysql, SiJavascript, SiHtml5, SiCss3, SiSass, SiPhp, SiTailwindcss } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const projects = [
  {
    id: 1,
    title: 'The Beauty Loft',
    description: 'A responsive business website designed to showcase salon services, products, and contact information with a clean and modern UI. Features service listings, gallery, and contact form functionality.',
    technologies: [
      { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" /> },
      { name: 'CSS3', icon: <SiCss3 className="text-blue-500" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
      { name: 'SCSS', icon: <SiSass className="text-pink-500" /> },
      { name: 'PHP', icon: <SiPhp className="text-indigo-500" /> }
    ],
    category: 'Web Application',
    github: 'https://github.com/Shalitha-Lakshan/The-Beauty-Loft',
    demo: '#',
    image: '/images/projects/beauty-loft-preview.png',
    accentColor: 'from-pink-500 to-rose-600'
  },
  {
    id: 2,
    title: 'ECOCYCLE',
    description: 'A comprehensive plastic bottle recycling management system that tracks collections, manages users, and promotes environmental sustainability through a modern web platform. The system streamlines the recycling process and encourages eco-friendly practices.',
    technologies: [
      { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
      { name: 'Express.js', icon: <SiExpress className="text-gray-300" /> },
      { name: 'React.js', icon: <SiReact className="text-blue-400" /> },
      { name: 'Node.js', icon: <SiNodedotjs className="text-green-600" /> },
      { name: 'RESTful API', icon: <TbApi className="text-green-400" /> }
    ],
    category: 'Full Stack',
    github: 'https://github.com/Shalitha-Lakshan/ECO-CYCLE',
    demo: '#',
    image: '/images/projects/ecocycle-preview.png',
    accentColor: 'from-emerald-500 to-teal-600'
  },
  {
    id: 3,
    title: 'TRIPTREK',
    description: 'A mobile travel planning and experience management app that helps users discover destinations, manage itineraries, and organize trips efficiently. Features include user authentication, trip planning tools, and destination recommendations.',
    technologies: [
      { name: 'Kotlin', icon: <FaMobile className="text-purple-500" /> },
      { name: 'Android SDK', icon: <FaMobile className="text-green-500" /> },
      { name: 'Firebase', icon: <FaDatabase className="text-yellow-500" /> },
      { name: 'Google Maps API', icon: <FaMapMarkedAlt className="text-blue-500" /> },
      { name: 'RESTful API', icon: <TbApi className="text-green-400" /> }
    ],
    category: 'Mobile App',
    github: 'https://github.com/Shalitha-Lakshan/TRIP-TREK',
    demo: '#',
    image: '/images/projects/triptrek-preview.png',
    accentColor: 'from-blue-500 to-indigo-600'
  },
  {
    id: 4,
    title: 'MoodMate',
    description: 'A Kotlin-based mental wellness and mood tracking mobile app that helps users log emotions, reflect, and monitor emotional trends over time. Features include mood tracking, journaling, and data visualization for better mental health management.',
    technologies: [
      { name: 'Kotlin', icon: <FaMobile className="text-purple-500" /> },
      { name: 'Android SDK', icon: <FaMobile className="text-green-500" /> },
      { name: 'Room Database', icon: <FaDatabase className="text-blue-500" /> },
      { name: 'MPAndroidChart', icon: <FaChartLine className="text-blue-400" /> },
      { name: 'Material Design 3', icon: <FaPalette className="text-teal-400" /> },
      { name: 'Coroutines', icon: <FaBolt className="text-yellow-400" /> }
    ],
    category: 'Mobile App',
    github: 'https://github.com/Shalitha-Lakshan/MoodMate',
    demo: '#',
    image: '/images/projects/moodmate-preview.png',
    accentColor: 'from-purple-500 to-pink-600'
  },
  {
    id: 5,
    title: 'Car Rental System',
    description: 'A comprehensive car rental management system developed in Java with JavaFX, featuring vehicle inventory management, customer booking system, and rental transaction processing with an intuitive user interface.',
    technologies: [
      { name: 'Java', icon: <FaJava className="text-red-500" /> },
      { name: 'JavaFX', icon: <FaDesktop className="text-blue-400" /> },
      { name: 'OOP', icon: <FaCode className="text-yellow-400" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
      { name: 'Scene Builder', icon: <FaPuzzlePiece className="text-orange-400" /> }
    ],
    category: 'Desktop Application',
    github: 'https://github.com/Shalitha-Lakshan/Car-Rental-System',
    demo: '#',
    image: '/images/projects/car-rental-preview.png',
    accentColor: 'from-orange-500 to-red-600'
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations, dark/light mode, and a clean, professional design to showcase my work and skills effectively.',
    technologies: [
      { name: 'React', icon: <SiReact className="text-blue-400" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-300" /> },
      { name: 'Framer Motion', icon: <FaCode className="text-purple-400" /> },
      { name: 'Responsive Design', icon: <FaMobile className="text-green-400" /> },
      { name: 'React Icons', icon: <FaReact className="text-blue-300" /> }
    ],
    category: 'Website',
    github: 'https://github.com/Shalitha-Lakshan/portfolio',
    demo: '#',
    image: '/images/projects/portfolio-preview.png',
    accentColor: 'from-indigo-500 to-purple-600'
  }
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="h-full flex flex-col group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden rounded-t-2xl">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.accentColor} opacity-90`}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark/95 to-transparent z-10"></div>
        <div className="absolute bottom-4 left-4 z-20">
          <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-black/30 backdrop-blur-sm rounded-full mb-2">
            {project.category}
          </span>
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        </div>
        {project.image ? (
          <>
            <motion.img 
              src={process.env.PUBLIC_URL + project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700"
              style={{
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              }}
              onError={(e) => {
                console.error(`Failed to load image: ${project.image}`);
                e.target.style.display = 'none';
              }}
            />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-dark-800">
            <div className="text-center p-4">
              <FaImage className="text-gray-600 text-4xl mx-auto mb-2" />
              <p className="text-gray-400 text-sm">No image available</p>
              <p className="text-gray-500 text-xs mt-1">Expected: {project.image}</p>
            </div>
          </div>
        )}
      </div>
      
      <div className="flex-1 bg-dark-800/50 backdrop-blur-sm p-6 border-x border-b border-gray-800/50 rounded-b-2xl flex flex-col">
        <p className="text-light/80 mb-6 flex-grow">{project.description}</p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, i) => (
              <motion.div
                key={i}
                className="flex items-center px-3 py-1.5 bg-dark-700/50 rounded-full text-xs text-light/80 border border-gray-700/50"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(30, 41, 59, 0.7)',
                  borderColor: 'rgba(99, 102, 241, 0.5)'
                }}
                transition={{ duration: 0.2 }}
              >
                <span className="mr-2">{tech.icon}</span>
                {tech.name}
              </motion.div>
            ))}
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-800/50">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-light/80 hover:text-primary transition-colors group-hover:translate-x-1 duration-300"
              aria-label="View on GitHub"
            >
              <FaGithub className="mr-2" /> View Code
            </a>
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                aria-label="Live Demo"
              >
                <FaExternalLinkAlt className="mr-2" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const categories = ['All', 'Full Stack', 'Web Application', 'Mobile App', 'Website'];

  const filterProjects = (category) => {
    setActiveFilter(category);
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-dark/50">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-mono text-primary mb-2 inline-block">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-light/70 max-w-2xl mx-auto">
            Explore a selection of my recent work. Each project represents a unique challenge and solution, 
            showcasing my skills in full-stack development and problem-solving.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => filterProjects(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-primary to-secondary text-white'
                  : 'text-light/70 hover:text-primary bg-dark-700/50 hover:bg-dark-700/80'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            key={activeFilter}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <a
            href="https://github.com/Shalitha-Lakshan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg hover:shadow-primary/20"
          >
            <FaGithub className="mr-3 text-lg" />
            <span>View All Projects on GitHub</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
