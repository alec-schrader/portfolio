import './App.css'
import { ThemeProvider, GlobalStyle } from '@react95/core';


import Desktop from './components/Desktop'
const App = () => (
  <ThemeProvider theme='storm'>
    <GlobalStyle></GlobalStyle>
    <Desktop />
  </ThemeProvider>
);

export default App
