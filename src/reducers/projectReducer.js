const initState = {
  projects: [
    { id: 1, title: 'One', content: 'dasfsafsdagf' },
    { id: 4, title: 'four', content: 'dasfsafsdagf' },
    { id: 3, title: 'ther', content: 'dasfsafsdagf' },
    { id: 2, title: 'two', content: 'dasfsafsdagf' }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log(action.project);
      return { ...state, action };
    default:
      return state;
  }
};

export default projectReducer;
