
const initalState = {
    currentProduct: {}
}

const ACTION = {
    ChangeCurrentProduct: "Add"
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case ACTION.ChangeCurrentProduct:
            return {
                ...state,
                currentProduct: action.payload
            }
        default:
            return state;
    }
}

export default reducer;