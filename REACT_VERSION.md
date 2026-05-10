# Roadmap App - Versão React

Aplicação transformada para React com gerenciamento de estado, temas dark/light e persistência local.

## Estrutura

### Versão HTML Pura (versão atual)
- `index.html` - interface principal
- `styles.css` - estilos (sem tema dinâmico)
- `script.js` - lógica vanilla JS

### Versão React
- `App.jsx` - componente principal com useState para tema
- `App.css` - estilos com variáveis CSS dinâmicas (--color-bg-primary, --color-card, etc)
- `main.jsx` - entry point
- `vite.config.js` - configuração Vite
- `package.json` - dependências

## Como rodar a versão React

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build
```

## Tema Dinâmico (React)

O tema é aplicado usando `data-theme` no HTML root:

```css
[data-theme="dark"] {
  --color-bg-primary: #1f2937;
  --color-card: #1f2937;
  /* ... */
}
```

O estado React gerencia a mudança de tema:

```javascript
const [theme, setTheme] = useState('light');

useEffect(() => {
  document.documentElement.setAttribute('data-theme', theme);
}, [theme]);
```

## Persistência

- **Progresso**: salvo em `localStorage` (checks e semana atual)
- **Tema**: salvo em `localStorage` + suporta URL query parameter (`?theme=dark`)
- **Preferência do sistema**: detecta automaticamente `prefers-color-scheme`

## Créditos

Desenvolvido por **Lucasdeveng**
