import React from 'react'
//style
import styled from "styled-components";
import { motion } from "framer-motion";
//redux
import { useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom'
import {smallImage} from "../util"
//Images
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
import starEmpty from '../img/star-empty.png'
import starFull from '../img/star-full.png';
const GameDetail = () => {
    const history = useHistory();
   //Exit detail
   const exitDetailHandler = (e) => {
       const element = e.target
       if(element.classList.contains('shadow')){
           document.body.style.overflow = 'auto';
           history.push('/')

       }
   }
    const { screen, game,isLoading,pathId } = useSelector(state => state.detail)

    const gatePlatform = (platform) => {
        switch(platform){
            case "PlayStation 4":
                return playstation;
            case "Xbox One":
                return xbox;
            case "PC":
                return steam;
            case "Nintendo Switch":
                return nintendo;
            case "iOS":
                return apple;
            default:
                return gamepad;


        }
    }
    //get star
    const getStars = () => {
        const stars =[];
        const rating = Math.floor(game.rating);
        for(let i=1; i<=5; i++){
           
        if(i <=rating){
            stars.push(<img alt="star" key={i} src={starFull}></img>)
        } else {
            stars.push(<img alt="star" key={i} src={starEmpty}></img>)
        }
    }
    return stars
}
    
return (
        <>
        {!isLoading && (
        <CardShadow className="shadow"   onClick={exitDetailHandler} >
            <Detail layoutId={pathId} className="detail">
            <button className="shadow"   onClick={exitDetailHandler}>X</button>
                <Stats className="stats">
                    <Rating className="rating">
                        <h3> {game.name} </h3>
                        <p> Rating: {game.rating} </p>
                        {getStars()}
                    </Rating>
                    <Info className="info">
                        <h3>Platforms</h3>
                        <Platforms className="platforms">
                            {game.platforms.map((data) => (
                                <img key={data.platform.id} src={gatePlatform(data.platform.name)} alt={data.platform.name} />
                            ))}
                        </Platforms>
                    </Info>
                </Stats>
                <Media className="media">
                    <motion.img layoutId={`image ${pathId}`} src={game.background_image}  alt="image" />
                </Media>
                <Description className="describe">
                    <p> {game.description_raw} </p>
                </Description>
                <ScreenShot className="gallery">
                        {screen.results.map((screen) => (
                            <motion.img src={smallImage(screen.image,1280)} style={{paddingTop:"20px"}}  key={screen.id} alt="game" />
                        ))}
                </ScreenShot>
            </Detail>
        </CardShadow>
        )}
        </>
    )

}
const Rating = styled(motion.div)`
    h3{
        color:white;
    }
    p{
        color:white
    }

`;

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height:100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.5);
    position:fixed;
    top:0;
    left:0;
    &::-webkit-scrollbar{
        width:0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color:#ff7676
    }
    &::-webkit-scrollbar-track{
        background: white;
    }
`;

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: black;
    position: absolute;
    left: 10%;
    color: white;
    img{
        width:100%;
    } 
    button{
        position:fixed;
        right:12%;
        padding:0.5rem 0.7rem;
        border-radius:50%;
        background:rgb(242, 17, 17);
        font-weight: bold;
        border: 1px solid rgb(242, 17, 17);
        outline: none;
        &:hover{
        box-shadow: 1px 1px 10px 1px rgb(242, 17, 17);
        }
    }
`;

const Stats = styled(motion.div)`
    display:flex;
    align-items: center;
    justify-content: space-between;
    img{
        width:2rem;
        height: 2rem;
        display:inline;
    }
    

`;
const Info = styled(motion.div)`
    text-align: center;
    h3{
        color:white;
    }
`;

const Platforms = styled(motion.div)`
display:flex;
justify-content: space-evenly;
    img{
        margin-left:3rem;
    }
`;

const Media = styled(motion.div)`
    margin-top: 5rem;
    img{
        width: 100%;
    }

`;

const Description = styled(motion.div)`
    margin: 5rem 0rem;
    p{
        color:white;
    }
`;
const ScreenShot = styled(motion.div)`
`


export default GameDetail