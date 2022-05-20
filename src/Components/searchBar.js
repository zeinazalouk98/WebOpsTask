import React from 'react'
import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai';
import {BsFillPersonFill} from 'react-icons/bs';

const SearchContainer = styled.div `



height:2.5vw;
border-color: #e2e8f0;  
width: 15vw;
display: flex;
align-items:center;
position:relative;
transition: all 0.3s ease;
margin-top: -6vw;


`
const SearchInput = styled.input `
border: none;
position:absolute;
height:100%;
width:100%;
border-radius: 0.4vw;
background-color:transparent;
font-size:1vw;
border: 1px solid #e2e8f0;
margin-top: -6vw
 &:focus{
   border-color: rgba(0,0,0,0.3); 
    
 }
 &::placeholder {
    margin-left:6vw;
    font-weight:normal;

`
const Icon= styled.button`
position:relative;
height:1vw;
width:1vw;
border:none;
z-index:1;
background: transparent;
margin-top: -1vw



`


export default function searchBar() {

  return (
    <div> 
        <table>
            <tr>
                <td>
                <SearchContainer>
            <Icon>
                <AiOutlineSearch/>
            </Icon>
            <SearchInput placeholder="Search"></SearchInput>
            
            
            </SearchContainer>
            
           

                </td>




            </tr>


        </table>
       
    </div>
  )
}