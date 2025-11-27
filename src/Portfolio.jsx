import React, { useState } from "react";
import {
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Load Poppins font
  React.useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const skills = [
    "React",
    "Redux",
    "Redux.js Toolkit",
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Next.js",
    "Tailwind",
    "TypeScript",
    "Redux-Saga",
  ];

  const experiences = [
    {
      title: "Senior Software Developer - Lead",
      company: "Mequals Technologies",
      location: "Coimbatore",
      period: "07/2022 - 08/2025",
      description:
        "A company specializing in software development across various platforms",
      achievements: [
        "Led team in managing client handling and product development for Mi Trip",
        "Developed CRM & HRMS website with React.js, Node.js, and MongoDB",
        "Created functional components for Ecommerce website using Next.js-TypeScript",
        "Built billing website for organizations with React.js",
        "Handled API integrations using Redux-Saga and maintained global state",
        "Created common components based on client requirements",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Zylen Solutions Private Limited",
      location: "Chennai",
      period: "04/2022 - 06/2022",
      description:
        "A technology solutions company focusing on web application development",
      achievements: [
        "Collaborated as React developer for Prop44.com and Pinkanee.com",
        "Handled client requests following Agile SCRUM model with JIRA",
        "Developed functional web components for Prop44.com Admin Dashboard",
        "Managed API consumption using Redux and maintained global state",
        "Developed common components for search, filter, view, and booking functionalities",
      ],
    },
    {
      title: "Web Developer",
      company: "Zylen Solutions Private Limited",
      location: "Chennai",
      period: "04/2021 - 03/2022",
      achievements: [
        "Led development team to deliver pixel-perfect web applications",
        "Designed user interfaces using Figma",
        "Developed both frontend web components and backend APIs",
        "Handled authentication using JWT",
        "Created models and schemas using Mongoose for MongoDB",
      ],
    },
    {
      title: "Freelance Web Developer",
      company: "Freelancer",
      location: "Chennai",
      period: "12/2019 - 03/2021",
      achievements: [
        "Responsible for front-end development and maintenance of company websites",
        "Designed, developed, and tested responsive websites meeting accessibility and web standards",
        "Worked on creating reusable components",
      ],
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              LJ
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["About", "Experience", "Skills", "Education", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-4 py-4 space-y-3">
              {["About", "Experience", "Skills", "Education", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left hover:text-cyan-400 transition-colors py-2"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Lokesh Jeevarathinam
            </h1>
            <p className="text-2xl sm:text-3xl text-slate-300 mb-6">
              Senior Software Developer
            </p>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-8">
              5.8+ years of experience in front-end and full-stack development,
              specializing in the MERN stack. Excelling in creating responsive
              web applications, handling product development and team
              leadership.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="mailto:lokeshjk.mit@gmail.com"
                className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-lg transition-colors"
              >
                <Mail size={20} />
                Get in Touch
              </a>
              <button
                onClick={() => scrollToSection("experience")}
                className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg transition-colors"
              >
                View My Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-700/50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                Professional Summary
              </h3>
              <p className="text-slate-300 leading-relaxed">
                I am a Senior Software Developer with extensive experience in
                building scalable web applications using the MERN stack. My
                expertise spans across various frameworks including React.js,
                Next.js, Node.js, and MongoDB, with a strong ability to deliver
                high-quality software solutions.
              </p>
            </div>
            <div className="bg-slate-700/50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                What I Do
              </h3>
              <ul className="text-slate-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span>Full-stack web application development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span>Team leadership and project management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span>UI/UX design and implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span>API development and integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-cyan-400 mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-slate-300">{exp.company}</p>
                    {exp.description && (
                      <p className="text-sm text-slate-400 mt-1">
                        {exp.description}
                      </p>
                    )}
                  </div>
                  <div className="mt-2 md:mt-0 text-slate-400">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="text-sm mt-1">{exp.period}</div>
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-slate-300"
                    >
                      <span className="text-cyan-400 mt-1 flex-shrink-0">
                        ▹
                      </span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Skills & Technologies
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-700 hover:bg-cyan-600 px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              href="https://maps.app.goo.gl/QJnJDV4XhCHCffdK7"
            >
              <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
                <h3 className="text-2xl font-semibold text-cyan-400 mb-2">
                  B.E. (ECE)
                </h3>
                <p className="text-xl text-slate-300 mb-2">
                  Jeppair Maamallan Institute of Technology
                </p>
                <p className="text-slate-400">08/2012 - 05/2016</p>
              </div>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              href="https://maps.app.goo.gl/bV6EiCGanUMPzidF9"
            >
              <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
                <h3 className="text-2xl font-semibold text-cyan-400 mb-2">
                  HSC
                </h3>
                <p className="text-xl text-slate-300 mb-2">
                  Anderson Matriculation Higher Secondary School
                </p>
                <p className="text-slate-400">01/2011 - 05/2012</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            I'm currently available for freelance work and full-time
            opportunities. If you have a project in mind or just want to chat,
            feel free to reach out!
          </p>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <a
              href="mailto:lokeshjk.mit@gmail.com"
              className="bg-slate-700 hover:bg-cyan-600 p-6 rounded-xl transition-colors flex flex-col items-center gap-3"
            >
              <Mail size={32} />
              <div className="text-sm">lokeshjk.mit@gmail.com</div>
            </a>
            <a
              href="tel:+918056746202"
              className="bg-slate-700 hover:bg-cyan-600 p-6 rounded-xl transition-colors flex flex-col items-center gap-3"
            >
              <Phone size={32} />
              <div className="text-sm">+91 805 674 6202</div>
            </a>
            <a
              href="https://www.google.com/maps/place/Kanchipuram,+Tamil+Nadu"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-slate-700 p-6 rounded-xl flex flex-col items-center gap-3 hover:bg-slate-600 transition-colors cursor-pointer">
                <MapPin size={32} />
                <div className="text-sm">Kanchipuram, Tamil Nadu</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>&copy; 2025 lokeshjk.com. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
