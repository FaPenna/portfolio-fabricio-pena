# Global Controle

Sistema web integrado para **gerenciamento de demandas** e **controle de ponto
eletrônico (REP-P — Portaria nº 671/2021 do MTE)**, desenvolvido como Trabalho
de Conclusão de Curso em Sistemas de Informação — Faculdade Projeção.

Stack (conforme Capítulo II da documentação): **Python 3 · Flask · SQLite ·
Jinja2 · HTML5/CSS3 · Bootstrap 5 · openpyxl**.

## Como executar

```bash
python -m pip install -r requirements.txt
python app.py
```

> Use sempre `python -m pip ...` (e não apenas `pip ...`): no Windows é comum haver
> mais de um Python instalado, e essa forma garante que as bibliotecas sejam
> instaladas no mesmo interpretador que executa o sistema.

Acesse **http://localhost:5000**. Na primeira execução o banco
`global_controle.db` é criado e populado com dados de demonstração
(colaboradores, ~3 semanas de marcações de ponto e demandas).

## Usuários de demonstração (senha: `123456`)

| Perfil        | E-mail                            |
|---------------|-----------------------------------|
| Administrador | admin@globalweb.com.br            |
| Gestora       | mariana.souza@globalweb.com.br    |
| Gestor        | ricardo.tavares@globalweb.com.br  |
| Colaborador   | fabricio.pena@globalweb.com.br    |
| Colaboradora  | juliana.ribeiro@globalweb.com.br  |
| Colaborador   | pedro.lima@globalweb.com.br       |
| Colaboradora  | amanda.castro@globalweb.com.br    |
| Colaborador   | lucas.almeida@globalweb.com.br    |
| Colaboradora  | beatriz.nogueira@globalweb.com.br |

A base de demonstração contém **9 usuários**, **~500 marcações de ponto**
(últimos 30 dias, com faltas ocasionais), **19 demandas** distribuídas entre
todos os colaboradores e **4 relatórios** no histórico.

## Telas (Capítulo VI da documentação)

| Tela | Rota | Perfil |
|------|------|--------|
| 01 — Login | `/login` | todos |
| 02 — Dashboard | `/` | todos |
| 03 — Registro de Ponto | `/ponto` | todos |
| 04 — Espelho de Ponto | `/espelho` | todos |
| 05 — Acompanhar Demandas | `/demandas` | colaborador |
| 06 — Gerenciar Demandas | `/gerenciar-demandas` | gestor/admin |
| 07 — Acompanhar Equipe | `/equipe` | gestor/admin |
| 08 — Gerar Relatórios | `/relatorios` | gestor/admin |
| 09 — Gerenciar Usuários | `/usuarios` | admin |
| 10 — Exportar AFD | `/exportar-afd` | admin |
| 11 — Controle de Home Office (aproveitamento) | `/aproveitamento` | todos (gestor/admin veem a equipe) |

## Conformidade — Portaria nº 671/2021 (REP-P)

- Demandas podem ser **criadas e editadas também pelos colaboradores** (atribuídas a si
  próprios); gestores seguem com gestão completa, incluindo status e reatribuição (RN005);
- **Índice de aproveitamento (RN009)**: média entre o % da jornada cumprida (horas
  registradas ÷ esperadas em dias úteis de 8h) e o % de demandas concluídas no prazo;
- Sequência obrigatória de marcações: entrada → pausa → retorno → saída (RN002);
- **NSR** (Número Sequencial de Registro) gerado automaticamente por colaborador;
- **Hash SHA-256** de integridade tornando cada registro imutável (RN003);
- **Espelho de ponto** disponível ao trabalhador (UC005);
- **Exportação do AFD** com cabeçalho (tipo 1), marcações (tipo 7) e trailer (tipo 9) (UC006).

> Para recriar o banco de demonstração, apague `global_controle.db` e execute novamente.

## Solução de problemas

**O download do relatório/AFD não acontece** — abra o terminal onde o
`python app.py` está rodando e veja se aparece um erro. As causas comuns:

1. `ModuleNotFoundError: openpyxl` → execute `python -m pip install openpyxl`
   no **mesmo** Python que roda o app (ver observação acima);
2. Sessão expirada após reiniciar o servidor → faça login novamente.

A partir desta versão, qualquer falha na geração do arquivo exibe uma
mensagem explicativa na própria tela, em vez de uma página de erro.

## Identidade visual

Interface alinhada à marca **Globalweb** (globalweb.com.br): tema claro,
verde institucional `#76B82A` como cor primária, painéis em grafite e o
mote *"Inovação por resultado"* na tela de acesso.
