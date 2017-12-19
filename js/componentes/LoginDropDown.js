import React  from 'react'

class LoginDropDown extends React.Component {
    constructor(props) {
        super(props)
        this.login = this.login.bind(this)
        this.registro = this.registro.bind(this)
    }

    login() {
        console.log("Cambio a login")
        
    }
    registro() {
        console.log("Cambio a registro")
        
    }

    render() {
        return <li><a href="#" id={this.props.id} onClick={this.props.loginClic? this.login : this.registro}>{this.props.nombre}</a></li>
    }
}

export default LoginDropDown

