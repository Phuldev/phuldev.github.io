import React from 'react';
import { Github, Linkedin, Mail, ChevronDown, Code, Brain, User, MessageSquare } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';
import { ProjectCard } from './components/ProjectCard';
import { ContactForm } from './components/ContactForm';
import { MobileMenu } from './components/MobileMenu';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1557821552-17105176375c?auto=format&fit=crop&q=80&w=1000',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=1000',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'AI Image Generator',
    description: 'An AI-powered image generation tool using stable diffusion',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    tags: ['Python', 'PyTorch', 'React', 'FastAPI'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Social Media Dashboard',
    description: 'Real-time analytics dashboard for social media management',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    tags: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Fitness Tracking App',
    description: 'Mobile-first fitness tracking application with workout plans',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=1000',
    tags: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Weather Forecast App',
    description: 'Real-time weather forecasting with interactive maps',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=1000',
    tags: ['React', 'OpenWeatherMap API', 'Mapbox', 'TypeScript'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  }
];

const sections = ['home', 'about', 'projects', 'skills', 'contact'];

function App() {
  const [activeSection, setActiveSection] = React.useState('home');
  const [visibleProjects, setVisibleProjects] = React.useState(4);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const loadMoreProjects = () => {
    setVisibleProjects(projects.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <ThemeToggle />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">Portfolio</span>
            <div className="hidden md:flex items-center space-x-8">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize ${
                    activeSection === section
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            <MobileMenu
              sections={sections}
              activeSection={activeSection}
              onSectionClick={scrollToSection}
            />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Phuldev Mandal</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-600 dark:text-gray-300">
            Full Stack Developer 
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/Phuldev" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/phuldev-mandal-7b602733a/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="mailto:phuldevmandal20@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <Mail className="w-8 h-8" />
            </a>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
              I'm a passionate developer with 5+ years of experience in building web applications.
              I specialize in creating beautiful, functional, and user-friendly websites that deliver
              exceptional user experiences.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source
              projects, or sharing my knowledge through technical writing and mentoring.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, visibleProjects).map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
          {visibleProjects < projects.length && (
            <div className="mt-12 text-center">
              <button
                onClick={loadMoreProjects}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Load More Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg text-center">
              <Code className="w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>React / Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>HTML5 / CSS3</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg text-center">
              <Brain className="w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Node.js</li>
                <li>Python</li>
                <li>PostgreSQL</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg text-center">
              <User className="w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-bold mb-4">Other</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Git / GitHub</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>Agile / Scrum</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 py-8">
        <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-300">
          <p>© 2025 Phuldev Mandal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;