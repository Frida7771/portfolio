interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: 'Software Engineer Intern',
    company: 'China Mobile',
    period: 'Jan 2024 - Aug 2024',
    highlights: [
      'Built CMS system using Java Spring Boot and Vue.js, improving content publishing efficiency by 35%.',
      'Developed RA pipeline using Jiutian LLM and CMCloud, handling 30K+ daily consultation requests.',
      'Optimized retrieval workflows, reducing fallback responses by 20%.',
    ],
  },
  {
    title: 'Data Engineer Intern',
    company: 'BioMérieux',
    period: 'Feb 2023 - Apr 2023',
    highlights: [
      'Developed data processing pipelines using Python and SQL, processing 300,000+ diagnostic product sales data.',
      'Reduced data discrepancies by 15% and supported downstream reporting for 1,400+ healthcare clients.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 flex items-center gap-4">
          <span className="font-mono text-cyan-400 font-normal">//</span>
          Experience
        </h2>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-violet-500 opacity-30" />

          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12 pb-12 last:pb-0 group">
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-2 -translate-x-1/2 top-1 w-4 h-4 bg-slate-900 border-2 border-cyan-400 rounded-full group-hover:bg-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-400/50 transition-all" />

              {/* Content */}
              <div className="bg-slate-900/60 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-white/5 group-hover:border-cyan-400/20 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <span className="text-cyan-400">{exp.company}</span>
                </div>
                <span className="inline-block font-mono text-sm text-slate-500 mb-4">
                  {exp.period}
                </span>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-slate-400 text-sm pl-5 relative before:content-['▹'] before:absolute before:left-0 before:text-cyan-400"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
