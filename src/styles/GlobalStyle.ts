import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    /* Primary Colors */
    --color-primary: #667eea;
    --color-primary-dark: #764ba2;
    --color-primary-light: rgba(102, 126, 234, 0.1);
    --color-primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    
    /* Secondary Colors */
    --color-secondary: #ffd700;
    --color-secondary-light: rgba(255, 215, 0, 0.05);
    --color-secondary-shadow: rgba(255, 215, 0, 0.3);
    
    /* Neutral Colors */
    --color-white: #ffffff;
    --color-background: #f5f5f5;
    --color-border: #e0e0e0;
    --color-border-light: rgba(0, 0, 0, 0.2);
    
    /* Text Colors */
    --color-text-primary: #333333;
    --color-text-secondary: #666666;
    --color-text-light: rgba(255, 255, 255, 0.9);
    
    /* Shadow Colors */
    --shadow-sm: 0 2px 10px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 20px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 4px 12px rgba(0, 0, 0, 0.15);
    --shadow-primary: 0 4px 12px rgba(102, 126, 234, 0.3);
    --shadow-primary-glow: 0 4px 12px rgba(102, 126, 234, 0.4);
    --shadow-secondary: 0 4px 12px rgba(255, 215, 0, 0.3);
    --shadow-secondary-glow: 0 4px 12px rgba(255, 215, 0, 0.4);
    
    /* Historical Period Colors */
    --color-period-all: #667eea;
    --color-period-prehistory: #8B4513;
    --color-period-ancient: #CD853F;
    --color-period-medieval: #4169E1;
    --color-period-modern: #9370DB;
    --color-period-contemporary: #FF6347;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--color-background);
    color: var(--color-text-primary);
  }

  #root {
    min-height: 100vh;
  }
`

export default GlobalStyle

