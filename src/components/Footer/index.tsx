export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Combate ao Racismo</h3>
            <p className="text-gray-300 mb-4">
              Um projeto educativo para conscientização e combate ao racismo em
              todas as suas formas.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Importantes</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://falabr.cgu.gov.br/web/home"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                >
                  Denunciar Racismo
                </a>
              </li>
                <li>
                <a
                  href="https://www.gov.br/ouvidorias/pt-br/ouvidorias/eventos/cursos_educacao_etnico_racial/formacao_educacao-etnico-racial-1.pdf"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Materiais Educativos
                </a>
                </li>
              <li>
                <a
                  href="https://www.planalto.gov.br/ccivil_03/leis/l7716.htm"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                >
                  Legislação
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center text-gray-400 mb-4">
            <p className="text-sm font-semibold mb-2">Desenvolvido por:</p>
            <div className="flex justify-center items-center gap-4 text-gray-300">
              <a 
                href="https://www.linkedin.com/in/daniel-oliveirac/" 
                className="hover:text-orange-500 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Daniel Oliveira
              </a>
              <span>•</span>
              <a 
                href="https://www.linkedin.com/in/heitor-louzeiro/" 
                className="hover:text-orange-500 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Heitor Louzeiro
              </a>
              <span>•</span>
              <a 
                href="https://www.linkedin.com/in/jonathan-vogado/" 
                className="hover:text-orange-500 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jonathan Vogado
              </a>
              <span>•</span>
              <span>Turma ADS</span>
            </div>
          </div>
          <div className="text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} Combate ao Racismo. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
