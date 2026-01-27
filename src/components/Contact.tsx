import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

interface ContactItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const contacts: ContactItem[] = [
  {
    icon: <FiMail className="w-6 h-6" />,
    label: 'Email',
    href: 'mailto:frida16571@gmail.com',
  },
  {
    icon: <FiGithub className="w-6 h-6" />,
    label: 'GitHub',
    href: 'https://github.com/frida7771',
  },
  {
    icon: <FiLinkedin className="w-6 h-6" />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/frida-li',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 flex items-center gap-4">
          <span className="font-mono text-cyan-400 font-normal">//</span>
          Contact
        </h2>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl text-slate-400 mb-12 leading-relaxed">
            Have a question, collaboration opportunity, or just want to say hi?
            <br />
            Feel free to reach out!
          </p>

          <div className="flex justify-center gap-6 mb-12">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group bg-slate-800/50 backdrop-blur-sm px-8 py-6 rounded-xl border border-white/5 hover:border-cyan-400/50 hover:-translate-y-1 transition-all flex flex-col items-center gap-3"
              >
                <div className="text-cyan-400 group-hover:scale-110 transition-transform">
                  {contact.icon}
                </div>
                <span className="text-sm font-medium text-slate-300">
                  {contact.label}
                </span>
              </a>
            ))}
          </div>

          <a
            href="mailto:frida16571@gmail.com"
            className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-900 font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-0.5 transition-all"
          >
            <FiMail className="w-5 h-5" />
            Send Email
          </a>
        </div>
      </div>
    </section>
  );
}
