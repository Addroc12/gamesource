import axios from 'axios';
import {popularGamesURL,upcomingGamesURL,newGamesURL,gameSearchURL} from '../api'

export const loadGames = () => async (dispatch) => {
  
    
    // //is u don want async the
    // axios.get(popularGamesURL)
    // .then(data => {
    //  remove async to 
    // })
  
    //fetch axios
    const popularData = await axios.get(popularGamesURL())
    const upcomingData = await axios.get(upcomingGamesURL())
    const newData = await axios.get(newGamesURL())
    dispatch({
        type:"FETCH_GAMES",
        payload: {
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newData.data.results,
        }
    })

}

export const fetchSearch = (gameName) => async (dispatch) => {
    console.log(gameName)
    const searchGames = await axios.get(gameSearchURL(gameName))
    dispatch({
        type:"FETCH_SEARCHED",
        payload: {
            searched : searchGames.data.results,
        }
    })
}

export const clearSearch = () => (dispatch) => {
    dispatch({
        type:"CLEAR_SEARCHED"
    })

}
