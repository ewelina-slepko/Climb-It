export const createNewRoute = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            Id: 12345,
            createdAT: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_ROUTE', project })
        }).catch((err) => {
            dispatch({ type: 'CREATE_ROUTE_ERROR', err })
        })

    }
}
