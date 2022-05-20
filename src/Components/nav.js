import React, { useState } from 'react'
import styled from "styled-components";
import logo from "../images/logo.png";
import SearchBar from '../Components/searchBar';
import {BsFillPersonFill} from 'react-icons/bs';






const Icon= styled.button`
position:absolute;
height:1vw;
width:1vw;
border:none;
z-index:1;
background: transparent;
margin-top: -6vw



`



const Logo = styled.img`

  width:5.7vw;
  height:4vw;
  margin-left:5.3vw;
  margin-top:2vw;
  margin-right:6vw;

`;

const Text = styled.p`
color: black;
font-size: 1.02vw;
margin-right: 1vw;
font-weight: normal;

`

const DropDownListContainer = styled("div")`

margin-top:0;
 visibility: hidden;`;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left:1vw;
  background: transparent;
  border: 2px solid transparent;
  box-shadow:0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -4px rgb(0 0 0 / 10%);
  box-sizing: border-box;
  border-radius:0.5vw;
  color: black;
  font-size: 1.02vw;
  margin-right: 1vw;
  font-weight: normal;
  &:first-child {
    padding-top: 0;
  }
  visibility: hidden;
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  color: black;
font-size: 0.8vw;
margin-right: 1vw;
font-weight: normal;
  &:hover {
    color: rgba(63,131,248,0.5);
    font-weight: bold;
  }
  visibility: hidden;   
`;


const DropDownContainer = styled("div")`
  width: 9vw;
  margin-top:0vw ;
  margin-left:-2vw;
 
  
  &:hover{
    ${ListItem}{
      visibility: visible;
    }
    ${DropDownList}{
        visibility: visible;
      }
      ${DropDownListContainer}{
        visibility: visible;
      }
  }
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  color: black;
font-size: 0.8vw;
margin-right: 1vw;
font-weight: normal;
  background: transparent;
 &:hover{
     color: black;
     font-weight:bold;
 }
 
  
`;


const Table1= styled.table`
margin-left:15vw;
margin-top:-4vw;



`



export default function 
() {


   
  
  return (
    <div>
          <Logo src={logo} /> 
        <Table1>
            <tr>
          
           <td> <DropDownContainer>
        <DropDownHeader>360 Planner</DropDownHeader>
       
          <DropDownListContainer>
            <DropDownList>
              <ListItem>Check List</ListItem>
              <ListItem>Budgeter</ListItem>
              <ListItem>Registry List</ListItem>
              <ListItem>Guest List</ListItem>
              <ListItem>Wedding Website</ListItem>
            </DropDownList>
          </DropDownListContainer>
        
      </DropDownContainer>
  </td>

  <td> <DropDownContainer>
        <DropDownHeader>Her</DropDownHeader>
       
          <DropDownListContainer>
            <DropDownList>
              <ListItem>Designers</ListItem>
              <ListItem>Bridal Boutique</ListItem>
              <ListItem>Wedding Dresses</ListItem>
              <ListItem>Rings</ListItem>
              <ListItem>Makeup Artists</ListItem>

            </DropDownList>
          </DropDownListContainer>
        
      </DropDownContainer>
  </td>

  <td> <DropDownContainer>
        <DropDownHeader>Him</DropDownHeader>
       
          <DropDownListContainer>
            <DropDownList>
            <ListItem>Designers</ListItem>
              <ListItem>Bridal Boutique</ListItem>
              <ListItem>Wedding Dresses</ListItem>
              <ListItem>Rings</ListItem>
              <ListItem>Makeup Artists</ListItem>
            </DropDownList>
          </DropDownListContainer>
        
      </DropDownContainer>
  </td>

  <td> <DropDownContainer>
        <DropDownHeader>The Wedding</DropDownHeader>
       
          <DropDownListContainer>
            <DropDownList>
            <ListItem>Designers</ListItem>
              <ListItem>Bridal Boutique</ListItem>
              <ListItem>Wedding Dresses</ListItem>
              <ListItem>Rings</ListItem>
              <ListItem>Makeup Artists</ListItem>
            </DropDownList>
          </DropDownListContainer>
        
      </DropDownContainer>
  </td>
  <td> <DropDownContainer>
        <DropDownHeader>Vendors</DropDownHeader>
       
          <DropDownListContainer>
            <DropDownList>
            <ListItem>Designers</ListItem>
              <ListItem>Bridal Boutique</ListItem>
              <ListItem>Wedding Dresses</ListItem>
              <ListItem>Rings</ListItem>
              <ListItem>Makeup Artists</ListItem>
            </DropDownList>
          </DropDownListContainer>
        
      </DropDownContainer>
  </td>
  <td> <DropDownContainer>
        <DropDownHeader>Gallery</DropDownHeader>
       
          <DropDownListContainer>
            <DropDownList>
            <ListItem>Designers</ListItem>
              <ListItem>Bridal Boutique</ListItem>
              <ListItem>Wedding Dresses</ListItem>
              <ListItem>Rings</ListItem>
              <ListItem>Makeup Artists</ListItem>
            </DropDownList>
          </DropDownListContainer>
        
      </DropDownContainer>
  </td>
  <td> <DropDownContainer>
        <DropDownHeader>Ideas & More</DropDownHeader>
       
          <DropDownListContainer>
            <DropDownList>
            <ListItem>Designers</ListItem>
              <ListItem>Bridal Boutique</ListItem>
              <ListItem>Wedding Dresses</ListItem>
              <ListItem>Rings</ListItem>
              <ListItem>Makeup Artists</ListItem>
            </DropDownList>
          </DropDownListContainer>
        
      </DropDownContainer>
  </td>

  <td> <DropDownContainer>
        <DropDownHeader>Take a Tour</DropDownHeader>
       
          <DropDownListContainer>
            <DropDownList>
            <ListItem>Designers</ListItem>
              <ListItem>Bridal Boutique</ListItem>
              <ListItem>Wedding Dresses</ListItem>
              <ListItem>Rings</ListItem>
              <ListItem>Makeup Artists</ListItem>
            </DropDownList>
          </DropDownListContainer>
        
      </DropDownContainer>
  </td>
           <td><SearchBar width="15vw"></SearchBar></td>
           <td> <Icon>
            <BsFillPersonFill/>
            </Icon>
            </td>
            <span style={{position:"absolute",fontWeight:"bold",marginLeft:'2vw',marginTop:'0.5vw'}}>ع </span> 

         
           
          </tr>
            
        </Table1>



       
    

    </div>
  )
}


