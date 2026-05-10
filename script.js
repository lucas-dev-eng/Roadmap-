const weeks = [
  {
    month: 1,
    week: 1,
    title: "Python avançado — fundamentos sólidos",
    focus: "Reforçar OOP, funções de alta ordem e manipulação de dados com Python",
    hours: "8–10h",
    tasks: [
      "Revisar OOP: classes, herança, métodos especiais (__str__, __repr__, __eq__)",
      "Praticar list comprehensions, dict comprehensions e generator expressions",
      "Estudar decorators e context managers (with statement)",
      "Escrever 3 scripts Python que você reutilizaria no dia a dia"
    ],
    resources: [
      { tag: "free", name: "Python Docs — Data Model", url: "https://docs.python.org/3/reference/datamodel.html", sub: "Referência oficial: métodos especiais e como Python funciona por dentro" },
      { tag: "video", name: "Corey Schafer — OOP Series", url: "https://www.youtube.com/watch?v=ZDa-Z5JzLYM", sub: "Série de vídeos curtos, didáticos e em EN (legendas disponíveis)" },
      { tag: "free", name: "Real Python — Decorators", url: "https://realpython.com/primer-on-python-decorators/", sub: "Artigo interativo com exemplos práticos de decorators" },
      { tag: "tool", name: "Python Tutor", url: "https://pythontutor.com", sub: "Visualize a execução do seu código passo a passo no browser" }
    ],
    deliverable: "3 scripts Python documentados — prontos para colocar no GitHub",
    tip: "Não memorize sintaxe: entenda o porquê de cada padrão. Isso é o que a OpenAI avalia em entrevistas."
  },
  {
    month: 1,
    week: 2,
    title: "Algoritmos — Arrays, Strings & Big O",
    focus: "Construir raciocínio algorítmico e fluência em análise de complexidade",
    hours: "10–12h",
    tasks: [
      "Estudar Big O Notation: O(1), O(n), O(n²), O(log n) com exemplos",
      "Resolver 10 problemas LeetCode Easy: arrays e strings (Two Sum, Valid Anagram...)",
      "Praticar Two Pointers e Sliding Window básico",
      "Documentar cada solução com comentários explicando a complexidade"
    ],
    resources: [
      { tag: "free", name: "NeetCode.io — Roadmap", url: "https://neetcode.io/roadmap", sub: "O melhor mapa de estudos gratuito para algoritmos — siga a ordem dele" },
      { tag: "free", name: "LeetCode — Easy Problems", url: "https://leetcode.com/problemset/?difficulty=EASY", sub: "Filtrar por Array e String. Meta: 10 problemas esta semana" },
      { tag: "video", name: "Big O Notation — CS Dojo", url: "https://www.youtube.com/watch?v=v4cd1O4zkGw", sub: "Vídeo de 20min que explica Big O melhor que qualquer livro" },
      { tag: "book", name: "Grokking Algorithms (PDF grátis)", url: "https://edu.anarcho-copy.org/Algorithm/grokking-algorithms-illustrated-programmers-curious.pdf", sub: "Cap. 1–3 — visual, divertido, explicações claras para iniciantes" }
    ],
    deliverable: "10 soluções LeetCode comentadas, repositório 'algorithms-practice' criado no GitHub",
    tip: "Resolva problemas em voz alta ou escrevendo o raciocínio antes de codar. Isso treina a comunicação em entrevistas técnicas."
  },
  {
    month: 1,
    week: 3,
    title: "Git profissional & fluxo de trabalho",
    focus: "Dominar Git além do básico e construir hábitos de desenvolvimento profissional",
    hours: "6–8h",
    tasks: [
      "Praticar: git branch, merge, rebase, stash, cherry-pick",
      "Entender o fluxo GitHub Flow (feature branch → PR → merge)",
      "Configurar .gitignore, .gitattributes e commit messages semânticos",
      "Criar ou atualizar seu GitHub profile README com bio, projetos e badges"
    ],
    resources: [
      { tag: "free", name: "Pro Git Book (PT-BR)", url: "https://git-scm.com/book/pt-br/v2", sub: "O livro oficial do Git, gratuito online, cap. 2–3 são essenciais" },
      { tag: "video", name: "Atlassian — Git Workflows", url: "https://www.atlassian.com/git/tutorials/comparing-workflows", sub: "Explica GitHub Flow, GitFlow e quando usar cada um" },
      { tag: "tool", name: "Oh My Git! — jogo de Git", url: "https://ohmygit.org", sub: "Jogo open source para aprender Git de forma visual e prática" },
      { tag: "free", name: "GitHub Profile README — guia", url: "https://github.com/abhisheknaiidu/awesome-github-profile-readme", sub: "Coleção de exemplos de profile READMEs para se inspirar" }
    ],
    deliverable: "GitHub profile README publicado, repositórios com commits semânticos e bem documentados",
    tip: "Commit messages no padrão Conventional Commits (feat:, fix:, docs:) mostram maturidade profissional para qualquer recrutador."
  },
  {
    month: 1,
    week: 4,
    title: "Primeiro projeto real Python",
    focus: "Construir algo útil do zero, com código limpo, testes e documentação",
    hours: "10–12h",
    tasks: [
      "Escolher e desenvolver 1 projeto: CLI tool, web scraper ou automação pessoal",
      "Aplicar OOP e funções que aprendeu nas semanas anteriores",
      "Escrever testes unitários básicos com pytest",
      "Publicar no GitHub com README detalhado: o quê, por quê, como usar, como instalar"
    ],
    resources: [
      { tag: "free", name: "Real Python — Building CLI Apps", url: "https://realpython.com/python-typer-cli/", sub: "Tutorial para criar CLIs profissionais com Typer (moderno e bem documentado)" },
      { tag: "doc", name: "pytest — documentação oficial", url: "https://docs.pytest.org/en/stable/getting-started.html", sub: "Guia de início rápido — escreva seus primeiros testes em 30min" },
      { tag: "free", name: "makeareadme.com", url: "https://www.makeareadme.com", sub: "Template interativo para gerar READMEs profissionais para seu projeto" },
      { tag: "video", name: "Corey Schafer — pytest tutorial", url: "https://www.youtube.com/watch?v=cHYq1MRoyI0", sub: "Vídeo prático de 45min ensinando pytest do zero" }
    ],
    deliverable: "1 projeto Python publicado no GitHub com README, testes e instruções de uso",
    tip: "Ideias de projetos rápidos: organizador de arquivos por extensão, leitor de RSS no terminal, gerador de senhas seguras com CLI."
  },
  {
    month: 2,
    week: 5,
    title: "Anthropic API — do zero ao funcional",
    focus: "Dominar a API que você já usa e entender como construir apps com LLMs de verdade",
    hours: "10–12h",
    tasks: [
      "Ler a documentação completa: Messages API, modelos disponíveis, tokens",
      "Implementar: chat simples, streaming de respostas, system prompts",
      "Testar tool use (function calling): criar uma tool e fazer o modelo usá-la",
      "Construir um protótipo simples que resolva um problema real seu"
    ],
    resources: [
      { tag: "doc", name: "Anthropic Docs — Build with Claude", url: "https://docs.anthropic.com/en/docs/build-with-claude/overview", sub: "A documentação oficial — leia completamente, é bem escrita" },
      { tag: "doc", name: "Anthropic — Prompt Engineering", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview", sub: "Guia oficial de prompt engineering com técnicas avançadas" },
      { tag: "doc", name: "Anthropic — Tool Use", url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use/overview", sub: "Como fazer o Claude usar ferramentas externas — habilidade essencial" },
      { tag: "tool", name: "Anthropic Workbench", url: "https://console.anthropic.com/workbench", sub: "Playground oficial para testar prompts e prototipar sem escrever código" }
    ],
    deliverable: "Script Python funcional usando a API com streaming + tool use demonstrado",
    tip: "Guarde os exemplos que construir. A OpenAI valoriza experiência prática com APIs de LLMs — ter código público que prove isso é ouro."
  },
  {
    month: 2,
    week: 6,
    title: "IA no Mit-RAM Note — integração real",
    focus: "Adicionar inteligência ao seu projeto principal, tornando-o um portfólio de destaque",
    hours: "12–14h",
    tasks: [
      "Planejar qual feature de IA faz mais sentido: resumo automático, busca semântica ou sugestões",
      "Implementar a feature usando a Anthropic API (ou OpenAI API como alternativa)",
      "Garantir que a feature é útil, não só uma demo — ela deve agregar valor real",
      "Documentar no README o que a IA faz, como foi implementada e por quê"
    ],
    resources: [
      { tag: "doc", name: "Anthropic — Long context tips", url: "https://docs.anthropic.com/en/docs/build-with-claude/long-context-tips", sub: "Como lidar com documentos longos (ex: notas extensas) com a API" },
      { tag: "video", name: "Fireship — Build AI App in 12min", url: "https://www.youtube.com/watch?v=O_0CKFYHTBY", sub: "Vídeo rápido mostrando padrões modernos para apps com IA" },
      { tag: "free", name: "Simon Willison's Blog", url: "https://simonwillison.net", sub: "Blog do criador do Datasette — referência em desenvolvimento com LLMs" },
      { tag: "tool", name: "Vercel AI SDK (se usar JS/TS)", url: "https://sdk.vercel.ai/docs", sub: "SDK excelente para integrar LLMs em apps web modernos" }
    ],
    deliverable: "Feature de IA funcionando no Mit-RAM Note, publicada no GitHub com documentação da arquitetura",
    tip: "Escreva um post no Dev.to ou LinkedIn explicando 'como adicionei IA ao meu projeto'. Isso gera muito mais visibilidade do que só o código."
  },
  {
    month: 2,
    week: 7,
    title: "Como LLMs funcionam por dentro",
    focus: "Entender a arquitetura que você usa — diferencial enorme em entrevistas na OpenAI",
    hours: "8–10h",
    tasks: [
      "Assistir a série 'Neural Networks: Zero to Hero' do Karpathy (Lições 1–3)",
      "Entender: tokens, embeddings, attention mechanism, transformers em alto nível",
      "Ler o paper 'Attention is All You Need' — pelo menos abstract e introdução",
      "Anotar 5 conceitos que você aprendeu e que explicaria para outra pessoa"
    ],
    resources: [
      { tag: "video", name: "Andrej Karpathy — Neural Networks", url: "https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ", sub: "A melhor série gratuita do mundo sobre como LLMs funcionam. Essencial." },
      { tag: "video", name: "3Blue1Brown — Transformers", url: "https://www.youtube.com/watch?v=wjZofJX0v4M", sub: "Visualização genial de como o mecanismo de atenção funciona (26min)" },
      { tag: "book", name: "Attention is All You Need (paper)", url: "https://arxiv.org/abs/1706.03762", sub: "O paper original dos Transformers — leia o abstract, intro e conclusão" },
      { tag: "free", name: "Illustrated Transformer — Jay Alammar", url: "https://jalammar.github.io/illustrated-transformer/", sub: "A melhor explicação visual de Transformers que existe na internet" }
    ],
    deliverable: "Resumo pessoal de 1 página explicando como LLMs funcionam — em suas próprias palavras",
    tip: "Você não precisa implementar um Transformer do zero. Mas entender o conceito de atenção e embeddings muda completamente como você usa e constrói com LLMs."
  },
  {
    month: 2,
    week: 8,
    title: "Machine Learning na prática",
    focus: "Colocar a mão na massa com ML — criar um projeto que demonstre compreensão real",
    hours: "10–12h",
    tasks: [
      "Completar fast.ai Lesson 1: treinar um modelo de classificação de imagens",
      "Experimentar com Hugging Face: carregar um modelo pré-treinado e fazer inferência",
      "Criar 1 notebook Jupyter documentado com um experimento completo",
      "Publicar o notebook no GitHub com README e link para Kaggle ou Colab"
    ],
    resources: [
      { tag: "free", name: "fast.ai — Practical Deep Learning", url: "https://course.fast.ai", sub: "O curso mais prático e direto ao ponto de deep learning. Gratuito, top-tier." },
      { tag: "doc", name: "Hugging Face — Quick Tour", url: "https://huggingface.co/docs/transformers/quicktour", sub: "Como usar modelos pré-treinados em 10 linhas de código" },
      { tag: "tool", name: "Google Colab", url: "https://colab.research.google.com", sub: "GPU gratuita no browser — use para rodar seus notebooks de ML" },
      { tag: "free", name: "Kaggle — Intro to ML", url: "https://www.kaggle.com/learn/intro-to-machine-learning", sub: "Micro-curso gratuito com exercícios práticos e certificado" }
    ],
    deliverable: "Notebook publicado no GitHub demonstrando treinamento ou inferência com um modelo real",
    tip: "Kaggle competitions são excelentes para o portfólio. Mesmo participar sem ganhar mostra iniciativa e capacidade técnica."
  },
  {
    month: 3,
    week: 9,
    title: "LinkedIn — presença profissional sólida",
    focus: "Transformar seu LinkedIn em um ativo que trabalha por você",
    hours: "6–8h",
    tasks: [
      "Escrever headline com cargo-alvo + habilidades chave (ex: 'Software Engineering Student | Python · AI · APIs')",
      "Redigir Summary em EN bilíngue: quem você é, o que constrói, onde quer chegar",
      "Adicionar todos os projetos do GitHub como 'Projetos' no LinkedIn com links",
      "Conectar com 20+ pessoas: devs, recrutadores tech e profissionais da OpenAI/Anthropic"
    ],
    resources: [
      { tag: "free", name: "LinkedIn for Developers — guia", url: "https://www.linkedin.com/help/linkedin/answer/a548441", sub: "Como adicionar projetos e habilidades técnicas de forma eficaz" },
      { tag: "video", name: "Jeff Su — LinkedIn Profile Tips", url: "https://www.youtube.com/watch?v=BcfGWi8Qywk", sub: "Vídeo prático de 15min com dicas reais de otimização de perfil" },
      { tag: "free", name: "Resumé Worded — LinkedIn Analyzer", url: "https://resumeworded.com/linkedin-review", sub: "Ferramenta gratuita que pontua e sugere melhorias no seu perfil" },
      { tag: "tool", name: "Huntr — Job tracker", url: "https://huntr.co", sub: "Organize candidaturas, contatos e follow-ups em um kanban gratuito" }
    ],
    deliverable: "LinkedIn completo, bilíngue, com projetos linkados e 100+ conexões relevantes",
    tip: "Siga e interaja com posts de devs da OpenAI, Anthropic e DeepMind. Comentários inteligentes em posts relevantes geram visibilidade real."
  },
  {
    month: 3,
    week: 10,
    title: "GitHub showcase — portfólio que convence",
    focus: "Fazer seus repositórios contarem uma história profissional coerente",
    hours: "8–10h",
    tasks: [
      "Eleger 3 projetos principais — reorganizar com README detalhado em cada um",
      "Criar GitHub profile README com stats, projetos em destaque e bio técnica",
      "Configurar GitHub Pages para pelo menos 1 projeto (site demonstrável)",
      "Arquivar repos antigos ou incompletos que prejudicam a imagem do perfil"
    ],
    resources: [
      { tag: "free", name: "Awesome GitHub Profile README", url: "https://github.com/abhisheknaiidu/awesome-github-profile-readme", sub: "Exemplos reais para se inspirar — veja os que têm mais stars" },
      { tag: "tool", name: "GitHub Stats — readme-stats", url: "https://github.com/anuraghazra/github-readme-stats", sub: "Widgets de stats para seu profile README — simples de adicionar" },
      { tag: "free", name: "GitHub Pages — documentação", url: "https://pages.github.com", sub: "Como publicar um site a partir de qualquer repositório gratuitamente" },
      { tag: "tool", name: "Shields.io — badges", url: "https://shields.io", sub: "Adicione badges de tecnologias, licença e status ao README dos projetos" }
    ],
    deliverable: "Profile README publicado, 3 repositórios com README profissional e pelo menos 1 projeto no GitHub Pages",
    tip: "Qualidade supera quantidade. 3 projetos bem documentados e com propósito claro valem mais que 20 repositórios de tutorial."
  },
  {
    month: 3,
    week: 11,
    title: "Currículo técnico & candidaturas",
    focus: "Construir um CV que passe pelo ATS e convença um engenheiro em 30 segundos",
    hours: "8–10h",
    tasks: [
      "Montar currículo de 1 página em EN com seções: Summary, Skills, Projects, Education",
      "Usar verbos de ação quantificados: 'Built X that reduced Y by Z%'",
      "Adaptar o CV para vagas de estágio e junior dev no Brasil e global",
      "Enviar 5+ candidaturas: LinkedIn, Gupy, Indeed, Greenhouse (OpenAI usa isso)"
    ],
    resources: [
      { tag: "free", name: "Harvard Resume Guide (PDF)", url: "https://ocs.fas.harvard.edu/files/ocs/files/hes-resume-cover-letter-guide.pdf", sub: "O template mais limpo e universalmente aceito — use como base" },
      { tag: "tool", name: "Resumé Worded — CV Analyzer", url: "https://resumeworded.com", sub: "Analisa seu CV contra ATS e sugere melhorias com nota" },
      { tag: "free", name: "levels.fyi — Remote Jobs", url: "https://www.levels.fyi/jobs", sub: "Vagas em empresas de tech com salários transparentes — inclui remote para BR" },
      { tag: "free", name: "Gupy — Vagas BR", url: "https://portal.gupy.io", sub: "Principal plataforma de vagas tech no Brasil com foco em estágios e júnior" }
    ],
    deliverable: "CV técnico em EN finalizado, 5+ candidaturas enviadas e registradas no Huntr",
    tip: "Para a OpenAI: monitore openai.com/careers e ative alertas no LinkedIn. Muitas vagas são preenchidas por indicação — conexões que fez no LinkedIn importam aqui."
  },
  {
    month: 3,
    week: 12,
    title: "Open source & presença técnica pública",
    focus: "Fazer sua primeira contribuição open source e consolidar sua presença como dev",
    hours: "10–12h",
    tasks: [
      "Encontrar um repositório para contribuir: boa documentação, issue marcada como 'good first issue'",
      "Fazer 1 PR real: bug fix, melhoria de documentação ou novo teste",
      "Publicar 1 post técnico no LinkedIn ou Dev.to sobre algo que aprendeu nesses 3 meses",
      "Revisar todo o roadmap: o que fez, o que aprendeu, o que ajustar para os próximos 3 meses"
    ],
    resources: [
      { tag: "free", name: "Good First Issue", url: "https://goodfirstissue.dev", sub: "Curadoria de issues de repos open source marcadas como boas para iniciantes" },
      { tag: "free", name: "Up For Grabs", url: "https://up-for-grabs.net", sub: "Outro diretório de issues abertas em projetos open source ativos" },
      { tag: "free", name: "Dev.to — Create Account", url: "https://dev.to", sub: "Plataforma de posts técnicos com boa audiência para devs iniciantes" },
      { tag: "doc", name: "How to Contribute to Open Source", url: "https://opensource.guide/how-to-contribute/", sub: "Guia oficial do GitHub sobre como fazer sua primeira contribuição com qualidade" }
    ],
    deliverable: "1 PR merged no GitHub, 1 post técnico publicado, revisão do roadmap escrita",
    tip: "O post técnico não precisa ser perfeito. 'O que aprendi sobre LLMs em 3 meses' escrito de forma honesta gera mais engajamento real do que tutoriais polidos."
  }
];

const STORAGE_KEY = 'roadmapAppState';
const THEME_STORAGE_KEY = 'roadmapAppTheme';
let current = 0;
let theme = 'dark';
const checks = {};

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;
    const state = JSON.parse(saved);
    if (typeof state.current === 'number' && state.current >= 0 && state.current < weeks.length) {
      current = state.current;
    }
    if (state.checks && typeof state.checks === 'object') {
      Object.assign(checks, state.checks);
    }
  } catch (error) {
    console.warn('Falha ao carregar progresso local:', error);
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ current, checks }));
  } catch (error) {
    console.warn('Falha ao salvar progresso local:', error);
  }
}

function loadTheme() {
  try {
    const url = new URL(window.location.href);
    const themeQuery = url.searchParams.get('theme');
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (themeQuery === 'dark' || themeQuery === 'light') {
      theme = themeQuery;
    } else if (savedTheme === 'dark' || savedTheme === 'light') {
      theme = savedTheme;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme = 'dark';
    }
  } catch (error) {
    console.warn('Falha ao carregar o tema:', error);
  }
  applyTheme();
}

function saveTheme() {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (error) {
    console.warn('Falha ao salvar o tema:', error);
  }
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', theme);
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.textContent = theme === 'dark' ? 'Tema claro' : 'Tema escuro';
  }
}

function toggleTheme() {
  theme = theme === 'dark' ? 'light' : 'dark';
  applyTheme();
  saveTheme();
}


function init() {
  loadTheme();
  loadState();
  const nav = document.getElementById('week-nav');
  const pages = document.getElementById('week-pages');

  weeks.forEach((week, index) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `nav-btn m${week.month}${index === current ? ' active' : ''}`;
    btn.id = `nav-${index}`;
    btn.textContent = `S${week.week}`;
    btn.addEventListener('click', () => goto(index));
    nav.appendChild(btn);

    const page = document.createElement('article');
    page.className = `week-page${index === current ? ' active' : ''}`;
    page.id = `page-${index}`;

    const tasksHtml = week.tasks.map((task, taskIndex) => {
      const id = `ck-${index}-${taskIndex}`;
      return `
        <div class="task-row" id="tr-${id}">
          <input type="checkbox" id="${id}" onchange="toggleCheck('${id}')" />
          <label for="${id}">${task}</label>
        </div>
      `;
    }).join('');

    const resourcesHtml = week.resources.map(resource => `
      <div class="res-item">
        <span class="res-tag tag-${resource.tag}">${resource.tag}</span>
        <div>
          <div class="res-text"><a href="${resource.url}" target="_blank" rel="noopener">${resource.name}</a></div>
          <div class="res-sub">${resource.sub}</div>
        </div>
      </div>
    `).join('');

    page.innerHTML = `
      <div class="week-top">
        <span class="week-tag wt-m${week.month}">Mês ${week.month} · Semana ${week.week}</span>
        <h2 class="week-title">${week.title}</h2>
        <p class="week-focus">${week.focus}</p>
        <div class="hours-badge"><span class="h-dot"></span>${week.hours} de estudo estimado</div>
      </div>
      <div class="grid">
        <section class="card">
          <div class="card-label">Tarefas da semana</div>
          ${tasksHtml}
        </section>
        <section class="card">
          <div class="card-label">Recursos específicos</div>
          ${resourcesHtml}
        </section>
        <section class="card grid-full">
          <div class="deliverable-box">
            <div class="dl-label">Entregável</div>
            <div class="dl-text">${week.deliverable}</div>
          </div>
          <div class="tip-box">Dica: ${week.tip}</div>
        </section>
      </div>
    `;

    pages.appendChild(page);
  });

  restoreChecks();
  updateProgress();
  updateNavButtons();

  const themeToggleBtn = document.getElementById('theme-toggle');
  if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
}

function goto(index) {
  document.getElementById(`page-${current}`).classList.remove('active');
  document.getElementById(`nav-${current}`).classList.remove('active');
  current = index;
  document.getElementById(`page-${current}`).classList.add('active');
  document.getElementById(`nav-${current}`).classList.add('active');
  restoreChecks();
  updateNavButtons();
  saveState();
}

function navigate(direction) {
  const nextIndex = current + direction;
  if (nextIndex >= 0 && nextIndex < weeks.length) {
    goto(nextIndex);
  }
}

function updateNavButtons() {
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === weeks.length - 1;
}

function toggleCheck(id) {
  const checkbox = document.getElementById(id);
  const row = document.getElementById(`tr-${id}`);
  checks[id] = checkbox.checked;

  if (checkbox.checked) {
    row.classList.add('done');
  } else {
    row.classList.remove('done');
  }

  updateProgress();
  saveState();
}

function restoreChecks() {
  weeks[current].tasks.forEach((_, taskIndex) => {
    const id = `ck-${current}-${taskIndex}`;
    const checkbox = document.getElementById(id);
    const row = document.getElementById(`tr-${id}`);
    if (!checkbox) return;

    if (checks[id]) {
      checkbox.checked = true;
      row.classList.add('done');
    } else {
      checkbox.checked = false;
      row.classList.remove('done');
    }
  });
}

function updateProgress() {
  const totalTasks = weeks.reduce((sum, week) => sum + week.tasks.length, 0);
  const finishedTasks = Object.values(checks).filter(Boolean).length;
  const percent = totalTasks ? Math.round((finishedTasks / totalTasks) * 100) : 0;

  document.getElementById('prog-fill').style.width = `${percent}%`;
  document.getElementById('prog-pct').textContent = `${percent}% concluído`;
  document.getElementById('prog-label').textContent = `Semana ${current + 1} de 12`;
}

window.addEventListener('DOMContentLoaded', init);
