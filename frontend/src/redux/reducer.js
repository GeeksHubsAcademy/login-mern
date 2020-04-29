const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            }
        case 'GET_ALL_USERS':
            return {
                ...state,
                users: action.payload.users,
                user: action.payload.user
            }
        default:
            return state;
    }
};
export default reducer;