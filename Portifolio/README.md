# Portfólio — Fabrício Carneiro Pena

Site pessoal com apresentação profissional, experiência, habilidades e projetos desenvolvidos por [Fabrício Carneiro Pena](https://github.com/FaPenna), Engenheiro de Dados Jr.

🔗 **Site publicado:** https://portfoliofabriciopena.vercel.app/

## Estrutura do projeto

```
.
├── index.html          # Página principal (estrutura HTML)
├── css/
│   └── style.css       # Estilos globais e responsivos
├── js/
│   └── main.js         # Navegação, typewriter, canvas animado, scroll reveal
└── Projetos/            # Projetos individuais linkados na seção "Projetos"
    └── Portal_Admissoes_v1.2_Portfolio.html
```

Cada projeto listado na seção "Projetos" é um arquivo HTML independente dentro de `Projetos/`, linkado a partir do card correspondente em `index.html`.

## Como visualizar localmente

Basta abrir `index.html` num navegador — não há dependências, build ou servidor necessário.

## Como adicionar um novo projeto

1. Coloque o arquivo principal do projeto dentro da pasta `Projetos/` (mesmo nível deste README).
2. Em `index.html`, na seção `<section id="projetos">`, copie um bloco `<a class="project-card">...</a>` inteiro e cole antes do `</div>` de `.projects-grid`.
3. Troque o `href` para `Projetos/nome-do-arquivo.html`.
4. Troque o `src` da `.proj-thumb img` por um screenshot real do projeto (recomendado 800×500px).
5. Ajuste `.proj-type` para `🌐 Web App` / `🌐 Website` ou `📊 Power BI` (adicione a classe `bi` no `<span>` para a cor amarela).
6. Edite `.proj-name`, `.proj-desc` e as `.proj-tag` com as tecnologias usadas.

## Deploy

O deploy é automático via [Vercel](https://vercel.com), conectado a este repositório — qualquer push na branch `main` gera uma nova publicação em produção.

## Stack

HTML5 · CSS3 (custom properties, grid, media queries) · JavaScript vanilla (sem frameworks ou build step).
