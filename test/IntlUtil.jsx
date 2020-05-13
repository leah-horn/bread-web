import React from 'react';
import {render as rtlRender} from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import en from '../src/translations/en'

export default function renderIntl(ui, { locale = 'en', ...renderOptions } = {}) {
  function Wrapper({children}) {
    return <IntlProvider locale={locale} messages={en}>{children}</IntlProvider>;
  }
  return rtlRender(ui, {wrapper: Wrapper, ...renderOptions});
}

