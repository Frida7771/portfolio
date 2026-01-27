'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const titles = [
  'Full Stack Developer',
  'Problem Solver',
  'Tech Enthusiast',
  'Open Source Contributor',
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex < currentTitle.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentTitle.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
    } else if (!isDeleting && charIndex === currentTitle.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentTitle.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTitleIndex((titleIndex + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 211, 238, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 211, 238, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            maskImage:
              'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 70%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 70%)',
          }}
        />
        {/* Glows */}
        <div className="absolute -top-48 -right-24 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-36 -left-24 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="text-center px-6 animate-fade-in">
        <p className="font-mono text-cyan-400 text-lg mb-3 tracking-wide">
          Hi, I&apos;m
        </p>
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent tracking-tight mb-4">
          Frida
        </h1>
        <div className="flex items-center justify-center gap-1 mb-6">
          <span className="font-mono text-xl md:text-2xl text-slate-400">
            {displayText}
          </span>
          <span className="w-0.5 h-6 bg-cyan-400 animate-blink" />
        </div>
        <p className="text-lg text-slate-400 max-w-md mx-auto mb-10 leading-relaxed">
          Passionate about building elegant and efficient digital products.
          <br />
          Focused on Web Development, AI Applications & Cloud Solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-900 font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-0.5 transition-all"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 border border-white/15 text-white font-medium rounded-xl hover:bg-white/5 hover:border-white/25 transition-all"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-slate-500 text-sm animate-fade-in animation-delay-1000">
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-cyan-400 rounded-full animate-scroll" />
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
}
