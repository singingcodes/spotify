import { GET_ALBUMS, GET_ARTIST_ALBUMS } from "../action"
const initialState = {
  album: {},
  songs: [],
  isLoading: false,
  isError: false,
}

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUMS:
      return {
        ...state,
        songs: action.payload,
      }
    case GET_ARTIST_ALBUMS:
      return {
        ...state,
        album: action.payload,
      }

    default:
      return state
  }
}

export default albumReducer
