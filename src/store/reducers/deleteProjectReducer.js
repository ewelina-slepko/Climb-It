const initState = {

};

const deleteProjectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_ROUTE':
            return state;
        case 'DELETE_ROUTE_ERROR':
            return state;
        default:
            return state;
    };

}

export default deleteProjectReducer;
