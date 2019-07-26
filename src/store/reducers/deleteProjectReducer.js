const initState = {

};

const deleteProjectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_ROUTE':
            console.log('deleted project', action.project)
            return state;
        case 'DELETE_ROUTE_ERROR':
            console.log('deleted project error', action.err)
            return state;
        default:
            return state;
    };

}

export default deleteProjectReducer;
