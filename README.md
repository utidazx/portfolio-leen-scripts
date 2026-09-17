<div align="center">

# ⚡ LeenScripts

**Portfólio moderno, responsivo e de alta performance para publicação e download de Scripts e Executores.**

![Vue 3](https://img.shields.io/badge/Vue-3.5+-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Modern_Theme-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)

</div>

---

## 📖 Sobre o Projeto

O **LeenScripts** é uma Single Page Application (SPA) desenvolvida com **Vue 3** e **Vite**, projetada especialmente para criadores de scripts, desenvolvedores e comunidades gamer/modding exibirem e distribuírem seus projetos, códigos e executores com elegância e praticidade.

O grande diferencial arquitetural do projeto é a **gestão desacoplada de dados**: as informações dos scripts são lidas a partir de um arquivo estático externo (`public/data/scripts.js`). Isso significa que você pode **adicionar, editar ou remover itens diretamente no servidor/produção sem a necessidade de rodar um novo build**.

---

## ✨ Principais Funcionalidades

- 🔍 **Busca em Tempo Real:** Filtragem instantânea por título conforme o usuário digita.
- 🏷️ **Filtros por Categoria:** Botões dinâmicos gerados automaticamente com base nas categorias cadastradas (ex: *Scripts*, *Executores*, etc.).
- 📄 **Páginas de Detalhes Dinâmicas (`/post/:slug`):** Cada script possui sua própria página limpa, com descrição completa, informações do autor, data e múltiplos botões de download.
- 📥 **Múltiplos Links de Download:** Suporte a links personalizados (ex: Download Script, Baixar Executor, Emulador PC).
- 🍪 **LGPD / Banner de Consentimento de Cookies:** Banner integrado com persistência de consentimento no `localStorage`.
- 📜 **Páginas Legais:** Rotas prontas para Políticas de Privacidade e Termos de Uso.
- 🎨 **Design System Dark Moderno:** Paleta de cores escura inspirada em interfaces gamers modernas, com efeitos de foco, transições suaves e layout 100% responsivo (desktop, tablet e mobile).
- 🚀 **Zero Rebuild para Atualização de Conteúdo:** Adicione novos itens apenas editando um arquivo de configuração.

---

## 🛠️ Tecnologias Utilizadas

- **[Vue.js 3](https://vuejs.org/):** Framework progressivo utilizando a *Composition API* (`<script setup>`).
- **[Vue Router 4](https://router.vuejs.org/):** Roteamento no cliente com suporte a histórico HTML5 e parâmetros de URL.
- **[Vite 8](https://vite.dev/):** Build tool ultrarrápida com Hot Module Replacement (HMR).
- **Vanilla CSS:** Folha de estilos customizada utilizando variáveis CSS (`:root`), flexbox, CSS grid e design responsivo sem dependência de bibliotecas externas pesadas.

---

## 📁 Estrutura de Pastas

```text
portfolio-leen-scripts/
├── public/
│   ├── data/
│   │   └── scripts.js        # 📂 Banco de dados dinâmico (editável em produção)
│   └── favicon.svg           # Ícone da aplicação
├── src/
│   ├── assets/               # Imagens, mídias e vetores
│   ├── components/           # Componentes reutilizáveis
│   │   ├── CookieBanner.vue  # Alerta e controle de cookies (LGPD)
│   │   ├── FooterBar.vue     # Rodapé com links de navegação
│   │   ├── NavBar.vue        # Barra de navegação com filtros rápidos
│   │   └── ScriptCard.vue    # Card de exibição do script
│   ├── router/
│   │   └── index.js          # Definição e configuração das rotas da SPA
│   ├── views/                # Páginas principais da aplicação
│   │   ├── Home.vue          # Vitrine principal com busca e listagem
│   │   ├── Post.vue          # Detalhes do script e botões de download
│   │   ├── PoliticaPrivacidade.vue # Termos de privacidade
│   │   └── TermosDeUso.vue   # Termos de uso da plataforma
│   ├── App.vue               # Componente raiz
│   ├── main.js               # Ponto de entrada do Vue
│   └── style.css             # Tema global, variáveis e design system
├── index.html                # HTML principal da aplicação
├── package.json              # Dependências e scripts do projeto
├── vite.config.js            # Configuração do Vite
└── README.md                 # Documentação do repositório
```

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
- **Node.js** (versão 18 ou superior recomendada)
- **npm** ou gerenciador de pacotes equivalente (yarn, pnpm)

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/utidazx/portfolio-leen-scripts.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd portfolio-leen-scripts
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. Abra o navegador no endereço indicado pelo terminal (normalmente `http://localhost:5173`).

---

## 📝 Como Cadastrar ou Editar Scripts

Para cadastrar novos itens, basta abrir o arquivo [`public/data/scripts.js`](public/data/scripts.js) e adicionar um novo objeto ao array `window.__SCRIPTS__`:

```javascript
{
  title: "Nome do Seu Script",
  slug: "nome-do-seu-script",              // Identificador único para a URL (/post/nome-do-seu-script)
  category: "Script",                     // "Script", "Executor" ou categoria personalizada
  author: "Seu Nome",                     // Autor/desenvolvedor
  date: "2026-09-17",                     // Data de publicação/atualização
  description: "Breve descrição sobre o script, funções e compatibilidade.",
  thumbnail: "https://exemplo.com/thumb.png", // URL da imagem ou "" para placeholder textual
  downloads: [
    { label: "Baixar Script (.lua)", url: "https://seulink.com/script" },
    { label: "Tutorial no Discord", url: "https://discord.gg/seulink" }
  ]
}
```

> 💡 **Dica:** Como o arquivo fica na pasta `public/`, após publicar em produção (como Vercel, Netlify ou VPS), você pode alterar este arquivo diretamente sem precisar compilar o código novamente!

---

## 📦 Scripts Disponíveis

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor local com hot-reloading |
| `npm run build` | Gera a versão otimizada para produção na pasta `dist` |
| `npm run preview` | Visualiza localmente o build de produção |

---

## 🌐 Publicação / Deploy

O projeto pode ser facilmente publicado em serviços de hospedagem estática:

- **[Vercel](https://vercel.com/):** Conecte o repositório, selecione o preset *Vite* e faça o deploy.
- **[Netlify](https://netlify.com/):** Configure o comando de build como `npm run build` e o diretório de publicação como `dist`.
- **GitHub Pages:** Configure o `base` em `vite.config.js` correspondente ao nome do repositório e compile para o branch `gh-pages`.

> **Atenção para SPAs:** Caso utilize hospedagem estática simples, lembre-se de configurar a regra de redirecionamento (Rewrite) para que todas as rotas apontem para `index.html`.

---

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE). Sinta-se livre para usar, estudar e adaptar às suas necessidades.

---

<div align="center">
Desenvolvido por <a href="https://github.com/utidazx">utidazx</a> 🚀
</div>
