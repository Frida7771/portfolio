export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200 text-center bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <p className="text-slate-400 text-sm mt-2">
          © {new Date().getFullYear()} Frida. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
