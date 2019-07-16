export const createNewRoute = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        // const profile = getState().firebase.profile
        const userId = getState().firebase.auth.uid
        firestore.collection('projects').add({
            ...project,
            userId: userId,
            createdAT: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_ROUTE', project })
        }).catch((err) => {
            dispatch({ type: 'CREATE_ROUTE_ERROR', err })
        })

    }
}
