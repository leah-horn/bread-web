import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import { FormattedMessage } from 'react-intl';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Error from '@material-ui/icons/Error';
import Routes from './Routes';
import { login } from './dataAccess/User';

export default class Login extends React.Component {
/*  constructor(props) {
    super(props);
    this.email = React.createRef();
    this.password = React.createRef();
    this.rememberMe = React.createRef();
  }*/
  state = {
    buttonDisabled: false,
    redirect: false,
    loginError: false,
    username: "",
    password: "",
    rememberMe: "",
  };

  props = {
    nextLocation: Routes.home,
  };

  doClick = (event) => {
    event.preventDefault();
    this.setState({ buttonDisabled: true });
    if (event) {
      const { username, password, rememberMe } = this.state;
      login(username, password, rememberMe).then((result) => {
        this.setState({
          redirect: true,
        });
      }).catch(() => {
        this.setState({
          buttonDisabled: false,
          loginError: true,
          username: "",
          password: "",
        });
      });
    }
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.id === 'rememberMe' ? target.checked : target.value;
    this.setState({ [target.id]: value });
  }

  render() {
    const { nextLocation } = this.props;
    const { loginError, redirect, buttonDisabled, username, password, rememberMe} = this.state;
    if (redirect) return <Redirect to={nextLocation} />;

    return (
      <FormControl
        variant="outlined"
      >
        <TextField
          id="username"
          label={<FormattedMessage id="login.email" />}
          type="input"
          value={username}
          onChange={this.handleChange.bind('username')}
          autoComplete="username"
        />
        <TextField
          id="password"
          label={<FormattedMessage id="login.password" />}
          type="password"
          onChange={this.handleChange}
          value={password}
          autoComplete="current-password"
        />
        <FormControlLabel
          control={(
            <Checkbox
              id="rememberMe"
              onChange={this.handleChange}
              value={rememberMe}
            />
                      )}
          label={<FormattedMessage id="login.remember-me" />}
        />
        {loginError ? (
          <div>
            <Error color="error" />
            <FormattedMessage id="login.failure" />
          </div>
        ) : null}
        <Button
          variant="contained"
          onClick={this.doClick}
          disabled={buttonDisabled}
        >
          <FormattedMessage id="login.submit" />
        </Button>
      </FormControl>
    );
  }
}

Login.propTypes = {
  nextLocation: PropTypes.string,
};

Login.defaultProps = {
  nextLocation: Routes.home,
};
