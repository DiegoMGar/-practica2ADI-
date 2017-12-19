import React  from 'react'
import NavBar from './NavBar'
import ContainerApp from './ContainerApp'
import ContainerProfile from './ContainerProfile'
import LoginForm from './LoginForm'

class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {usuario_oid:null,usuario_dni:null,usuario_token:null,usuario_nombre:null,usuario_apellidos:null,wallets:[]}
        if(localStorage.getItem("usuario_oid") &&
        localStorage.getItem("usuario_dni") &&
        localStorage.getItem("usuario_nombre") &&
        localStorage.getItem("usuario_apellidos") &&
        localStorage.getItem("usuario_token")){
            this.state = {usuario_oid:localStorage.getItem("usuario_oid"),
            usuario_dni:localStorage.getItem("usuario_dni"),
            usuario_token:localStorage.getItem("usuario_token"),
            usuario_nombre:localStorage.getItem("usuario_nombre"),
            usuario_apellidos:localStorage.getItem("usuario_apellidos"),
            wallets:JSON.parse(localStorage.getItem("usuario_wallets"))}
        }
        this.login = this.login.bind(this)
        this.getUserWallets = this.getUserWallets.bind(this)
    }

    login(oid,dni,nombre,apellidos,token){
        this.getUserWallets(oid,dni,nombre,apellidos,token)
    }
    logout(){
        console.log("Logout")
        localStorage.clear()
        location.reload()
    }
    getUserWallets(oid=this.state.usuario_oid,
        dni=this.state.usuario_dni,
        nombre=this.state.usuario_nombre,
        apellidos=this.state.usuario_apellidos,
        token=this.state.usuario_token){
        var current = this
        var urlApi = 'http://127.0.0.1:3000/v1/'

        fetch(urlApi+'wallets/'+dni,{
            method:'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function(resp){
            if(resp.ok)
                return resp.json()
            else if(resp.status == 404){
                throw 'No tienes carteras, añade alguna.'
            }else
                throw 'status: '+resp.status
        })
        .then(function(resp){
            current.setState({usuario_oid:oid,usuario_dni:dni,usuario_token:token,usuario_nombre:nombre,usuario_apellidos:apellidos,wallets:resp.data})
            localStorage.setItem("usuario_wallets", JSON.stringify(resp.data));
        })
        .catch(function(error){
            current.setState({usuario_oid:oid,usuario_dni:dni,usuario_token:token,usuario_nombre:nombre,usuario_apellidos:apellidos,wallets:[]})
            localStorage.setItem("usuario_wallets", JSON.stringify([]));
        })
    }
    render() {
        var result = ([
            <NavBar key={1} usuario_dni={this.state.usuario_dni} usuario_nombre={this.state.usuario_nombre} logout={this.logout}/>,
            <LoginForm key={2} superLogin={this.login} usuario_oid={this.state.usuario_oid} />,
            <ContainerApp key={3} usuario_dni={this.state.usuario_dni} usuario_nombre={this.state.usuario_nombre} 
                usuario_oid={this.state.usuario_oid} usuario_token={this.state.usuario_token} wallets={this.state.wallets.slice()} 
                getUserWallets={this.getUserWallets}/>,
            <ContainerProfile key={4} usuario_dni={this.state.usuario_dni} usuario_nombre={this.state.usuario_nombre} 
                usuario_oid={this.state.usuario_oid} usuario_token={this.state.usuario_token} usuario_apellidos={this.state.usuario_apellidos}
                wallets={this.state.wallets.slice()} />
        ])
        
        return result
    }
}

export default Container

