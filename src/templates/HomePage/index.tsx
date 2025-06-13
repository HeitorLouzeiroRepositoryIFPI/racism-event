import { Content } from "../../components/Content";
import { ImageField } from "../../components/ImageField";
import { TextField } from "../../components/TextField";
import { NewsSlider } from "../../components/NewsSlider";
import { Charts } from "../../components/Charts";
import newsData from "../../../data/news/news.json";
import { RacismTypesCarousel } from "../../components/RacismTypesCarousel";
import { Report } from "../../components/Report";

export function HomePage() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Hero Section - Introdução */}
      <Content classes="bg-gradient-to-b from-gray-50 to-gray-100 pt-28 md:pt-36 pb-16">
        <TextField>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Entenda os Diferentes{" "}
            <span className="text-orange-600">Tipos de Racismo</span>
          </h1>
          <p className="text-base md:text-xl text-gray-700 leading-relaxed max-w-xl">
            Este site tem como objetivo apresentar e explicar as diversas formas
            de racismo presentes na sociedade, ajudando na conscientização e no
            combate a essas práticas discriminatórias.
          </p>
          <div className="mt-8 hidden md:block">
            <a
              href="#explorar"
              className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Explorar conteúdo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L10 14.586l5.293-5.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </TextField>

        <ImageField
          src="person_1.png"
          alt="Estudante consciente sobre racismo"
        />
      </Content>

      {/* Definição Section */}
      <Content classes="bg-gray-800 py-16">
        <ImageField
          src="person_2.png"
          alt="Estudante representando a luta contra o racismo"
          classes="rounded-xl shadow-xl border-4 border-gray-700 max-w-sm md:max-w-md lg:max-w-lg"
        />
        <TextField>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
        O que é <span className="text-orange-500">Racismo?</span>
          </h2>
          <p className="text-base md:text-xl text-gray-300 leading-relaxed max-w-xl">
        Racismo é um sistema de crenças, práticas e estruturas sociais que atribuem valores, direitos e oportunidades de forma desigual a pessoas ou grupos com base em características raciais ou étnicas. Ele se manifesta de diversas formas — explícitas ou sutis, individuais ou institucionais — e está presente em diferentes esferas da sociedade, como educação, mercado de trabalho, saúde, segurança pública, mídia e relações interpessoais. O racismo não se limita a atitudes hostis ou preconceituosas, mas inclui também a reprodução de privilégios, a exclusão sistemática e a negação de direitos fundamentais a determinados grupos raciais. No Brasil, o racismo é um fenômeno histórico e estrutural, profundamente enraizado desde o período colonial e que persiste até os dias atuais, impactando milhões de pessoas e perpetuando desigualdades.
          </p>
        </TextField>
      </Content>

      {/* Contexto e Impactos */}
      <Content classes="bg-gray-700 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-4 flex items-center">
          <span className="text-orange-500 mr-3 text-xl">01</span>
          Contexto Histórico e Estrutural
        </h2>
        <p className="text-gray-300 md:text-lg leading-relaxed">
          O racismo no Brasil tem raízes profundas no processo de colonização e na escravidão, que perdurou por mais de três séculos. Após a abolição, políticas públicas e práticas sociais continuaram a marginalizar populações negras, indígenas e outros grupos racializados, negando-lhes acesso a terra, educação, emprego e cidadania plena. O racismo estrutural se manifesta em leis, instituições e costumes que perpetuam desigualdades raciais, mesmo sem intenção explícita. Além disso, o racismo institucional se reflete em abordagens policiais, decisões judiciais, currículos escolares e oportunidades de ascensão social, mantendo privilégios para alguns e obstáculos para outros.
        </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-4 flex items-center">
          <span className="text-orange-500 mr-3 text-xl">02</span>
          Impactos Sociais, Econômicos e Psicossociais
        </h2>
        <p className="text-gray-300 md:text-lg leading-relaxed">
          O racismo afeta profundamente a vida das pessoas, gerando desigualdades em renda, acesso à saúde, educação e oportunidades profissionais. Ele contribui para a exclusão social, violência, encarceramento em massa e mortalidade precoce de populações negras e indígenas. No âmbito psicossocial, o racismo provoca sofrimento emocional, baixa autoestima, ansiedade, depressão e sensação de invisibilidade ou desvalorização. Além disso, limita o potencial de desenvolvimento individual e coletivo, prejudicando toda a sociedade ao restringir a diversidade e a justiça social. Combater o racismo exige reconhecer sua existência, promover políticas de reparação e inclusão, e transformar práticas cotidianas em todos os espaços sociais.
        </p>
          </div>
        </div>
      </Content>

      {/* Tipos de Racismo - Carousel */}
      <Content classes="bg-gray-50 py-20" id="explorar">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Explore <span className="text-orange-600">Cada Vertente</span> em
              Detalhe
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4 leading-relaxed">
              Selecione uma vertente do racismo para compreender sua definição,
              contexto histórico e formas de manifestação na sociedade
              contemporânea
            </p>
          </div>
          <RacismTypesCarousel />
        </div>
      </Content>

      {/* Seção de Gráficos e Estatísticas */}
      <Content classes="bg-gray-50 py-20" id="estatisticas">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Estatísticas <span className="text-orange-600">Relevantes</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4 leading-relaxed">
              Dados e estatísticas que demonstram a realidade do racismo e seus
              impactos na sociedade brasileira
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <Charts />
          </div>
        </div>
      </Content>
      {/* Seção de Notícias */}
      <Content classes="bg-gray-50 py-20" id="noticias">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Últimas <span className="text-orange-600">Notícias</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4 leading-relaxed">
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
      <Content classes="bg-gray-50 py-20" id="denunciar">
        <Report/>
      </Content>
    </main>
  );
}
