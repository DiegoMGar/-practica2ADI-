import React from 'react'
import Lista from './Lista'

import {toggleItem,deleteItem} from '../redux/acciones'

//En redux un "container" es un componente que se conecta con el store
//y le despacha acciones y/o recibe los cambios de estado
//En este componente hacemos las dos cosas: despachar acción con toggleItem 
//y escuchar los cambios de estado para repintar la lista.
//Recibimos el store en la prop del mismo nombre
//Con la librería 'react-redux' se simplificaría la sintaxis de conexión con el store
//pero de momento se hace así para que se vea qué está pasando 
class ListaContainer extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggle = this.handleToggle.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.state = {items:[]}
    }

    componentDidMount() {
        //Nos suscribimos a los cambios de estado del store
        this.props.store.subscribe(() => {
            //copiamos el estado del store en el estado local del componente
            //para que al cambiar el estado local se dispare un re-render.
            //En este ejemplo nos interesa el estado completo del store
            //pero normalmente sería solo una parte
            this.setState({items:this.props.store.getState()})
        })
    }

    //cuando se hace clic en un item despachamos la acción correspondiente
    handleToggle(itemId) {
        this.props.store.dispatch(toggleItem(itemId))
    }

    handleDelete(itemId) {
        console.log('Efectivamente borrado: ' + itemId)
        this.props.store.dispatch(deleteItem(itemId))
    }

    render() {
        return <Lista items={this.state.items} 
                      handleToggle={this.handleToggle}
                      handleDelete={this.handleDelete}/>
    }
}

export default ListaContainer