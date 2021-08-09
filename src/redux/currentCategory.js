const initalState = "all";

const ACTION = {
    changeCategory: "ChangeCategory"
}

export const changeCategory = (text) => ({
    type: ACTION.changeCategory,
    payload: text
})

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case ACTION.changeCategory:
            return action.payload;
        default:
            return state;
    }
}

export default reducer;