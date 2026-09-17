// ============================================================
// ARQUIVO DE DADOS - EDITÁVEL DIRETAMENTE EM PRODUÇÃO
// ============================================================
// Cadastre seus scripts e executores aqui. Cada objeto vira um
// card na página inicial e uma página em /post/<slug>.
//
// Campos:
//   title       - nome do script/executor
//   slug        - identificador único usado na URL (ex: "delta-v676-oficial"), sem espaços
//   category    - categoria. Use "Script" ou "Executor" para aparecer
//                 nos atalhos da navbar, mas qualquer valor funciona.
//   author      - seu nome/apelido (opcional)
//   date        - data de publicação, ex: "2026-09-08" (opcional)
//   description - descrição curta (1-2 linhas)
//   thumbnail   - URL ou caminho da imagem; deixe "" para placeholder
//   downloads   - lista de botões de download:
//                 [{ label: "Baixar Script", url: "https://..." }, ...]
// ============================================================

window.__SCRIPTS__ = [
  {
    title: "Meu Primeiro Script",
    slug: "meu-primeiro-script",
    category: "Script",
    author: "Você",
    date: "2026-09-08",
    description: "Descrição curta do que o script faz.",
    thumbnail: "",
    downloads: [
      { label: "Baixar Script", url: "#" },
    ],
  },

  {
    title: "Meu Segundo Script",
    slug: "meu-segundo-script",
    category: "Script",
    author: "Você",
    date: "2026-09-08",
    description: "Descrição curta do que o script faz.",
    thumbnail: "",
    downloads: [
      { label: "Baixar Script", url: "#" },
    ],
  },

  {
    title: "Meu Executor",
    slug: "meu-executor",
    category: "Executor",
    description: "Descrição curta do executor.",
    thumbnail: "",
    downloads: [
      { label: "Baixar Executor", url: "https://..." },
      { label: "Baixar Emulador (PC)", url: "https://..." },
    ],
  },
]
