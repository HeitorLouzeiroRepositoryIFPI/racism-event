export function Report() {
  return (
    <div
      id="denunciar"
      className="bg-gray-50 p-8 sm:p-12 rounded-3xl mt-16 shadow-md border border-gray-100"
    >
      <div className="text-center mb-10">
        <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Denunciar <span className="text-orange-600">Racismo</span>
        </h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          O racismo é crime no Brasil. Saiba como denunciar casos de
          discriminação racial.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-orange-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <h4 className="text-xl font-bold mb-3">Disque 100</h4>
          <p className="text-gray-600 mb-4">
            Canal gratuito para denúncias de violações aos direitos humanos,
            incluindo racismo.
          </p>
          <p className="font-bold text-orange-600">
            Ligação gratuita, 24 horas
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-orange-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
              />
            </svg>
          </div>
          <h4 className="text-xl font-bold mb-3">Delegacia Especializada</h4>
          <p className="text-gray-600 mb-4">
            Procure a delegacia mais próxima para registrar um boletim de
            ocorrência.
          </p>
          <p className="font-bold text-orange-600">Lei nº 7.716/1989</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-orange-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
              />
            </svg>
          </div>
          <h4 className="text-xl font-bold mb-3">Ministério Público</h4>
          <p className="text-gray-600 mb-4">
            Entre em contato com o MP do seu estado para formalizar uma
            denúncia.
          </p>
          <p className="font-bold text-orange-600">new.safernet.org.br/denuncie</p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-lg text-gray-500 mb-6">
          Denunciar é um ato de cidadania que contribui para uma sociedade mais
          justa e igualitária.
        </p>
        <a
          href="https://new.safernet.org.br/denuncie"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          Portal de Denúncias Online
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
