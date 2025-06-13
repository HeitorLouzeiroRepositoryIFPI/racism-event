import { useState, useEffect } from "react";
import "./styles.css";

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Seções de navegação
  const navItems = [
    { label: "Tipos de Racismo", href: "#explorar", icon: "category" },
    { label: "Estatísticas", href: "#estatisticas", icon: "chart" },
    { label: "Notícias", href: "#noticias", icon: "news" },
  ];

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Define se o scroll saiu do topo
      setIsScrolled(currentScrollY > 20);

      // Mostra a navbar se estiver no topo da página
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Esconde ao scrollar para baixo, mostra ao scrollar para cima
      else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
        if (isMobileMenuOpen) setIsMobileMenuOpen(false); // Fecha o menu mobile ao rolar
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);

      // Detecta a seção ativa com base na posição do scroll
      detectActiveSection();
    };

    // Detecta qual seção está atualmente visível
    const detectActiveSection = () => {
      const sections = ["explorar", "estatisticas", "noticias"];
      let current = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Se a seção está visível na tela
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", controlNavbar);

    // Detecta a seção inicial
    detectActiveSection();

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY, isMobileMenuOpen]);

  // Função para fechar o menu mobile ao clicar em um link
  const handleNavItemClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  // Retorna o ícone SVG correspondente
  const getNavIcon = (iconName: string) => {
    switch (iconName) {
      case "category":
        return (
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
        );
      case "news":
        return (
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            />
          </svg>
        );
      case "chart":
        return (
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 px-4 sm:px-6 py-3 flex items-center justify-between z-50 transition-all duration-300 navbar-shadow
          ${
            isScrolled
              ? "navbar-glass"
              : "bg-gradient-to-r from-gray-900 to-gray-800"
          } 
          ${isVisible ? "translate-y-0" : "-translate-y-full"}
          ${!isVisible && isMobileMenuOpen ? "translate-y-0" : ""}
          ${isScrolled ? "md:py-2" : "md:py-4"}
        `}
      >
        <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
          {/* Logo e nome do site */}
          <a href="/" className="flex items-center gap-2 group">
            <div
              className={`w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm transition-all duration-300
              ${isScrolled ? "sm:w-7 sm:h-7" : ""}
            `}
            >
              RAO
            </div>
            <div>
              <span className="sm:text-xl font-bold text-white hidden sm:block group-hover:text-orange-400 transition-colors site-title-lg">
                Racismo Além do Óbvio
              </span>
              <span className="text-sm font-bold text-white sm:hidden site-title-sm">
                RAO
              </span>
            </div>
          </a>

          {/* Links de navegação - Versão desktop */}
          <div className="hidden md:flex items-center space-x-6 font-medium">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-gray-300 hover:text-white transition-colors relative nav-link flex items-center
                  ${
                    activeSection === item.href.substring(1)
                      ? "nav-link-active"
                      : ""
                  }
                `}
              >
                {getNavIcon(item.icon)}
                {item.label}
              </a>
            ))}

            {/* Botão de ação */}
            <div className="ml-4">
              <a
                href="#denunciar"
                className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white py-2 px-4 rounded-lg transition-all duration-300 font-medium text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Denunciar Racismo
              </a>
            </div>
          </div>

          {/* Botão do menu mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white focus:outline-none p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <div className="fixed top-16 left-4 right-4 bg-gray-800/95 backdrop-blur-md rounded-xl shadow-2xl z-40 p-4 border border-gray-700/50 md:hidden mobile-menu-enter">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-white py-3 px-4 hover:bg-gray-700 rounded-lg transition-colors font-medium flex items-center
                  ${
                    activeSection === item.href.substring(1)
                      ? "border-l-4 border-orange-500 bg-gray-700/50"
                      : ""
                  }
                `}
                onClick={handleNavItemClick}
              >
                {getNavIcon(item.icon)}
                {item.label}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            ))}
            <a
              href="#denunciar"
              className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white py-3 px-4 rounded-lg transition-all font-medium text-center mt-2 flex items-center justify-center"
              onClick={handleNavItemClick}
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              Denunciar Racismo
            </a>
          </div>
        </div>
      )}
    </>
  );
}
