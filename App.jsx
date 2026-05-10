import React, { useMemo, useState, useEffect } from 'react';
import './App.css';
import weeks from './weeksData.js';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [current, setCurrent] = useState(0);
  const [checks, setChecks] = useState({});
  const [navDirection, setNavDirection] = useState(1);

  // Carregar estado do localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('roadmapAppState');
      if (saved) {
        const state = JSON.parse(saved);
        if (typeof state.current === 'number' && state.current < weeks.length) {
          setCurrent(state.current);
        }
        if (state.checks) {
          setChecks(state.checks);
        }
      }
    } catch (error) {
      console.warn('Falha ao carregar progresso:', error);
    }

    // Carregar tema
    try {
      const url = new URL(window.location.href);
      const themeQuery = url.searchParams.get('theme');
      const savedTheme = localStorage.getItem('roadmapAppTheme');
      if (themeQuery === 'dark' || themeQuery === 'light') {
        setTheme(themeQuery);
      } else if (savedTheme === 'dark' || savedTheme === 'light') {
        setTheme(savedTheme);
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
      }
    } catch (error) {
      console.warn('Falha ao carregar tema:', error);
    }
  }, []);

  // Aplicar tema
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('roadmapAppTheme', theme);
  }, [theme]);

  // Salvar estado
  useEffect(() => {
    try {
      localStorage.setItem('roadmapAppState', JSON.stringify({ current, checks }));
    } catch (error) {
      console.warn('Falha ao salvar progresso:', error);
    }
  }, [current, checks]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleCheck = (id) => {
    setChecks(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const goto = (index) => {
    if (index >= 0 && index < weeks.length) {
      setNavDirection(index >= current ? 1 : -1);
      setCurrent(index);
    }
  };

  const navigate = (direction) => {
    const nextIndex = current + direction;
    goto(nextIndex);
  };

  const updateProgress = () => {
    const totalTasks = weeks.reduce((sum, week) => sum + week.tasks.length, 0);
    const finishedTasks = Object.values(checks).filter(Boolean).length;
    return totalTasks ? Math.round((finishedTasks / totalTasks) * 100) : 0;
  };

  const week = useMemo(() => weeks[current], [current]);
  const percent = useMemo(() => updateProgress(), [checks]);

  return (
    <div className="app">
      <header className="header">
        <div>
          <p className="eyebrow">Roadmap</p>
          <h1>Plano de 12 semanas para Software Engineering</h1>
          <p className="subtitle">
            Acompanhe tarefas, recursos e entregáveis semana a semana, com foco em Python, algoritmos, IA, portfólio e carreira.
          </p>
        </div>
        <div className="theme-controls">
          <button onClick={toggleTheme} className="theme-btn">
            Tema {theme === 'dark' ? 'claro' : 'escuro'}
          </button>
        </div>
      </header>

      <section className="progress-card">
        <div className="progress-info">
          <span id="prog-label">Semana {current + 1} de {weeks.length}</span>
          <span id="prog-pct">{percent}% concluído</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${percent}%` }}></div>
        </div>
      </section>

      <nav className="nav">
        {weeks.map((w, index) => (
          <button
            key={index}
            onClick={() => goto(index)}
            className={`nav-btn ${index === current ? 'active' : ''}`}
          >
            S{w.week}
          </button>
        ))}
      </nav>

      <section
        key={current}
        className={`week-page ${navDirection > 0 ? 'from-right' : 'from-left'}`}
      >
        <div className="week-top">
          <span className={`week-tag wt-m${week.month}`}>
            Mês {week.month} · Semana {week.week}
          </span>
          <h2 className="week-title">{week.title}</h2>
          <p className="week-focus">{week.focus}</p>
          <div className="hours-badge">
            <span className="h-dot"></span>
            {week.hours} de estudo estimado
          </div>
        </div>

        <div className="grid">
          <section className="card">
            <div className="card-label">Tarefas da semana</div>
            {week.tasks.map((task, taskIndex) => {
              const id = `ck-${current}-${taskIndex}`;
              return (
                <div key={id} className={`task-row ${checks[id] ? 'done' : ''}`}>
                  <input
                    type="checkbox"
                    id={id}
                    checked={!!checks[id]}
                    onChange={() => toggleCheck(id)}
                  />
                  <label htmlFor={id}>{task}</label>
                </div>
              );
            })}
          </section>

          <section className="card">
            <div className="card-label">Recursos específicos</div>
            {week.resources.map((resource, idx) => (
              <div key={idx} className="res-item">
                <span className={`res-tag tag-${resource.tag}`}>{resource.tag}</span>
                <div>
                  <div className="res-text">
                    <a href={resource.url} target="_blank" rel="noopener">
                      {resource.name}
                    </a>
                  </div>
                  <div className="res-sub">{resource.sub}</div>
                </div>
              </div>
            ))}
          </section>

          <section className="card grid-full">
            <div className="deliverable-box">
              <div className="dl-label">Entregável</div>
              <div className="dl-text">{week.deliverable}</div>
            </div>
            <div className="tip-box">Dica: {week.tip}</div>
          </section>
        </div>
      </section>

      <div className="nav-arrows">
        <button
          onClick={() => navigate(-1)}
          disabled={current === 0}
        >
          ← anterior
        </button>
        <button
          onClick={() => navigate(1)}
          disabled={current === weeks.length - 1}
        >
          próxima →
        </button>
      </div>

      <section className="help-card">
        <p>
          Use essa aplicação para transformar seu plano semanal em um acompanhamento visual,
          com checklists, recursos e entregáveis.
        </p>
        <p className="help-note">
          Dica: marque as tarefas concluídas para ver seu progresso atualizado em tempo real.
        </p>
      </section>

      <footer className="app-credit">Desenvolvido por Lucasdeveng</footer>
    </div>
  );
}
