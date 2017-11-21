import {ADD_ITEM, TOGGLE_ITEM, DELETE_ITEM} from './acciones'

var itemId = 1

export default function listaReducer(estado = [], accion) {
   switch (accion.type) {
       case ADD_ITEM: return [
           ...estado,
           {  
               id: itemId++,
               nombre: accion.nombreItem,
               comprado: false
           }
       ]
       case TOGGLE_ITEM: return estado.map( (item) => {
           if (item.id === accion.itemId) {
               return itemReducer(item, accion)
           }
           else return item
       })
       case DELETE_ITEM: return estado.filter( (item) => {
            if(item.id !== accion.itemId){
                return item
            }
       })
       default: return estado
   }  
}

function itemReducer(estado, accion) {
    switch(accion.type) {
        case TOGGLE_ITEM: return Object.assign({}, estado, {
            comprado: !estado.comprado
        })
        default: return estado
    }
}

