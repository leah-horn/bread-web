import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import messagesEn from './translations/en.json';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'whatwg-fetch';

const messages = {
  en: messagesEn,
};
const language = navigator.language.split(/[-_]/)[0];

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={language} messages={messages[language]}>
      <App />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
