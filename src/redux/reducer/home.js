import { GET_SONGS } from "../action";
const initialState = {
  songs: [],

  isLoading: false,
  isError: false
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        songs: action.payload
      };
    default:
      return state;
  }
};

export default homeReducer;
