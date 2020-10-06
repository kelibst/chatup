export const createProject = (project) => {
    return (dispatch, getState, { gettFirebase, getFirestore }) => {
        const firestore = getFirestore()
            firestore.collection('projects').add({
                ...project,
                authorFirstName: "Keli",
                authorLastName: "Booster",
                authorId: 12332,
                createdAt: new Date()
            }).then( (res) => {
                dispatch({type: 'CREATE_PROJECT', project})
            }).catch( (err) => {
                dispatch({ type: 'CREATE_PROJECT_ERROR', err})
            })
        
    }
}