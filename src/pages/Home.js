import React,{useEffect} from 'react'
import GameDetail from '../components/GameDetail'
import {useDispatch,useSelector} from 'react-redux'
import {loadGames,clearSearch} from '../actions/gamesAction'
import Game from '../components/Game'
import styled from 'styled-components'
import {motion,AnimatePresence,AnimateSharedLayout} from 'framer-motion'
import {useLocation} from 'react-router-dom'
import {fadein,popup} from '../animatio0n'

function Home() {
    //the current location
    const location = useLocation()
    const pathId = location.pathname.split("/")[2];
    
    //Fe5tch games
    const dispatch =  useDispatch();
    useEffect(() =>  {
     dispatch(loadGames())
    },[dispatch])
    //get back data from store
    const {popular, newGames,upComing, searched} = useSelector((state) => state.games)
    console.log("pathid",typeof pathId)

    const clearSearched = () => {
        dispatch(clearSearch())
    }
  
    return (
      <GameList variants={fadein} initial="hidden" animate="show" className="App">
          <AnimateSharedLayout type="crossfade">
          <AnimatePresence>
         {pathId &&  <GameDetail pathId={pathId} /> }
         </AnimatePresence>
         {searched.length ? (
         <Search className="searched">
            <button onClick={clearSearched} >BACK</button>
         <h2>Searched Games</h2> 
          <Games> 
              {searched.map((game)=>(
                   <Game name={game.name} key={game.id} id={game.id} image={game.background_image}  released={game.released} />
              ))}
          </Games>
          </Search>
          ): ' '}
          

          <h2>Upcoming</h2>
          <Games> 
              {upComing.map((game)=>(
                   <Game name={game.name} key={game.id} id={game.id} image={game.background_image}  released={game.released} />
              ))}
          </Games>
          <h2>Popular</h2>
          <Games> 
              {popular.map((game)=>(
                   <Game name={game.name} key={game.id} id={game.id} image={game.background_image}  released={game.released} />
              ))}
          </Games>
          <h2>New Games</h2>
          <Games> 
              {newGames.map((game)=>(
                   <Game name={game.name} key={game.id} id={game.id} image={game.background_image}  released={game.released} />
              ))}
          </Games>
          </AnimateSharedLayout>
      </GameList>
    );
  }
  


  const Search = styled(motion.div)`
  button{
    padding:0.5rem 0.7rem;
    border-radius:20%;
    background:rgb(242, 17, 17);
    font-weight: bold;
    border: 1px solid rgb(242, 17, 17);
    outline: none;
    color:white;
    box-shadow: 1px 1px 5px 1px rgb(242, 17, 17);
    &:hover{
    box-shadow: 1px 1px 10px 1px rgb(242, 17, 17);
    }
  
  `;
  const GameList =  styled(motion.div)`
      padding: 5rem;
      h2 {
        padding: 5rem 0rem;
        color:white;
      }
      background:grey;
  `;
  const Games = styled(motion.div)`
      min-height:80vh;
      display:grid;
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
      grid-column-gap: 3rem;
      grid-row-gap:5rem;
      `;
  export default Home;
    