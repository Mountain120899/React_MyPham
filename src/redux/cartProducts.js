const initalState = [];

const ACTION = {
    addItem: "AddItem",
    deleteItem: "DeleteItem"
}

export const addItem = (product) => ({
    type: ACTION.addItem,
    payload: product
})

export const deleteItem = (product) => ({
    type: ACTION.deleteItem,
    payload: product
})

const reducer = (state = initalState, action) => {
    switch(action.type) {
        case ACTION.addItem:
            return [...state, action.payload];
        case ACTION.deleteItem:
            return state.filter(item => item.name !== action.payload.name);
        default:
            return state;    
    }
}

export default reducer;