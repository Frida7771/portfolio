const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Vue', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Backend',
    skills: ['Go', 'Python', 'Java', 'Node.js'],
  },
  {
    title: 'Database & Tools',
    skills: ['MySQL', 'MongoDB', 'Redis', 'Docker'],
  },
  {
    title: 'AI & Cloud',
    skills: ['OpenAI', 'RAG', 'AWS', 'K8s'],
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 flex items-center gap-4">
          <span className="font-mono text-cyan-400 font-normal">//</span>
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Text */}
          <div className="space-y-6 text-slate-400 leading-relaxed">
            <p className="text-xl text-white">
              I&apos;m a passionate{' '}
              <span className="text-cyan-400">Full Stack Developer</span> with
              extensive experience in web application development. I love turning
              ideas into reality, building digital products that are both
              beautiful and functional.
            </p>
            <p>
              My tech stack covers the complete development pipeline from frontend
              to backend — from modern frontend frameworks like React and Vue, to
              backend languages like Go, Python, and Java, to cloud deployment and
              AI integration.
            </p>
            <p>
              In my free time, I enjoy exploring new technologies, solving
              LeetCode problems to sharpen my algorithm skills, and contributing
              to open source projects. I believe continuous learning is key to
              staying technically sharp.
            </p>
          </div>

          {/* Skills */}
          <div className="bg-slate-900/60 backdrop-blur-sm p-8 rounded-2xl border border-white/5">
            <h3 className="text-xl font-semibold mb-6">Tech Stack</h3>
            <div className="grid grid-cols-2 gap-6">
              {skillCategories.map((category) => (
                <div key={category.title}>
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 mb-3">
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-slate-800 text-slate-300 text-sm rounded-md border border-white/5 hover:border-cyan-400/50 hover:text-cyan-400 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
