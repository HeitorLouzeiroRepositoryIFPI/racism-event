export function Navbar() {
  return (
    <nav className="bg-gray-900 px-6 py-4 m-1 flex items-center justify-between rounded-2xl">
      <a href="/" className="text-xl font-bold text-white">
        Protótipo do Site
      </a>
      <div className="space-x-6 font-bold">
        <a href="/about" className="text-gray-300 hover:text-white transition-colors">
          Sobre
        </a>
        <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
          Contato
        </a>
      </div>
    </nav>
  );
}
