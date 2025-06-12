import { useState } from "react";
import typesData from "../../../data/racism/types.json";

interface RacismType {
  tipo: string;
  definicao: string;
  contexto_historico?: string;
  enfrentamento?: string[];
  manifestacoes_contemporaneas?: string[] | Record<string, string[]>;
}

export function RacismTypesCarousel() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const types = typesData.tipos_de_racismo as RacismType[];

  // Encontra o tipo selecionado ou usa o primeiro como padrão
  const currentType = selectedType
    ? types.find((t) => t.tipo === selectedType)
    : types[0];

  return (
    <div
      className="w-full max-w-6xl mx-auto"
      role="region"
      aria-label="Tipos de Racismo"
    >
      {/* Menu de navegação por tipo */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center" role="tablist">
        {types.map((type) => (
          <button
            key={type.tipo}
            onClick={() => setSelectedType(type.tipo)}
            className={`px-4 py-2 rounded-full text-sm sm:text-base transition-colors focus-visible-outline ${
              currentType?.tipo === type.tipo
                ? "bg-orange-600 text-white font-medium shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            role="tab"
            aria-selected={currentType?.tipo === type.tipo}
            aria-controls={`racism-type-panel-${type.tipo
              .replace(/\s+/g, "-")
              .toLowerCase()}`}
            id={`racism-type-tab-${type.tipo
              .replace(/\s+/g, "-")
              .toLowerCase()}`}
          >
            {type.tipo.length > 20
              ? `${type.tipo.substring(0, 20)}...`
              : type.tipo}
          </button>
        ))}
      </div>

      {/* Painel de conteúdo */}
      {currentType && (
        <div
          className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500"
          role="tabpanel"
          id={`racism-type-panel-${currentType.tipo
            .replace(/\s+/g, "-")
            .toLowerCase()}`}
          aria-labelledby={`racism-type-tab-${currentType.tipo
            .replace(/\s+/g, "-")
            .toLowerCase()}`}
        >
          <div className="bg-orange-600 px-6 py-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {currentType.tipo}
            </h2>
          </div>

          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                {currentType.enfrentamento && (
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2 text-orange-800">
                      Como Enfrentar
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-orange-800">
                      {currentType.enfrentamento.map((item, idx) => (
                        <li key={idx} className="text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="md:w-2/3">
                <p className="text-gray-800 text-lg mb-6">
                  {currentType.definicao}
                </p>

                {currentType.contexto_historico && (
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 text-xl mb-2">
                      Contexto Histórico
                    </h3>
                    <p className="text-gray-700">
                      {currentType.contexto_historico}
                    </p>
                  </div>
                )}

                {/* Manifestações */}
                {currentType.manifestacoes_contemporaneas && (
                  <div>
                    <h3 className="font-semibold text-gray-900 text-xl mb-2">
                      Manifestações Contemporâneas
                    </h3>

                    {/* Renderização adaptativa baseada no tipo de dados */}
                    {Array.isArray(currentType.manifestacoes_contemporaneas) ? (
                      <ul className="list-disc list-inside space-y-1">
                        {currentType.manifestacoes_contemporaneas.map(
                          (item, idx) => (
                            <li key={idx} className="text-gray-700">
                              {item}
                            </li>
                          )
                        )}
                      </ul>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {Object.entries(
                          currentType.manifestacoes_contemporaneas
                        ).map(([area, exemplos]) => (
                          <div key={area} className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-medium text-gray-900 mb-2 capitalize">
                              {area.replace(/_/g, " ")}
                            </h4>
                            <ul className="list-disc list-inside space-y-1">
                              {Array.isArray(exemplos) &&
                                exemplos.map((exemplo, idx) => (
                                  <li
                                    key={idx}
                                    className="text-gray-700 text-sm"
                                  >
                                    {exemplo}
                                  </li>
                                ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
