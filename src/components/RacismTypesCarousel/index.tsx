import { useState, useEffect } from "react";
import typesData from "../../../data/racism/types.json";
import "./styles.css";

interface RacismType {
  tipo: string;
  definicao: string;
  contexto_historico?: string;
  enfrentamento?: string[];
  manifestacoes_contemporaneas?: string[] | Record<string, string[]>;
}

export function RacismTypesCarousel() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"detalhes" | "enfrentamento">(
    "detalhes"
  );
  const types = typesData.tipos_de_racismo as RacismType[];

  // Encontra o tipo selecionado ou usa o primeiro como padrão
  const currentType = selectedType
    ? types.find((t) => t.tipo === selectedType)
    : types[0];

  // Resetar a aba para "detalhes" quando mudar de tipo de racismo
  useEffect(() => {
    setActiveTab("detalhes");
  }, [selectedType]);

  // Gera um ID baseado no texto para elementos do DOM
  const generateId = (text: string) => text.replace(/\s+/g, "-").toLowerCase();

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
            className={`px-4 py-2 rounded-full text-sm sm:text-base transition-colors focus-visible-outline racism-type-list-item ${
              currentType?.tipo === type.tipo
                ? "bg-orange-600 text-white font-medium shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            role="tab"
            aria-selected={currentType?.tipo === type.tipo}
            aria-controls={`racism-type-panel-${generateId(type.tipo)}`}
            id={`racism-type-tab-${generateId(type.tipo)}`}
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
          className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 animate-fadeIn"
          role="tabpanel"
          id={`racism-type-panel-${generateId(currentType.tipo)}`}
          aria-labelledby={`racism-type-tab-${generateId(currentType.tipo)}`}
        >
          <div className="bg-orange-600 px-6 py-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {currentType.tipo}
            </h2>
          </div>

          <div className="p-4 md:p-6">
            {/* Definição principal - sempre visível */}
            <div className="mb-6">
              <p className="text-gray-800 text-base font-semibold md:text-lg">
                {currentType.definicao}
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              {/* Abas para navegação entre os diferentes tipos de conteúdo */}
              <div className="flex flex-wrap gap-2 border-b border-gray-200">
                <button
                  className={`px-3 py-2 text-sm font-medium tab-button ${
                    activeTab === "detalhes"
                      ? "text-orange-600 border-b-2 border-orange-600 active"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab("detalhes")}
                  role="tab"
                  aria-selected={activeTab === "detalhes"}
                  aria-controls={`tab-detalhes-${generateId(currentType.tipo)}`}
                >
                  Detalhes
                </button>
                {currentType.enfrentamento && (
                  <button
                    className={`px-3 py-2 text-sm font-medium tab-button ${
                      activeTab === "enfrentamento"
                        ? "text-orange-600 border-b-2 border-orange-600 active"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                    onClick={() => setActiveTab("enfrentamento")}
                    role="tab"
                    aria-selected={activeTab === "enfrentamento"}
                    aria-controls={`tab-enfrentamento-${generateId(
                      currentType.tipo
                    )}`}
                  >
                    Como Enfrentar
                  </button>
                )}
              </div>

              {/* Conteúdo da aba Detalhes */}
              <div
                id={`tab-detalhes-${generateId(currentType.tipo)}`}
                className={`${
                  activeTab === "detalhes" ? "block animate-fadeIn" : "hidden"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {/* Bloco do Contexto Histórico - 1 coluna na versão mobile, 1 em desktop */}
                  {currentType.contexto_historico && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 text-base mb-2">
                        Contexto Histórico
                      </h3>
                      <p className="text-gray-700">
                        {currentType.contexto_historico}
                      </p>
                    </div>
                  )}

                  {/* Bloco de Manifestações - 1 coluna na versão mobile, 2 em desktop */}
                  {currentType.manifestacoes_contemporaneas && (
                    <div className="lg:col-span-2">
                      <h3 className="font-semibold text-gray-900 text-base mb-2">
                        Manifestações Contemporâneas
                      </h3>

                      {/* Renderização adaptativa baseada no tipo de dados */}
                      {Array.isArray(
                        currentType.manifestacoes_contemporaneas
                      ) ? (
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {currentType.manifestacoes_contemporaneas.map(
                            (item, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-orange-600 mr-2 shrink-0">
                                  •
                                </span>
                                <span className="text-gray-700">{item}</span>
                              </li>
                            )
                          )}
                        </ul>
                      ) : (
                        <div className="space-y-4">
                          {Object.entries(
                            currentType.manifestacoes_contemporaneas
                          ).map(([area, exemplos]) => (
                            <div
                              key={area}
                              className="bg-gray-50 p-3 rounded-lg content-card"
                            >
                              <h4 className="font-medium text-gray-900 text-sm mb-2 capitalize">
                                {area.replace(/_/g, " ")}
                              </h4>
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                                {Array.isArray(exemplos) &&
                                  exemplos.map((exemplo, idx) => (
                                    <li
                                      key={idx}
                                      className="flex items-start animate-slideIn"
                                      style={{
                                        animationDelay: `${idx * 0.05}s`,
                                      }}
                                    >
                                      <span className="text-orange-600 mr-2 shrink-0">
                                        •
                                      </span>
                                      <span className="text-gray-700 text-sm">
                                        {exemplo}
                                      </span>
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

              {/* Conteúdo da aba Enfrentamento */}
              {currentType.enfrentamento && (
                <div
                  id={`tab-enfrentamento-${generateId(currentType.tipo)}`}
                  className={`${
                    activeTab === "enfrentamento"
                      ? "block animate-fadeIn"
                      : "hidden"
                  }`}
                >
                  <div className="bg-green-50 p-4 rounded-lg content-card">
                    <h3 className="font-semibold text-green-800 text-lg mb-3">
                      Estratégias para Enfrentamento do {currentType.tipo}
                    </h3>
                    <p className="text-green-700 mb-4">
                      Selecione uma das estratégias abaixo para combater esse
                      tipo de racismo:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {currentType.enfrentamento.map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-white p-3 rounded-lg shadow-sm enfrentamento-item"
                          style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                          <div className="flex items-start">
                            <span className="bg-green-600 text-white w-6 h-6 flex items-center justify-center rounded-full mr-3 shrink-0">
                              {idx + 1}
                            </span>
                            <p className="text-green-900">{item}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
