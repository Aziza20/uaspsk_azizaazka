const initialState = {
    volcanoes: [],
  };
  
  const volcanoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_VOLCANOES':
        return { ...state, volcanoes: action.payload };
      default:
        return state;
    }
  };
  
  export default volcanoReducer;