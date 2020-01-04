export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('projects')
      .add({
        ...project,
        authorFirstName: 'asf',
        authorLastName: 'fsa',
        authorId: 34,
        createdAt: new Date()
      })
      .then(() => dispatch({ type: 'CREATE_PROJECT', project }))
      .catch(err => alert(err));
  };
};
