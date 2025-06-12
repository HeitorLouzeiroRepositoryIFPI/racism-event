import { Content } from "../../components/Content";
import { ImageField } from "../../components/ImageField";
import { TextField } from "../../components/TextField";
import { NewsSlider } from "../../components/NewsSlider";
import { Charts } from "../../components/Charts";
import noticesData from "../../../data/notices/notices.json";
import newsData from "../../../data/news/news.json";
import { RacismTypesCarousel } from "../../components/RacismTypesCarousel";


export function HomePage() {
  return (
    <>
      <Content classes="bg-gray-50 mt-15">
        <TextField>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Entenda os Diferentes{" "}
            <span className="text-orange-600">Tipos de Racismo</span>
          </h2>
          <p className="text-base sm:text-2xl">
            Este site tem como objetivo apresentar e explicar as diversas formas
            de racismo presentes na sociedade, ajudando na conscientização e no
            combate a essas práticas.
          </p>
        </TextField>

        <ImageField src="person_1.png" alt="estudante" />
      </Content>
      <Content classes="bg-gray-700">
        <ImageField
          src="person_2.png"
          alt="estudante"
          classes="bg-gray-300 rounded-4xl"
        />
        <TextField>
          <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4">
            Definição Ampliada
          </h2>
          <p className="text-base sm:text-2xl text-gray-300">
            O racismo direto é a forma mais visível e consciente de
            discriminação racial, caracterizada por ações e declarações
            abertamente hostis baseadas em características fenotípicas ou origem
            étnica. É intencional, deliberado e facilmente identificável.
          </p>
        </TextField>
      </Content>
      <Content classes="bg-gray-700">
        <TextField>
          <h2 className="text-center text-white text-3xl sm:text-4xl font-bold mb-4">
            Contexto Histórico
          </h2>
          <p className="text-center sm:text-2xl text-gray-300">
            No Brasil, este tipo de racismo era institucionalizado durante a
            escravidão (1500-1888) e no período pós- abolição, quando leis como
            a "Lei de Terras" (1850) e políticas de imigração europeia buscavam
            excluir negros da sociedade formal.
          </p>
        </TextField>
        <TextField>
          <h2 className="text-center text-white text-3xl sm:text-4xl font-bold mb-4">
            Impactos Psicossociais
          </h2>
          <p className="text-center sm:text-2xl text-gray-300">
            Causa trauma imediato, ansiedade, depressão, baixa autoestima e pode
            levar ao isolamento social. Estudos mostram que vítimas de racismo
            explícito têm maior incidência de transtornos mentais.
          </p>
        </TextField>
      </Content>

      {/* Nova seção com o RacismTypesCarousel */}
      <Content classes="bg-gray-100 py-16">
        <div className="w-full">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Explore <span className="text-orange-600">Cada Tipo</span> em
              Detalhe
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Selecione um tipo de racismo para compreender sua definição,
              contexto histórico e formas de manifestação
            </p>
          </div>
          <RacismTypesCarousel />
        </div>
      </Content>

      {/* Seção de Notícias */}
      <Content classes="bg-gray-50 py-16">
        <div className="w-full">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Últimas <span className="text-orange-600">Notícias</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Acompanhe as notícias mais recentes sobre racismo, direitos
              humanos e inclusão social
            </p>
          </div>
          <NewsSlider
            newsData={newsData}
            autoPlay={true}
            autoPlayInterval={8000}
            maxArticles={8}
            className="max-w-5xl mx-auto"
          />
        </div>
      </Content>

      {/* Seção de Gráficos e Estatísticas */}
      <Content classes="bg-gray-100 py-16">
        <div className="w-full">
          <div className="max-w-6xl mx-auto">
            <Charts />
          </div>
        </div>
      </Content>
    </>
  );
}
