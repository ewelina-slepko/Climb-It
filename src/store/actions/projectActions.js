export const createNewRoute = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
        }).then(() => {
            dispatch({ type: 'CREATE_ROUTE', project })
        }).catch((err) => {
            dispatch({ type: 'CREATE_ROUTE_ERROR', err })
        })

    }
}
