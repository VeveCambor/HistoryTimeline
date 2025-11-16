export const theme = {
  colors: {
    primary: '#667eea',
    primaryDark: '#764ba2',
    primaryLight: 'rgba(102, 126, 234, 0.1)',
    primaryGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    
    secondary: '#ffd700',
    secondaryLight: 'rgba(255, 215, 0, 0.05)',
    secondaryShadow: 'rgba(255, 215, 0, 0.3)',
    
    white: '#ffffff',
    background: '#f5f5f5',
    border: '#e0e0e0',
    borderLight: 'rgba(0, 0, 0, 0.2)',
    
    text: {
      primary: '#333333',
      secondary: '#666666',
      light: 'rgba(255, 255, 255, 0.9)',
    },
    
    periods: {
      all: '#667eea',
      prehistory: '#8B4513',
      ancient: '#CD853F',
      medieval: '#4169E1',
      modern: '#9370DB',
      contemporary: '#FF6347',
    },
  },
  
  shadows: {
    sm: '0 2px 10px rgba(0, 0, 0, 0.1)',
    md: '0 4px 20px rgba(0, 0, 0, 0.1)',
    lg: '0 4px 12px rgba(0, 0, 0, 0.15)',
    primary: '0 4px 12px rgba(102, 126, 234, 0.3)',
    primaryGlow: '0 4px 12px rgba(102, 126, 234, 0.4)',
    secondary: '0 4px 12px rgba(255, 215, 0, 0.3)',
    secondaryGlow: '0 4px 12px rgba(255, 215, 0, 0.4)',
  },
  
  borderRadius: {
    sm: '6px',
    md: '8px',
    lg: '12px',
    xl: '20px',
    full: '50%',
  },
  
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
}

export type Theme = typeof theme

