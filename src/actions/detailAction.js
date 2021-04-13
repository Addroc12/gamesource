import axios from 'axios'
import {gameDetailsURL,gameScreenShot} from '../api'


export const loadDetail = (id) => async(dispatch) => {
        
    dispatch({
        type:"LOADING_DETAIL",
    })
    const detailData  = await axios.get(gameDetailsURL(id))
        const screenShots  = await axios.get(gameScreenShot(id))

dispatch({
    type:"GET_DETAIL",
    payload:{
        game: detailData.data,screen: screenShots.data,
    }
})
}
