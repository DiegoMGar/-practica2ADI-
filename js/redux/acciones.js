export const ADD_ITEM = 'ADD_ITEM'
export const TOGGLE_ITEM = 'TOGGLE_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'

export function addItem(nombre) {
    return {
        type: ADD_ITEM,
        nombreItem: nombre
    }
}

export function toggleItem(id) {
    return {
        type: TOGGLE_ITEM,
        itemId: id
    }
}

export function deleteItem(id){
    return {
        type: DELETE_ITEM,
        itemId: id
    }
}