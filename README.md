# Site Educacional sobre Tipos de Racismo

Este projeto é um site educativo que apresenta diferentes tipos de racismo, seus contextos históricos, manifestações contemporâneas e formas de enfrentamento. O site foi desenvolvido com foco em acessibilidade, performance e componentização.

## Tecnologias Utilizadas

- **React + TypeScript**: Para construção da interface
- **TailwindCSS**: Para estilização e responsividade
- **Vite**: Como ferramenta de build e desenvolvimento
- **Vitest + Testing Library**: Para testes automatizados

## Funcionalidades

- **Tipos de Racismo**: Apresentação de diferentes tipos de racismo com explicações detalhadas
- **Carrosseis Interativos**: Navegação intuitiva entre os diferentes tipos de racismo
- **Layout Responsivo**: Adaptação para dispositivos móveis, tablets e desktops
- **Performance Otimizada**: Carregamento lazy de componentes e imagens
- **Acessibilidade**: Compatível com leitores de tela e navegação por teclado

## Como Executar o Projeto

### Requisitos
- Node.js 16+ 
- npm ou yarn

### Instalação
```bash
# Instalar dependências
npm install
# ou
yarn install
```

### Executar em Desenvolvimento
```bash
npm run dev
# ou
yarn dev
```

### Compilar para Produção
```bash
npm run build
# ou
yarn build
```

### Executar Testes
```bash
# Executar testes uma vez
npm run test
# ou
yarn test

# Executar testes em modo watch
npm run test:watch
# ou
yarn test:watch

# Executar testes com cobertura
npm run test:coverage
# ou
yarn test:coverage
```

## Estrutura do Projeto

- `/src/components`: Componentes reutilizáveis da UI
- `/src/templates`: Templates de páginas
- `/src/hooks`: Custom hooks para lógica compartilhada
- `/src/tests`: Testes automatizados
- `/data`: Arquivos JSON com os dados do site

## Acessibilidade

O site foi desenvolvido com foco em acessibilidade, incluindo:
- Atributos ARIA para melhor navegação por leitores de tela
- Contraste de cores adequado
- Suporte para navegação por teclado
- Compatibilidade com configurações de preferência de movimento reduzido
