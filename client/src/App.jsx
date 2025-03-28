import { useState, createContext, useContext } from 'react'
import './App.css'
import AppCart from './pages/appCart/AppCart.jsx'
import AppWeb from './pages/appWeb/AppWeb.jsx';
// Crear el contexto para el tema
export const ThemeContext = createContext();

// Componente proveedor de tema
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para usar el tema
export const useTheme = () => useContext(ThemeContext);

function App() {
  return (
    <ThemeProvider>
      <AppCart />
      {/* <AppWeb /> */}
    </ThemeProvider>
  )
}

export default App;