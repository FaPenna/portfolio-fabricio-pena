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
2. Em `index.html`, na seção `<section id="projetos">`, copie um bloco `<a class="project-card">...</a>` inteiro e cole antes do `</div>` de `.projects-grid`. **Não** adicione `target="_blank"` — os projetos abrem na mesma aba.
3. Troque o `href` para `Projetos/nome-do-arquivo.html`.
4. Troque o `src` da `.proj-thumb img` por um screenshot real do projeto (recomendado 800×500px).
5. Ajuste `.proj-type` para `🌐 Web App` / `🌐 Website` ou `📊 Power BI` (adicione a classe `bi` no `<span>` para a cor amarela).
6. Edite `.proj-name`, `.proj-desc` e as `.proj-tag` com as tecnologias usadas.
7. **Se o projeto tiver dados reais de alguma empresa/cliente, anonimize antes de publicar** — troque nomes, empresas, matrículas e centros de custo/clientes reais por informações fictícias (ver `Projetos/Painel_Desligamentos_RH_v1_3_20260731.html` como referência do que foi feito).
8. **Botão "Voltar ao portfólio" (padrão em todos os projetos):** dentro do arquivo do projeto, adicione no topo da página (dentro do header/topbar existente, no canto superior direito) o botão abaixo. O estilo usa as cores fixas do site principal (`#0a1628` / `#00d4ff`) para ficar reconhecível em qualquer projeto, independente do tema dele:

   ```html
   <a href="../index.html#projetos" class="portfolio-back-btn" title="Voltar ao portfólio">
     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
     <span>Voltar ao portfólio</span>
   </a>
   ```

   E o CSS correspondente, colado no `<style>` do projeto:

   ```css
   .portfolio-back-btn {
     display: inline-flex !important;
     align-items: center !important;
     gap: 8px !important;
     padding: 9px 16px !important;
     background: #0a1628 !important;
     color: #00d4ff !important;
     border: 1px solid rgba(0,212,255,0.4) !important;
     border-radius: 999px !important;
     font-family: 'Inter', system-ui, sans-serif !important;
     font-size: 12.5px !important;
     font-weight: 600 !important;
     text-decoration: none !important;
     white-space: nowrap !important;
     box-shadow: 0 0 0 1px rgba(0,212,255,0.08), 0 4px 14px rgba(0,0,0,0.25) !important;
     transition: background .2s ease, box-shadow .2s ease, transform .2s ease !important;
     line-height: 1 !important;
   }
   .portfolio-back-btn:hover {
     background: #0f1e38 !important;
     box-shadow: 0 0 0 1px rgba(0,212,255,0.3), 0 6px 20px rgba(0,212,255,0.2) !important;
     transform: translateY(-1px) !important;
   }
   .portfolio-back-btn svg { flex-shrink: 0 !important; }
   ```

   Os `!important` garantem que o botão fique visualmente igual mesmo com o reset/Tailwind/CSS próprio de cada projeto.

## Deploy

O deploy é automático via [Vercel](https://vercel.com), conectado a este repositório — qualquer push na branch `main` gera uma nova publicação em produção.

## Stack

HTML5 · CSS3 (custom properties, grid, media queries) · JavaScript vanilla (sem frameworks ou build step).
