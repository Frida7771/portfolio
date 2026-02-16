const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Vue', 'TypeScript', 'JavaScript'],
  },
  {
    title: 'Backend',
    skills: ['Go', 'Python', 'Java', 'Node.js'],
  },
  {
    title: 'Database & Tools',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Elasticsearch'],
  },
  {
    title: 'AI & Cloud',
    skills: ['OpenAI', 'RAG', 'AWS', 'Docker'],
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 flex items-center gap-4 text-slate-800">
          <span className="font-mono text-slate-400 font-normal">//</span>
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Text */}
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p className="text-xl text-slate-800">
              I&apos;m a passionate{' '}
              <span className="font-semibold">Software Developer</span> I love turning
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
              In my free time, I enjoy exploring new technologies and solving LeetCode problems. I also enjoy playing the piano and running, which help me stay disciplined and focused.
            </p>
          </div>

          {/* Skills */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-slate-800">Tech Stack</h3>
            <div className="grid grid-cols-2 gap-6">
              {skillCategories.map((category) => (
                <div key={category.title}>
                  <h4 className="text-xs uppercase tracking-wider text-slate-400 mb-3">
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-slate-100 text-slate-600 text-sm rounded-md border border-slate-200 hover:border-slate-400 hover:text-slate-800 transition-colors cursor-default"
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
