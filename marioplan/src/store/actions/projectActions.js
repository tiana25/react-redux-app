export const createProject = (project) => {
    return (dispatch, getState) => {
        //make async call to a database
        dispatch({ type: 'CREATE_PROJECT', project})
    }
}