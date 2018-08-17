import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import StoreProvider, { defaultClient } from './services/Provider';

ReactDOM.render(
  <StoreProvider client={defaultClient}>
    <App />
  </StoreProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
