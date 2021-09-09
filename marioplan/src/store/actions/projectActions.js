export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        //make async call to a database
        dispatch({ type: 'CREATE_PROJECT', project})
    }
}