import React from 'react'
import {addItem} from '../redux/acciones'
import NuevoItem from './NuevoItem'

//En redux un "container" es un componente que se conecta con el store
//y le despacha acciones y/o recibe los cambios de estado.
//En este caso solo despachamos acciones.
//Recibimos el store en la prop del mismo nombre
//Con la librería 'react-redux' se simplificaría la sintaxis de conexión con el store
//pero de momento se hace así para que se vea qué está pasando 
class NuevoItemContainer extends React.Component {
    constructor(props) {
        super(props)
        this.handleNuevoItem = this.handleNuevoItem.bind(this)
    }

    //El componente hijo NuevoItem llama a este método cuando se pulsa "Añadir"
    handleNuevoItem(nombre) {
        var accion = addItem(nombre)
        this.props.store.dispatch(accion)
    }

    render() {
        return <NuevoItem handleNuevoItem={this.handleNuevoItem}/>
    }
}

export default NuevoItemContainer