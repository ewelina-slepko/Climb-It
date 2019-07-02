export const createNewRoute = (project) => {
    return (dispatch, getState) => {
        dispatch({ type: 'CREATE_ROUTE', project })
    }
}
