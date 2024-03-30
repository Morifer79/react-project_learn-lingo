import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/theme';
import { GlobalStyle } from 'components/GlobalStyle';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import './firebase';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename="/react-project_learn-lingo">
          <App />
          <Toaster
            toastOptions={{
              success: {
                iconTheme: { primary: 'green', secondary: 'white' },
                style: { color: 'white', background: '#38CD3E' },
              },
              error: {
                iconTheme: { primary: 'red', secondary: 'white' },
                style: { color: 'white', background: 'red' },
              },
            }}
          />
          <GlobalStyle />
        </BrowserRouter>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);
