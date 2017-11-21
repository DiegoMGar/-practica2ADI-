import { createStore } from 'redux'
import { ADD_ITEM, TOGGLE_ITEM} from './redux/acciones';
import rootReducer from './redux/reducers'

import React from 'react'
import ReactDOM from 'react-dom'
import NuevoItemContainer from './componentes/NuevoItemContainer'
import ListaContainer from './componentes/ListaContainer'

var store = createStore(rootReducer)

//Pintamos los componentes React
ReactDOM.render(
    <NuevoItemContainer store={store}/>,
    document.getElementById('componenteNuevoItem'),
)

ReactDOM.render(
    <ListaContainer store={store}/>,
    document.getElementById('componenteLista'),
)

