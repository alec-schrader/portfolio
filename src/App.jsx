import './App.css'
import { ThemeProvider } from '@react95/core';


import Desktop from './components/Desktop'
const App = () => (
  <ThemeProvider>
    <Desktop/>
  </ThemeProvider>
);

export default App
