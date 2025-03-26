import { Brain, ChevronDown, Code, Github, Linkedin, Mail, User } from 'lucide-react';
import React from 'react';
import { ContactForm } from './components/ContactForm';
import { MobileMenu } from './components/MobileMenu';
import { ProjectCard } from './components/ProjectCard';
import { ThemeToggle } from './components/ThemeToggle';
import GitHubProfile from './components/GitHubProfile';

const projects = [
  {
    title: 'Metamax Studio',
    description: 'Delivering wholesome integrated design & marketing solutions to clients all over the world.',
    image: '/assets/image/products/metamaxstudio.jpg',
    tags: ['Laravel', 'Boostrap', 'Javascript', 'PHP'],
    githubUrl: 'https://github.com/Phuldev',
    liveUrl: 'https://metamaxstudio.com.au/',
  },
  {
    title: 'International Restwell',
    description: 'Experience the difference with our team of passionate and innovative leaders in the industry.',
    image: '/assets/image/products/InternationalRestwell.jpg',
    tags: ['Laravel', 'Boostrap', 'Javascript', 'PHP'],
    githubUrl: 'https://github.com/Phuldev',
    liveUrl: 'https://www.irwservices.com.au/',
  },
  {
    title: 'उच्च शिक्षालय तथा माध्यमिक विद्यालय सङ्घ नेपाल',
    description: 'Higher Institutions and Secondary Schools’ Association Nepal (HISSAN) was established in 2053 BS (1997 AD) as an umbrella organization of private schools and colleges that are running classes from grade nine to university level throughout Nepal.',
    image: '/assets/image/products/hissankathmandu.jpg',
    tags: ['Laravel', 'Boostrap', 'Javascript', 'PHP'],
    githubUrl: 'https://github.com/Phuldev',
    liveUrl: 'https://hissankathmandu.org/',
  },
  {
    title: 'Garima Florist',
    description: 'Garima Florist & Events is an event planning company doing business since 15 years, providing complete planning, consulting, and supervision of any events. Garima Florist & Events provides its clients with spectacular events through creativity and uniqueness based on individual tastes and preferences with the ultimate goal of making your design-specific event a most elegant, unique, and memorable experience.',
    image: '/assets/image/products/garimaflorist.jpg',
    tags: ['Laravel', 'Boostrap', 'Javascript', 'PHP'],
    githubUrl: 'https://github.com/Phuldev',
    liveUrl: 'https://garimaflorist.com/',
  },
  {
    title: 'Zin Pesa Nepal',
    description: 'Established in 2021 A.D. by professionals having decade long experience and expertise in the abroad education counseling sector, Z. Pesa Nepal Pvt. Ltd. (Zin Pesa Nepal) of the leading and most motivating education consultancies incorporated under the office of the Company Registrar and Ministry of Social Development of Bagmati Province, Nepal. Zin is authorized to hold education consultancy services, test preparation classes, and Language Classes.',
    image: '/assets/image/products/zinpesanepal.jpg',
    tags: ['Laravel', 'Boostrap', 'Javascript', 'PHP'],
    githubUrl: 'https://github.com/Phuldev',
    liveUrl: 'https://zinpesanepal.com/',
  },
  {
    title: 'Ashishcrafts',
    description: 'Rooted in the heart of the Himalayas and bridging cultures through craftsmanship, Ashish Crafts and Creations is a globally recognized manufacturer and exporter of exquisite handmade woolen felt products. With a dual presence in Nepal (where our artisans craft every piece) and the USA (where we connect with the world), we unite ancient traditions with modern innovation to create ethical, eco-friendly, and uniquely beautiful products that honor Nepal’s rich cultural heritage.',
    image: '/assets/image/products/ashishcrafts.jpg',
    tags: ['Laravel', 'Boostrap', 'Javascript', 'PHP'],
    githubUrl: 'https://github.com/Phuldev',
    liveUrl: 'https://ashishcrafts.com/',
  }
];

const sections = ['home', 'about', 'projects', 'skills', 'contact'];

function App() {
  const [activeSection, setActiveSection] = React.useState('home');
  const [visibleProjects, setVisibleProjects] = React.useState(6);

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
            <span className="text-2xl font-bold">PM</span>
            <div className="hidden md:flex items-center space-x-8">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize ${activeSection === section
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
            Hi, I'm <span className="text-blue-600 dark:text-blue-400"><GitHubProfile username={'Phuldev'}/></span>
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
              Looking for a web developer to build a website that will take your business to new heights?
              With my technical expertise and creativity, I'll work with you to develop a website that's
              visually striking, user-friendly, and optimized for search engines. Whether you're looking
              for a simple website or a dynamic e-commerce platform, I can deliver the perfect solution
              for your business.
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
              <li>Php / Laravel</li>
              <li>Node.js</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg text-center">
              <User className="w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-bold mb-4">Other</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Git / GitHub</li>
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