const initState = {
    id: []
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_ROUTE':
            console.log('created project', action.project)
            return state;
        case 'CREATE_ROUTE_ERROR':
            console.log('created project error', action.err)
            return state;
        default:
            return state;
    }
}

export default projectReducer;
