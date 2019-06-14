export const initialState = {
  keyPlayed: '',
}

export default (state = initialState, action) => {
  if (action.type === 'PLAY_KEY') {
    return { keyPlayed: action.payload }
  } else {
    return state
  }
}
