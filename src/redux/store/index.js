import { configureStore, combineReducers } from "@reduxjs/toolkit"
import homeReducer from "../reducer/home"
import albumReducer from "../reducer/album"
import artistReducer from "../reducer/artist"

const rootReducer = combineReducers({
  home: homeReducer,
  album: albumReducer,
  artist: artistReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
