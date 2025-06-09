export function AboutPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Sobre Nós</h1>
            <p className="text-lg text-gray-600 mb-4">
                Esta é a página de sobre do nosso site. Aqui você pode encontrar informações sobre nossa missão, visão e valores.
            </p>
            <a
                href="/"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
                Voltar para a Home
            </a>
        </div>
    );
}