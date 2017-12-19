import React  from 'react'
import $ from 'jquery'; 

class FormEditUser extends React.Component {
    constructor(props) {
        super(props)
        this.sendEditUsuario = this.sendEditUsuario.bind(this)
    }

    sendEditUsuario(){
        var current = this
        var urlApi = 'http://127.0.0.1:3000/v1/'
        if($('#editNombre').val()=='' ||
        $('#editApellidos').val()=='' ||
        $('#editDNI').val()=='' ||
        $('#editPassword').val()==''){
            swal(
                'Ooppss...',
                'Algo ha ido mal: Todos los campos son obligatorios.',
                'error'
                )
            return;
        }
        var data = {_id:this.props.usuario_oid,
        nombre:$('#editNombre').val(),
        apellidos:$('#editApellidos').val(),
        dni:$('#editDNI').val(),
        token:current.props.usuario_token,
        password:$('#editPassword').val()}

        fetch(urlApi+'users',{
            body:JSON.stringify(data),
            method:'PUT',
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
            current.props.formDone()
            swal(
            'Correcto',
            'Has editado correctamente tu perfil',
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
        if(!this.props.usuario_nombre)
            return <div id="containerFormEditUser" key={2}></div>
        else
        return <div id="containerFormEditUser" key={2}>
        <h2>Edita tus datos personales</h2>
        <form id="formRegistro">
            <div className="form-group" key={4}>
                <label htmlFor="editNombre">Nombre</label>
                <input type="text" className="form-control" id="editNombre" name="editNombre" placeholder="Pepe"
                defaultValue={this.props.usuario_nombre}/>
            </div>
            <div className="form-group" key={2}>
                <label htmlFor="editApellidos">Apellidos</label>
                <input type="text" className="form-control" id="editApellidos" name="editApellidos" placeholder="Perez" 
                defaultValue={this.props.usuario_apellidos}/>
            </div>
            <div className="form-group" key={5}>
                <label htmlFor="editDNI">DNI</label>
                <input type="text" className="form-control" id="editDNI" name="editDNI" placeholder="123456789X"
                defaultValue={this.props.usuario_dni}/>
            </div>
            <div className="form-group" key={6}>
                <label htmlFor="editPassword">Password</label>
                <input type="password" className="form-control" id="editPassword" name="editPassword" placeholder="****"/>
            </div>
            <p><i>No puedes cambiar tu contraseña.</i></p>
            <div className="form-group" key={3}>
                <button className="btn btn-success" id="buttonRegistro"
                onClick={this.sendEditUsuario} >
                Editar perfil
                </button>
                <span className="marginleft25px"></span>
                <button className="btn btn-danger" id="buttonRegistro"
                onClick={this.props.formDone} >
                Cancelar
                </button>
            </div>
        </form>
    </div>
    }
}

export default FormEditUser

/* ejemplo estructura
http put localhost:3000/v1/users 
_id="59f70a542fbe3f177be4d7e8" 
nombre="ejemplocambiado2" 
apellidos="apellidos de ejemplo" 
dni="123456789X" 
token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1OWY3MGE1NDJmYmUzZjE3N2JlNGQ3ZTgiLCJkbmkiOiIxMjM0NTY3ODlYIn0.hbijfzsFEhiIYEb5XH5ftnvBoWLyo3b86SmOw8Yeis0" 
password="123456789X"
*/

