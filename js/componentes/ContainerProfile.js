import React  from 'react'
import $ from 'jquery'; 
import FormEditUser from './FormEditUser'


class ContainerProfile extends React.Component {
    constructor(props) {
        super(props)
    }
    clickEditUser(){
        $("#containerProfile").slideToggle();
        $("#containerApp").slideToggle();
    }
    render() {
        var cuerpo = 'Cargando...'
        if(this.props.usuario_oid)
            cuerpo = 'Tu perfil:'

        return <div id="containerProfile" className="container">
            <h2>{cuerpo}</h2>
            <FormEditUser usuario_dni={this.props.usuario_dni} usuario_nombre={this.props.usuario_nombre} 
                usuario_oid={this.props.usuario_oid} usuario_token={this.props.usuario_token} usuario_apellidos={this.props.usuario_apellidos}
                formDone={this.clickEditUser}/>
        </div>
    }
}

export default ContainerProfile



