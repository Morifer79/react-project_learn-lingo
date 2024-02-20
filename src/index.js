import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/theme';
import { GlobalStyle } from 'components/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/react-project_learn-lingo">
        <App />
        <Toaster />
        <GlobalStyle/>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
