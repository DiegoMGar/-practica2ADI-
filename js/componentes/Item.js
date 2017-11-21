import React  from 'react'

class Item extends React.Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this)
        this.delete = this.delete.bind(this)
    }

    toggle() {
        this.props.handleToggle(this.props.itemId)
    }

    delete() {
        this.props.handleDelete(this.props.itemId)
    }

    render() {
        return <li>
                 <span onClick={this.toggle} className={this.props.comprado?'tachado':''}>
                  {this.props.nombre}
                 </span> &nbsp;
                 <button onClick={this.delete}>Eliminar</button> 
               </li> 
    }
}

export default Item

