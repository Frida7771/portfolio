'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const titles = [
  'Software Developer',
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
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-white">
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 animate-fade-in">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left - Text */}
          <div className="flex-1 text-center lg:text-left">
            <p className="font-mono text-slate-500 text-lg mb-3 tracking-wide">
              Hi, I&apos;m
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 tracking-tight mb-4">
              Bo (Frida)
            </h1>
            <div className="flex items-center justify-center lg:justify-start gap-1 mb-6">
              <span className="font-mono text-xl md:text-2xl text-slate-500">
                {displayText}
              </span>
              <span className="w-0.5 h-6 bg-slate-800 animate-blink" />
            </div>
            <p className="text-lg text-slate-600 max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed">
              Passionate about building elegant and efficient digital products.
              <br />
              Focused on Full Stack Development, AI Applications & Cloud Solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#projects"
                className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl hover:bg-slate-700 hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                View Projects
              </Link>
              <Link
                href="#contact"
                className="px-8 py-4 border border-slate-300 text-slate-700 font-medium rounded-xl hover:bg-slate-50 hover:border-slate-400 transition-all"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Right - Profile Photo */}
          <div className="flex-shrink-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="/Frida.jpg"
                  alt="Bo (Frida)"
                  fill
                  className="object-cover object-center scale-125"
                  style={{ objectPosition: 'center 30%' }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
