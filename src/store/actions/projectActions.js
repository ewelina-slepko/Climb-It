export const createNewRoute = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const authorId = getState().firebase.auth.uid
        firestore.collection('projects').add({
            ...project,
            author: authorId,
            createdAT: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_ROUTE', project })
        }).catch((err) => {
            dispatch({ type: 'CREATE_ROUTE_ERROR', err })
        })
    }
}

