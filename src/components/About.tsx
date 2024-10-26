export default function About() {
    return (
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-600">
                I'm a passionate Full Stack Developer with 5 years of experience building web applications.
                I specialize in creating beautiful, functional, and user-friendly websites that solve real-world problems.
              </p>
              <p className="text-lg text-gray-600">
                My journey in web development started when I built my first website in college.
                Since then, I've worked with various technologies and frameworks, always staying
                up-to-date with the latest industry trends.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2">5+</h3>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2">50+</h3>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }