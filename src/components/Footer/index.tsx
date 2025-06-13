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
                  href="#"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                >
                  Denunciar Racismo
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                >
                  Materiais Educativos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                >
                  Legislação
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Combate ao Racismo. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
