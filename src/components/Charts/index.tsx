import { useState, useEffect } from 'react';
import { BarChart } from '../LineChart/BarChart';
import { PieChart } from '../LineChart/PieChart';
import { StatCard } from '../StatCard';
import graficData from '../../../data/grafic/grafic.json';

interface ChartData {
  name: string;
  value: number;
  unidade?: string;
  [key: string]: any;
}

export function Charts() {
  const [discriminacaoGeralData, setDiscriminacaoGeralData] = useState<ChartData[]>([]);
  const [discriminacaoGeneroData, setDiscriminacaoGeneroData] = useState<ChartData[]>([]);
  const [percepcaoPreconceito, setPercepcaoPreconceito] = useState<ChartData[]>([]);
  const [indicadoresDesigualdade, setIndicadoresDesigualdade] = useState<ChartData[]>([]);
  
  useEffect(() => {
    // Transform discriminacao_geral_raca data
    const discriminacaoGeral = graficData.discriminacao_geral_raca.map(item => ({
      name: item.raca,
      value: item.porcentagem
    }));
    
    // Transform discriminacao_genero_raca data
    const discriminacaoGenero = graficData.discriminacao_genero_raca.map(item => ({
      name: item.grupo,
      value: item.porcentagem
    }));
    
    // Transform percepcao_preconceito_local data
    const percepcao = graficData.percepcao_preconceito_local.map(item => ({
      name: item.local,
      value: item.porcentagem
    }));
    
    // Transform indicadores_desigualdade_raca data
    const indicadores = graficData.indicadores_desigualdade_raca.map(item => {
      if (item.porcentagem) {
        return {
          name: item.indicador,
          value: item.porcentagem
        };
      } else {
        return {
          name: item.indicador,
          value: item.valor || 0, // Ensure value is always a number
          unidade: item.unidade
        };
      }
    });
    
    setDiscriminacaoGeralData(discriminacaoGeral);
    setDiscriminacaoGeneroData(discriminacaoGenero);
    setPercepcaoPreconceito(percepcao);
    setIndicadoresDesigualdade(indicadores as ChartData[]);
  }, []);
  
  // Prepare tiposDiscriminacao data for comparison chart
  const prepareTiposDiscriminacaoData = () => {
    const tipos = graficData.tipos_discriminacao_raca.preta.map((item, index) => {
      return {
        name: item.tipo,
        value: 0, // Placeholder value to match the DataPoint interface
        preta: item.porcentagem,
        parda: graficData.tipos_discriminacao_raca.parda[index].porcentagem
      };
    });
    return tipos;
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
          title="Pessoas Pretas"
          value="84.8%"
          subtitle="relatam discriminação racial"
          icon="P"
          color="red"
        />
        <StatCard
          title="Pessoas Pardas"
          value="64.9%"
          subtitle="relatam discriminação racial"
          icon="Pa"
          color="orange"
        />
        <StatCard
          title="Pessoas Brancas"
          value="48.6%"
          subtitle="relatam discriminação racial"
          icon="B"
          color="blue"
        />
        <StatCard
          title="Diferença Racial"
          value="36.2%"
          subtitle="diferença entre pretas e brancas"
          icon="Δ"
          color="purple"
          trend={{ value: 36, isPositive: false }}
        />
      </div>
      
      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
        
        {/* Chart Card 1 */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 border border-gray-50">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Discriminação Geral por Raça</h3>
            <p className="text-gray-600">Percentual de pessoas que relatam ter sofrido discriminação</p>
          </div>
          <BarChart 
            data={discriminacaoGeralData}
            xDataKey="name"
            bars={[
              { dataKey: "value", fill: "url(#gradient1)", name: "Porcentagem (%)" }
            ]}
            height={350}
          />
        </div>

        {/* Chart Card 2 */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 border border-gray-50">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Discriminação por Gênero e Raça</h3>
            <p className="text-gray-600">Diferenças entre grupos demográficos</p>
          </div>
          <PieChart 
            data={discriminacaoGeneroData}
            nameKey="name"
            dataKey="value"
            colors={['#1f2937', '#374151', '#6b7280', '#9ca3af']}
            height={350}
          />
        </div>

      </div>

      {/* Full Width Chart */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-8 border border-gray-100">
        <div className="mb-8 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-3">Tipos de Discriminação por Raça</h3>
          <p className="text-gray-600 text-lg">Comparação detalhada entre pessoas pretas e pardas</p>
        </div>
        <div className="overflow-x-auto">
          <BarChart 
            data={prepareTiposDiscriminacaoData()}
            xDataKey="name"
            bars={[
              { dataKey: "preta", fill: "#1f2937", name: "Pessoas Pretas (%)" },
              { dataKey: "parda", fill: "#d97706", name: "Pessoas Pardas (%)" }
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
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Percepção de Preconceito por Local</h3>
            <p className="text-gray-600">Onde o preconceito é mais percebido</p>
          </div>
          <BarChart 
            data={percepcaoPreconceito}
            xDataKey="name"
            bars={[
              { dataKey: "value", fill: "url(#gradient2)", name: "Porcentagem (%)" }
            ]}
            height={350}
          />
        </div>

        {/* Chart Card 4 */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 border border-gray-50">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Indicadores de Desigualdade</h3>
            <p className="text-gray-600">Impactos estruturais do racismo</p>
          </div>
          <BarChart 
            data={indicadoresDesigualdade}
            xDataKey="name"
            bars={[
              { dataKey: "value", fill: "url(#gradient3)", name: "Valor" }
            ]}
            height={350}
          />
        </div>

      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-orange-600 to-red-700 rounded-3xl p-12 text-center text-white shadow-2xl">
        <h3 className="text-3xl font-bold mb-4">Juntos Contra o Racismo</h3>
        <p className="text-xl mb-6 opacity-90">
          Estes dados mostram a urgência de combatermos o racismo estrutural em nossa sociedade.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-white/20 rounded-lg px-6 py-3">
            <span className="font-semibold">84.8% pessoas pretas</span>
          </div>
          <div className="bg-white/20 rounded-lg px-6 py-3">
            <span className="font-semibold">64.9% pessoas pardas</span>
          </div>
          <div className="bg-white/20 rounded-lg px-6 py-3">
            <span className="font-semibold">relatam discriminação</span>
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
