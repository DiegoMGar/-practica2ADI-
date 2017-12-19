import React  from 'react'
import $ from 'jquery'; 

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.submitLogin = this.submitLogin.bind(this)
        this.submitRegistro = this.submitRegistro.bind(this)
    }
    submitLogin(){
        var current = this
        var urlApi = 'http://127.0.0.1:3000/v1/'
        var data = {dni:$('#dniLogin').val(),
        password:$('#passwordLogin').val()}

        fetch(urlApi+'users/login',{
            body:JSON.stringify(data),
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function(resp){
            if(resp.ok)
                return resp.json()
            else
                throw 'status: '+resp.status
        })
        .then(function(resp){
            localStorage.setItem("usuario_oid", resp.data._id);
            localStorage.setItem("usuario_dni", resp.data.dni);
            localStorage.setItem("usuario_nombre", resp.data.nombre);
            localStorage.setItem("usuario_apellidos", resp.data.apellidos);
            localStorage.setItem("usuario_token", resp.token);
            swal(
            'Correcto',
            'Has accedido correctamente',
            'success'
            ).then(function(resp2){
                if(resp2){
                    current.props.superLogin(resp.data._id,resp.data.dni,resp.data.nombre,resp.data.apellidos,resp.token)
                }
            })
        })
        .catch(function(error){
            swal(
            'Ooppss...',
            'Algo ha ido mal: '+error,
            'error'
            )
        })
    }
    submitRegistro(){
        var urlApi = 'http://127.0.0.1:3000/v1/'
        var data = {dni:$('#dniRegistro').val(),
        nombre:$('#nombreRegistro').val(),
        apellidos:$('#apellidosRegistro').val(),
        password:$('#passwordRegistro').val()}

        fetch(urlApi+'users',{
            body:JSON.stringify(data),
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function(resp){
            if(resp.ok)
                return resp.json()
            else
                throw 'status: '+resp.status
        })
        .then(function(resp){
            var linkLogin = document.getElementById("linkLogin")
            linkLogin.click()
            swal(
            'Correcto',
            'Te has registrado correctamente',
            'success'
            )
        })
        .catch(function(error){
            swal(
            'Ooppss...',
            'Algo ha ido mal: '+error,
            'error'
            )
        })
    }
    render() {
        return <div className="container" id="containerFormAcceso">
            <div id="containerFormLogin" key={1}>
                <h2>Login</h2>
                <form id="formLogin" >
                    <div className="form-group" key={1}>
                        <label htmlFor="nombreUsuario">DNI</label>
                        <input type="text" className="form-control" id="dniLogin" name="dniLogin" placeholder="DNI del usuario"/>
                    </div>
                    <div className="form-group" key={2}>
                        <label htmlFor="nombreUsuario">Password</label>
                        <input type="password" className="form-control" id="passwordLogin" name="passwordLogin" placeholder="*******"/>
                    </div>
                    <div className="form-group" key={3}>
                        <button className="btn btn-success" id="buttonLogin"
                        onClick={this.submitLogin} >
                        Login
                        </button>
                    </div>
                </form>
            </div>
            <div id="containerFormRegistro" key={2}>
                <h2>Registro</h2>
                <form id="formRegistro">
                    <div className="form-group" key={4}>
                        <label htmlFor="nombreUsuario">Nombre</label>
                        <input type="text" className="form-control" id="nombreRegistro" name="nombreRegistro" placeholder="Pepe"/>
                    </div>
                    <div className="form-group" key={5}>
                        <label htmlFor="nombreUsuario">Apellidos</label>
                        <input type="text" className="form-control" id="apellidosRegistro" name="apellidosRegistro" placeholder="Pérez"/>
                    </div>
                    <div className="form-group" key={6}>
                        <label htmlFor="nombreUsuario">DNI</label>
                        <input type="text" className="form-control" id="dniRegistro" name="dniRegistro" placeholder="123456789X"/>
                    </div>
                    <div className="form-group" key={2}>
                        <label htmlFor="nombreUsuario">Password</label>
                        <input type="password" className="form-control" id="passwordRegistro" name="passwordRegistro" placeholder="*******"/>
                    </div>
                    <div className="form-group" key={3}>
                        <button className="btn btn-success" id="buttonRegistro"
                        onClick={this.submitRegistro} >
                        Registro
                        </button>
                    </div>
                </form>
            </div>
        </div>
    }
}

export default LoginForm

