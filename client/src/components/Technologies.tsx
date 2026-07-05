export default function Technologies() {
  const technologies = [
    { name: "HTML5", category: "Frontend" },
    { name: "CSS3", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "Vue.js", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Ruby on Rails", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "PHP", category: "Backend" },
    { name: "MySQL", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "Docker", category: "DevOps" },
    { name: "Git", category: "DevOps" },
    { name: "REST API", category: "Integration" },
  ];

  return (
    <section id="technologies" className="py-20 bg-card/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -left-48 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl text-white mb-4">
            Tecnologias
          </h2>
          <p className="text-lg text-muted font-body max-w-2xl mx-auto">
            Utilizamos as melhores ferramentas e tecnologias do mercado
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="glass p-4 flex items-center justify-center text-center hover:bg-white/15 hover:border-white/30 transition-all duration-300 group cursor-pointer min-h-24"
            >
              <div className="flex flex-col gap-1">
                <p className="font-heading text-white text-sm group-hover:text-purple-400 transition-colors">
                  {tech.name}
                </p>
                <p className="text-xs text-muted font-body">{tech.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
