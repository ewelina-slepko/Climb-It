export const createNewRoute = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        dispatch({ type: 'CREATE_ROUTE', project })
    }
}
