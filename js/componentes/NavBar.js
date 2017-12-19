import React  from 'react'
import NuevoUsuarioMenu from './NuevoUsuarioMenu'

class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    clickProfile(){
        $("#containerProfile").slideToggle();
        $("#containerApp").slideToggle();
    }

    render() {
        var misCarteras = <li className="active">
        <a href="#">
        Mis carteras</a></li>
        
        return <nav className="navbar navbar-inverse navbar-static-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Crypto Market</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            {misCarteras}
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="https://github.com/DiegoMGar/practica2ADI.git" target="_blank">About Us</a></li>
                            <NuevoUsuarioMenu usuarioLogin={this.props.usuario_dni} usuario_nombre={this.props.usuario_nombre}
                            logout={this.props.logout} clickProfile={this.clickProfile}/>
                        </ul>
                    </div>
                </div>
            </nav>
    }
}

export default NavBar

