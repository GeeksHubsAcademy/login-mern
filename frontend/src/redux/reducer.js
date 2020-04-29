const reducer = (state = {products:[]}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            }
        case 'GET_ALL_USERS':
            return {
                ...state,
                users: action.payload
            }
        default:
            return state;
    }
};
export default reducer;