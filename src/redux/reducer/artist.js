import { GET_ARTISTS } from "../action"

const initialState = {
  artist: {},
  songs: [],
  isLoading: false,
  isError: false,
}

const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTISTS:
      return {
        ...state,
        songs: action.payload,
      }

    default:
      return state
  }
}

export default artistReducer
