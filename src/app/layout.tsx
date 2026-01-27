import type { Metadata } from 'next';
import { Outfit, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Frida | Full Stack Developer',
  description:
    'Full stack developer portfolio showcasing web development, AI applications, and cloud solutions.',
  keywords: ['Full Stack Developer', 'React', 'Go', 'Python', 'AI', 'Portfolio'],
  authors: [{ name: 'Frida' }],
  openGraph: {
    title: 'Frida | Full Stack Developer',
    description: 'Full stack developer portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
