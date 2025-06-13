import { useState, useEffect } from "react";
import { BarChart } from "../LineChart/BarChart";
import { PieChart } from "../LineChart/PieChart";
import { StatCard } from "../StatCard";
import graficData from "../../../data/grafic/grafic.json";

interface ChartData {
  name: string;
  value: number;
  unidade?: string;
  [key: string]: unknown;
}

export function Charts() {
  const [discriminacaoCorPeleData, setDiscriminacaoCorPeleData] = useState<
    ChartData[]
  >([]);
  const [multiplosPreconceitos, setMultiplosPreconceitos] = useState<
    ChartData[]
  >([]);
  const [desigualdadeSocial, setDesigualdadeSocial] = useState<ChartData[]>([]);

  useEffect(() => {
    // Transform discriminacao_cor_pele data
    const discriminacaoCorPele = graficData.discriminacao_cor_pele.map(
      (item) => ({
        name: item.grupo,
        value: item.valor,
      })
    );

    // Transform multiplos_preconceitos data
    const multiplos = graficData.multiplos_preconceitos.map((item) => ({
      name: item.grupo,
      value: item.valor,
    }));

    // Transform desigualdade_social_adicional data
    const desigualdade = graficData.desigualdade_social_adicional.map(
      (item) => ({
        name: item.descricao,
        value: item.valor,
        unidade: item.unidade,
      })
    );

    setDiscriminacaoCorPeleData(discriminacaoCorPele);
    setMultiplosPreconceitos(multiplos);
    setDesigualdadeSocial(desigualdade);
  }, []);

  // Prepare discriminacao_cotidiana data for comparison chart
  const prepareDiscriminacaoCotidianaData = () => {
    return graficData.discriminacao_cotidiana.map((item) => ({
      name: item.criterio,
      value: 0, // Placeholder value
      pretos: item.pretos,
      pardos: item.pardos,
      brancos: item.brancos,
    }));
  };

  return (
    <div className="space-y-16 py-12">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-block bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Dados sobre Discriminação Racial
          </h2>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Estatísticas que revelam a realidade do racismo estrutural no Brasil
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Stats Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <StatCard
          title="População Preta"
          value="84%"
          subtitle="sofreu discriminação racial"
          icon="P"
          color="red"
        />
        <StatCard
          title="Mulheres Pretas"
          value="72%"
          subtitle="sofrem múltiplos preconceitos"
          icon="MP"
          color="orange"
        />
        <StatCard
          title="Homens Pretos"
          value="62.1%"
          subtitle="sofrem múltiplos preconceitos"
          icon="HP"
          color="blue"
        />
        <StatCard
          title="Risco de Homicídio"
          value="2.7x"
          subtitle="maior para negros"
          icon="⚠"
          color="purple"
        />
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
        {/* Chart Card 1 */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 border border-gray-50">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Discriminação por Cor de Pele
            </h3>
            <p className="text-gray-600">
              Percentual de pessoas que relatam ter sofrido discriminação
            </p>
          </div>
          <BarChart
            data={discriminacaoCorPeleData}
            xDataKey="name"
            bars={[
              {
                dataKey: "value",
                fill: "url(#gradient1)",
                name: "Porcentagem (%)",
              },
            ]}
            height={350}
          />
        </div>

        {/* Chart Card 2 */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 border border-gray-50">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Múltiplos Preconceitos por Grupo
            </h3>
            <p className="text-gray-600">
              Interseccionalidade de gênero e raça
            </p>
          </div>
          <PieChart
            data={multiplosPreconceitos}
            nameKey="name"
            dataKey="value"
            colors={["#1f2937", "#374151", "#6b7280", "#9ca3af"]}
            height={350}
          />
        </div>
      </div>

      {/* Full Width Chart */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-8 border border-gray-100">
        <div className="mb-8 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-3">
            Discriminação Cotidiana por Raça
          </h3>
          <p className="text-gray-600 text-lg">
            Comparação entre pessoas pretas, pardas e brancas
          </p>
        </div>
        <div className="overflow-x-auto">
          <BarChart
            data={prepareDiscriminacaoCotidianaData()}
            xDataKey="name"
            bars={[
              {
                dataKey: "pretos",
                fill: "#1f2937",
                name: "Pessoas Pretas (%)",
              },
              {
                dataKey: "pardos",
                fill: "#d97706",
                name: "Pessoas Pardas (%)",
              },
              {
                dataKey: "brancos",
                fill: "#3b82f6",
                name: "Pessoas Brancas (%)",
              },
            ]}
            height={600}
          />
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Chart Card 3 */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 border border-gray-50">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Indicadores de Desigualdade Social
            </h3>
            <p className="text-gray-600">
              Impactos estruturais do racismo na sociedade
            </p>
          </div>
          <BarChart
            data={desigualdadeSocial.filter((item) => item.unidade === "%")}
            xDataKey="name"
            bars={[
              {
                dataKey: "value",
                fill: "url(#gradient2)",
                name: "Porcentagem (%)",
              },
            ]}
            height={350}
          />
        </div>

        {/* Chart Card 4 */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 border border-gray-50">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Taxas de Desemprego por Raça
            </h3>
            <p className="text-gray-600">Disparidades no mercado de trabalho</p>
          </div>
          <BarChart
            data={desigualdadeSocial.filter((item) =>
              item.name.includes("Taxa de desemprego")
            )}
            xDataKey="name"
            bars={[
              { dataKey: "value", fill: "url(#gradient3)", name: "Taxa (%)" },
            ]}
            height={350}
          />
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-orange-600 to-red-700 rounded-3xl p-12 text-center text-white shadow-2xl">
        <h3 className="text-3xl font-bold mb-4">Juntos Contra o Racismo</h3>
        <p className="text-xl mb-6 opacity-90">
          Estes dados mostram a urgência de combatermos o racismo estrutural em
          nossa sociedade.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-white/20 rounded-lg px-6 py-3">
            <span className="font-semibold">84% pessoas pretas</span>
          </div>
          <div className="bg-white/20 rounded-lg px-6 py-3">
            <span className="font-semibold">2.7x risco de homicídio</span>
          </div>
          <div className="bg-white/20 rounded-lg px-6 py-3">
            <span className="font-semibold">72.9% em favelas</span>
          </div>
        </div>
      </div>

      {/* Seção de Denúncia */}
      <div
        id="denunciar"
        className="bg-gray-50 p-8 sm:p-12 rounded-3xl mt-16 shadow-md border border-gray-100">
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
            <p className="font-bold text-orange-600">www.mpf.mp.br</p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-lg text-gray-500 mb-6">
            Denunciar é um ato de cidadania que contribui para uma sociedade
            mais justa e igualitária.
          </p>
          <a
            href="https://www.gov.br/mdh/pt-br/ondh/centrais-de-conteudo/declaracoes-e-certidoes/declaracao-de-ocorrencia-de-racismo"
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

      {/* SVG Gradients */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
