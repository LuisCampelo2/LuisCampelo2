# Prompt: Landing Page de Portfólio — Luis Filipe Campelo

Crie uma landing page de portfólio pessoal, **somente front-end** (HTML/CSS/JS puro ou React — sem backend, sem banco de dados), pronta para deploy no **GitHub Pages**.

## Direção de design

- Estilo **clean e minimalista**, com bastante espaço em branco (whitespace) e hierarquia tipográfica clara.
- **Paleta de cores escura**, harmônica e sóbria — defina você mesmo(a) uma combinação de tons escuros com um accent color que combine bem (sem ser genérico demais).
- **Zero emojis** em qualquer lugar da interface.
- Ícones **somente da biblioteca Lucide Icons** — nenhum outro sistema de ícones.
- O resultado **não pode parecer "gerado por IA"**: nada de gradientes roxo/rosa clichê, nada de glassmorphism genérico, nada de layout de template SaaS repetido. Priorize um design com identidade própria, tipografia bem escolhida (pode usar uma fonte via Google Fonts que combine com o tom técnico/profissional) e microdetalhes de acabamento (espaçamento consistente, alinhamento preciso, transições sutis).
- Totalmente responsivo (mobile, tablet, desktop).
- Sem necessidade de CMS, formulário com backend, ou qualquer dependência de servidor — é um site estático puro.

## Estrutura da página

1. **Hero**
   - Nome: Luis Filipe Campelo
   - Título/headline: Desenvolvedor Full Stack Júnior
   - Localização: Brasília, Distrito Federal, Brasil
   - Uma linha de destaque com o stack principal: JavaScript, React, Node.js, Python, Django
   - Botões de ação: "Ver projetos" (âncora para seção de projetos), "Baixar currículo" (botão de download de PDF — usar um link para `curriculo-luis-campelo.pdf`, arquivo estático a ser colocado no repositório), e ícones de contato (LinkedIn, GitHub, e-mail) usando Lucide Icons.

2. **Sobre**
   Use este texto como base (pode ajustar levemente o tom para a web, mantendo o conteúdo):

   > Sou desenvolvedor full stack júnior e estou construindo minha carreira em tecnologia com a mesma disciplina que trouxe da minha experiência anterior em processos administrativos: atenção a detalhes, organização e entrega dentro do prazo. Hoje trabalho com JavaScript, React, Node.js, Python e Django, do front-end ao back-end, incluindo integração de APIs RESTful, banco de dados relacional (MySQL/PostgreSQL) e deploy em produção (Vercel, Render, Railway). Estou cursando Análise e Desenvolvimento de Sistemas no UniCEUB e concluí uma formação intensiva em Desenvolvimento Web Full Stack pela Mate Academy. Uso Scrum e Kanban no dia a dia dos meus projetos, tenho familiaridade com Git/GitHub e Docker, e gosto de aprender rápido.

3. **Skills / Stack técnico**
   Organize em grupos, cada um com ícone Lucide correspondente:
   - **Linguagens:** JavaScript, TypeScript, Python
   - **Front-end:** React, HTML, CSS, Bootstrap
   - **Back-end:** Node.js, Express, Django
   - **Banco de Dados:** MySQL, PostgreSQL, SQLite
   - **Ferramentas & DevOps:** Git, GitHub, Docker, Vercel, Render, Railway, Hostinger
   - **Metodologias:** Scrum, Kanban
   - **Idiomas:** Inglês (Professional Working)

4. **Projetos**
   Cards para cada projeto, com título, descrição curta, tags de tecnologia e link para o repositório no GitHub:

   - **VestWeb** — Plataforma web educacional com área do aluno e área do professor, com integração entre front-end e back-end e gerenciamento de dados. Tecnologias: React, Node.js, Express. Link: https://github.com/BratlowareOrg/VestWeb

   - **Lift** — Plataforma de gestão para personal trainers, alunos e academias: gerenciamento de treinos, evolução física, agenda de aulas, controle financeiro e sistema de assinaturas. Tecnologias: React, Node.js, Express, banco de dados relacional. Link: https://github.com/BratlowareOrg/LIFT

5. **Experiência Profissional**
   - **Auxiliar Administrativo — Grupo RCS** (alocado no Ministério da Cultura) | Nov/2023 – Abr/2024 (6 meses) | Brasília, DF
     Atuação na organização e tramitação de documentos digitais através do sistema SEI (Sistema Eletrônico de Informações), garantindo fluidez nos processos internos e conformidade com prazos.

6. **Formação**
   - Tecnólogo em Análise e Desenvolvimento de Sistemas — UniCEUB (Centro Universitário de Brasília) | jul/2024 – dez/2026
   - Curso Superior de Tecnologia, Desenvolvimento Web Full Stack — Mate Academy Brasil | mar/2025 – ago/2025

7. **Contato / Rodapé**
   - E-mail: wd.luis.campelo@gmail.com
   - Telefone: (61) 98338-1692
   - LinkedIn: linkedin.com/in/luiscampelo12
   - GitHub: github.com/LuisCampelo2
   - Ícones Lucide para cada link, sem texto genérico tipo "entre em contato" — direto ao ponto.

## Requisitos técnicos

- Código organizado em um único projeto front-end (pode ser HTML/CSS/JS puro, ou React com Vite — o que for mais simples de publicar via GitHub Pages).
- Sem dependências de backend, API externa ou variáveis de ambiente sensíveis.
- Estrutura de arquivos pronta para `gh-pages` ou branch `main` com GitHub Actions, à escolha da IA que for gerar.
- Botão de download do currículo deve apontar para um arquivo estático dentro do próprio repositório (ex: `/assets/curriculo-luis-campelo.pdf`).
- Performance: imagens (se houver) otimizadas, sem bibliotecas pesadas desnecessárias.
- Acessibilidade básica: contraste adequado (importante por ser tema escuro), textos alternativos em ícones/imagens, navegação por teclado funcional.
