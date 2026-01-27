export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/5 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-slate-500">
          Built with <span className="text-rose-500">❤</span> and code
        </p>
        <p className="text-slate-600 text-sm mt-2">
          © {new Date().getFullYear()} Frida. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
