import React from 'react'
import LoginDropDown from './LoginDropDown'

class NuevoUsuarioMenu extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if(this.props.usuarioLogin){
            return <li id="componenteUsuarioMenu" className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    {this.props.usuario_nombre} <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                    <li><a href="#" onClick={this.props.clickProfile} >Actualizar Perfil</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#" onClick={this.props.logout}>Logout</a></li>
                </ul>
            </li>
        }else{
            return <li id="componenteUsuarioMenu" className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" >
                Acceder <span className="caret"></span>
            </a>
            <ul className="dropdown-menu">
                <LoginDropDown nombre={"Registrarse"} id={"linkRegistro"} loginClic={false}/>
                <li role="separator" className="divider"></li>
                <LoginDropDown nombre={"Login"} id={"linkLogin"} loginClic={true} />
            </ul>
            </li>
        }
    }
}

export default NuevoUsuarioMenu