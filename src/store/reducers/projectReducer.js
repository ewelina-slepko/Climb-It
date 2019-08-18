const initState = {
    id: []
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_ROUTE':
            return state;
        case 'CREATE_ROUTE_ERROR':
            return state;
        default:
            return state;
    }
}

export default projectReducer;
