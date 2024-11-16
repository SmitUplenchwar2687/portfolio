export default function Projects() {
    const projects = [
      {
        title: "E-commerce Platform",
        description: "A full-featured online store with cart functionality and payment integration.",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80",
        tags: ["React", "Node.js", "MongoDB"]
      },
      {
        title: "Task Management App",
        description: "A collaborative task management tool with real-time updates.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
        tags: ["TypeScript", "React", "Firebase"]
      },
      {
        title: "Portfolio Website",
        description: "A modern portfolio website with smooth animations and responsive design.",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80",
        tags: ["React", "Tailwind CSS", "Vite"]
      }
    ];
  
    return (
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-video">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }