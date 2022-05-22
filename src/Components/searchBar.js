import React from 'react'
import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai';
import {BsFillPersonFill} from 'react-icons/bs';

const SearchContainer = styled.div `



height:2.5vw;
border-color: #e2e8f0;  
width: ${props => props.width};
display: flex;
align-items:center;
position:relative;
transition: all 0.3s ease;



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
    margin-left:4vw;
    font-weight:normal;

`
const Icon= styled.button`
position:relative;
height:1vw;
width:1vw;
border:none;
z-index:1;
background: transparent;
margin-top: vw



`


export default function searchBar(props) {

  return (
    <div> 
        <table>
            <tr>
                <td>
                <SearchContainer  width= {props.width}  >
            <Icon>
                <AiOutlineSearch/>
            </Icon> 
            {/* <SearchInput placeholder="Search"></SearchInput> */}
            <SearchInput></SearchInput>
           
            
            </SearchContainer>
            
           

                </td>




            </tr>


        </table>
       
    </div>
  )
}
