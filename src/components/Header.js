import React, { Component } from 'react';

class Header extends Component{//eslint-disable-next-line
    render(){
        return <header className="mb-auto">
            <nav className="navbar fixed-top navbar-expand navbar-dark bg-dark justify-content-center">
                <ul className="navbar-nav h6">
                    <li className="nav-item">
                        <a className="nav-link" href="#a">Perfil</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#a">Formação</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#a">Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
    }
}
export default Header;