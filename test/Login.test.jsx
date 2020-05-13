/* global test, expect */

import React from 'react';
import { render } from '@testing-library/react';
import Login from '../src/Login';
import renderIntl from './IntlUtil'

jest.mock('../src/dataAccess/User')
import { login } from '../src/dataAccess/User';

describe('<Login />', () => {
  let mount;
  let classes;

  it('renders an e-mail field', () => {
    const { getByLabelText } = renderIntl(<Login />);
    const emailField = getByLabelText('E-Mail');
    expect(emailField).toBeInTheDocument();
  });

  it('renders a password field', () => {
    const { getByLabelText } = renderIntl(<Login />);
    const passwordField = getByLabelText('Password');
    expect(passwordField).toBeInTheDocument();
  });

  it('renders a login button', () => {
    const { getByRole } = renderIntl(<Login />);
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
  });

  describe('Login Button', () => {

    it('enables login button by default', () => {
      const { getByRole } = renderIntl(<Login />);
      const button = getByRole('button');
      expect(button).toBeEnabled();
    });

    it('disables login button after click', () => {
      const { getByRole } = renderIntl(<Login />);
      const button = getByRole('button');
      login.mockReturnValue(new Promise(() => {}));
      button.click();
      expect(button).toBeDisabled();
    });

    describe('Login failure', () => {

      let button;
      let rendering;
      beforeEach(() => {
        rendering = renderIntl(<Login />);
        button = rendering.getByRole('button');
        let loginPromise;
        login.mockReturnValue(new Promise((resolve, reject) => { loginPromise = reject; }));
        button.click();
        loginPromise();
      });

      it('reenables login button after failed login', () => {
        expect(button).toBeEnabled();
      });

      it('reenables login button after failed login', () => {
        expect(rendering.getByText('Either e-mail or password were invalid')).toBeInTheDocument();
      });
    });

    /*
     mock out the router

    describe('Login success', () => {

      let button;
      let rendering;
      beforeEach(() => {
        rendering = renderIntl(<Login nextLocation="next" />);
        button = rendering.getByRole('button');
        let loginPromise;
        login.mockReturnValue(new Promise((resolve) => { loginPromise = resolve; }));
        button.click();
        loginPromise();
      });

      it('reenables login button after failed login', () => {
        expect(button).toBeEnabled();
      });
    });
    */
  });
});

