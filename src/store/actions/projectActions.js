export const createNewRoute = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const authorId = getState().firebase.auth.uid
        firestore.collection('projects').add({
            ...project,
            author: authorId,
            createdAT: new Date(),
        }).then(() => {
            dispatch({ type: 'CREATE_ROUTE', project })
        }).catch((err) => {
            dispatch({ type: 'CREATE_ROUTE_ERROR', err })
        })
    }
}

export const deleteRoute = (document) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();

        firestore.collection('projects').doc(document).delete().then(() => {
            dispatch({ type: 'DELETE_ROUTE', document })
        }).catch((err) => {
            dispatch({ type: 'DELETE_ROUTE_ERROR', err })
        })
    }
}
