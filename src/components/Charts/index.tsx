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
        <div className="bg-white rounded-3xl shadow-2xl p-8 h-140  hover:shadow-3xl transition-all duration-500 border border-gray-50">
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
