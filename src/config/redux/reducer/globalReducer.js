const initialState = {
  name: 'Saputra'
}

const globalReducer = (state = initialState, action) => {
  if(action.type === 'UPDATE_NAME') {
    return {
      ...state,
      name: 'Riyan'
    }
  }
  return state;

}

export default globalReducer;