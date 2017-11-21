import React from 'react'
import Item from './Item'

class Lista extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        var listaItems = this.props.items.map((item)=>{
            return <Item key={item.id}
                         itemId={item.id}
                         nombre={item.nombre}
                         comprado={item.comprado}
                         handleToggle={this.props.handleToggle}
                         handleDelete={this.props.handleDelete}/>
        })
        return <div id="lista">
                  <h1>Tu lista de la compra</h1>
                  <ul>
                  {listaItems}
                  </ul>
               </div>
    }
}

export default Lista