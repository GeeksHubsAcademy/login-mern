const reducer = (state = {products:[]}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
};
export default reducer;