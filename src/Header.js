import React from 'react';
import MoreMenu from './MoreMenu'
import './Header.css'

export default class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <MoreMenu />
            </div>);
    }
}