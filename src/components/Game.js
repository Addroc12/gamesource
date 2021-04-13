import React from 'react'
//Styling and Animation 
import styled from 'styled-components'
import { motion } from 'framer-motion'
// Redux 
import { useDispatch } from 'react-redux'
import { loadDetail } from '../actions/detailAction'
import { Link } from 'react-router-dom'
import {smallImage} from '../util'
import {fadein,popup} from '../animatio0n'

const Game = ({ name, released, image, id }) => {
    const stringPathid = id.toString();
    console.log("stringid",typeof stringPathid)
    //Load Detail
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow = 'hidden';
        dispatch(loadDetail(id))
    }
    return (
        <StyledGame variants={fadein} initial="hidden" animate="show"  layoutId={stringPathid} onClick={loadDetailHandler}>
            <Link style={{ textDecoration: 'none' }} to={`/game/${id}`}>
                <h3>{name}</h3>
                <p>Released Date {released}</p>
                <motion.img layoutId={`image ${stringPathid}`} src={image ? smallImage(image,640): 'sd'} alt={name} />
            </Link>
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)`
    min-height:30vh;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
    text-align:center;
    border-radius:1rem;
    overflow:hidden;
    background:#333;
    img{
        width:100%;
        height:40vh;
        object-fit:cover;
    }
    Link{
        text-decoration:none;
    }
    h3{
        color:white;
    }
    p{
        color:white;
    }
    
`;

export default Game;