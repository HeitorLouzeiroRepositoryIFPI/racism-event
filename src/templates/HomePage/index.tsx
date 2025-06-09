export function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Bem-vindo ao Protótipo do Site</h1>
        <p className="text-lg text-gray-600 mb-4">Este é um protótipo simples de um site.</p>
        <a
            href="/about"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
            Saiba mais
        </a>
        </div>
    );
}