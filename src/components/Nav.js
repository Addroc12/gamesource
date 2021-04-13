import React,{useState} from 'react'

import styled from 'styled-components'
import {motion} from 'framer-motion'
import logo from '../img/logo.svg'

import {fetchSearch,clearSearch} from '../actions/gamesAction'
import {useDispatch} from 'react-redux'
import {fadein} from '../animatio0n'

const Nav = () => {
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState('')

    
    const inputHandler = (e) => {
        setTextInput(e.target.value)
    }
    const submitSearch = (e) => {
        e.preventDefault();
        dispatch(fetchSearch(textInput))
        setTextInput(" ")
    }
    const clearSearched = () => {
        dispatch(clearSearch())
    }

    return(
            <StyledNav variants={fadein} initial="hidden" animate="show">
                <Logo onClick={clearSearched} >
                                   
                        <h1>GameSource</h1>        
                </Logo>
                <form className="search">
                <div className="search">
                    <input value={textInput} onChange={inputHandler}  type="text" />
                    <button type="submit" onClick={submitSearch}>Search</button>
                </div>
                </form>
            </StyledNav>
    )
}

const StyledNav = styled(motion.nav)`

    padding: 3rem 5rem;
    text-align: center;
    background:#333;
    input {
        width: 30%;
        font-size: 1.5rem;
        padding:0.5rem;
        border: none;
        margin-top: 1rem;
        box-shadow: 0px 0px 30px rgba(0,0,0,0.2);
        
    }
    button{
       font-size: 1.5rem;
       border: none;
       padding: 0.5rem 2rem;
       cursor: pointer;
        color: white;
        padding:0.5rem 0.7rem;
       
        background:rgb(242, 17, 17);
        font-weight: bold;
        border: 1px solid rgb(242, 17, 17);
        outline: none;
        color:white;
        box-shadow: 1px 1px 5px 1px rgb(242, 17, 17);
        &:hover{
        box-shadow: 1px 1px 10px 1px rgb(242, 17, 17);
        }
    }
`;

const Logo = styled(motion.nav)`
    display:flex;
    justify-content: center;
    padding: 1rem;
    cursor;pointer;
    img{
        height: 1.5rem;
        width: 1.5rem;
    }
    h1{
        font-size:50px;
        color:white
    }
`;
export default Nav;
