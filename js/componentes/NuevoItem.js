import React from 'react'

class NuevoItem extends React.Component {
    constructor(props) {
        super(props)
        this.clickAdd = this.clickAdd.bind(this)
        this.changeNombre = this.changeNombre.bind(this)
        this.state = {nombre:''}
    }
    clickAdd() {
        this.props.handleNuevoItem(this.state.nombre)
    }

    changeNombre(evento) {
        this.setState({nombre:evento.target.value})
    }

    render() {
        return <div>
            <h1>Nuevo item</h1>
            <input type="text" placeholder="Nombre..." value={this.state.nombre} onChange={this.changeNombre}/>
            <button onClick={this.clickAdd}>Añadir</button>
        </div>
    }
}

export default NuevoItem
