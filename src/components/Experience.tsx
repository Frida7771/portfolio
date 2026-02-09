import { FiCalendar, FiMapPin, FiBriefcase } from 'react-icons/fi';

interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  tech: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: 'China Mobile',
    role: 'Software Engineer Intern',
    location: 'Jinan, China',
    period: 'Jan 2024 - Aug 2024',
    description:
      'Designed and scaled an LLM-powered telecom customer service system with RAG, function calling, and distributed session management, handling 5,000+ RPM and increasing intelligent routing accuracy from 30% to 45%.',
    tech: ['LLM', 'RAG', 'Distributed Systems', 'Function Calling'],
  },
  {
    company: 'BioMérieux',
    role: 'Data Engineer Intern',
    location: 'Shanghai, China',
    period: 'Feb 2023 - Apr 2023',
    description:
      'Built a production-grade ETL pipeline using Apache Airflow and PostgreSQL to process 300K+ daily sales records, improving data reliability from 88% to 97% and enabling BI reporting for 1,400+ healthcare clients.',
    tech: ['Apache Airflow', 'PostgreSQL', 'ETL', 'BI Reporting'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-16 flex items-center gap-4">
          <span className="font-mono text-cyan-400 font-normal">//</span>
          Experience
        </h2>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className="group relative bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-cyan-400/30 transition-all duration-300 overflow-hidden"
            >
              {/* Accent Line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-violet-500" />

              <div className="p-6 md:p-8 pl-8 md:pl-10">
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  {/* Company & Role */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-cyan-400 text-sm">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold group-hover:text-cyan-400 transition-colors">
                        {exp.company}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <FiBriefcase className="w-4 h-4 text-violet-400" />
                      <span className="font-medium">{exp.role}</span>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap md:flex-col md:items-end gap-2 text-sm text-slate-400">
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-800 rounded-full">
                      <FiCalendar className="w-3.5 h-3.5 text-cyan-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-800 rounded-full">
                      <FiMapPin className="w-3.5 h-3.5 text-violet-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed mb-5">
                  {exp.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-slate-800 text-cyan-400 text-sm rounded-md border border-cyan-400/20"
                    >
                      {t}
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
