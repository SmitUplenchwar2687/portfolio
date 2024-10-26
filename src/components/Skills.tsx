export default function Skills() {
    const skills = [
      { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
      { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
      { category: "Tools", items: ["Git", "Docker", "AWS", "Figma"] },
      { category: "Soft Skills", items: ["Problem Solving", "Communication", "Team Leadership", "Agile"] }
    ];
  
    return (
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="p-6 rounded-xl bg-gray-50">
                <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }