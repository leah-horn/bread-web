import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import { FormattedMessage } from 'react-intl';


export default class Login extends React.Component {
    render() {
        return (
            <FormControl>
                <TextField
                    id="email"
                    label={<FormattedMessage id="login.email" />}
                    type="input"
                    autoComplete="username"
                />
                <TextField
                    id="password"
                    label={<FormattedMessage id="login.password" />}
                    type="password"
                    autoComplete="current-password"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            id="remember-me"
                        />
                    }
                    label={<FormattedMessage id="login.remember-me" />}
                />
                <Button variant="contained">
                    <FormattedMessage id="login.submit" />
                </Button>
            </FormControl>
        );
    }
}