import React from 'react'
import SearchBar from './searchBar'
import styled from "styled-components";



const Button = styled.button`
background-color:black;
color:white;
border-radius:0.5vw;
width:17vw;
margin-left:2vw;
height:3vw;
font-size:1.2vw;

`



export default function Buttons() {





  return (
    <div>
        
        <div  style={{marginLeft:"1vw"}}>
            <table>
                <tr>
        <SearchBar width="21vw"></SearchBar>

      <tr>
<Button>Search</Button>
</tr>
<tr>
<Button style={{marginTop:"1vw"}}>Clear Search</Button>
</tr>
</tr>
</table>
        </div>
        
        
        
        </div>
  )
}
