import { useState, useEffect } from 'react';

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      // Mostra a navbar se estiver no topo da página
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Esconde ao scrollar para baixo, mostra ao scrollar para cima
      else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-1 left-1 right-1 bg-gray-900 px-6 py-4 flex items-center justify-between rounded-2xl z-50 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <a href="/" className="sm:text-xl font-bold text-white">
        Racismo Além do Óbvio
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