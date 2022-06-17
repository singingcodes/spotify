export const GET_ARTISTS = "GET_ARTISTS"
export const GET_ALBUMS = "GET_ALBUMS"
export const GET_SONGS = "GET_SONGS"
export const GET_ARTIST_LIST = "GET_ARTIST_LIST"
export const GET_ARTIST_ALBUMS = "GET_ARTIST_ALBUMS"
let headers = new Headers({
  "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  "X-RapidAPI-Key": "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20",
})

export const getArtistsAction = (artistId) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/artist/" + artistId,
        {
          method: "GET",
          headers,
        }
      )
      if (response.ok) {
        let artist = await response.json()
        console.log(artist)

        dispatch({
          type: GET_ARTISTS,
          payload: artist,
        })
      }
    } catch (exception) {
      console.log(exception)
    }
  }
}

export const getAlbumsAction = (albumId) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/album/" + albumId,
        {
          method: "GET",
          headers,
        }
      )
      if (response.ok) {
        let album = await response.json()

        dispatch({
          type: GET_ALBUMS,
          payload: album.tracks.data,
        })
        dispatch({
          type: GET_ARTIST_ALBUMS,
          payload: album,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const getSongsAction = (artistName) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistName,
        {
          method: "GET",
          headers,
        }
      )
      if (response.ok) {
        let song = await response.json()
        dispatch({
          type: GET_SONGS,
          payload: song.data,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}
