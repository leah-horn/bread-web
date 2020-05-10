import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Routes from './Routes';

import './MoreMenu.css';

export default class MoreMenu extends React.Component {
    state = {
      anchorEl: null,
    };

    doOpen = (event) => {
      this.setState({ anchorEl: event.currentTarget });
    }

    doClose = () => {
      this.setState({ anchorEl: null });
    }

    render() {
      const { anchorEl } = this.state;
      return (
        <div>
          <IconButton
            onClick={this.doOpen}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.doClose}
          >
            <MenuItem
              onClick={this.doClose}
              divider="true"
            >
              <Link className="MoreMenu" to={Routes.profile}>
                <FormattedMessage id="more-menu.profile" />
              </Link>
            </MenuItem>
            <MenuItem
              to={Routes.logout}
              onClick={this.doClose}
            >
              <Link className="MoreMenu" to={Routes.logout}>
                <FormattedMessage id="more-menu.logout" />
              </Link>
            </MenuItem>
          </Menu>
        </div>
      );
    }
}
