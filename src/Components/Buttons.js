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
const Button1 = styled.button`
background-color:rgb(223, 138, 64);
color:white;
border-radius:12vw;
width:4vw;
margin-left:2vw;
height:4vw;
font-size:1.2vw;
border: none;
display: none;
 position:fixed;
  border: none;
  outline: none;
  margin-top:4vw;
  
`



export default function Buttons() {


    var mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
    
      document.documentElement.scrollTop = 0;
    }
  return (
    <div>
        <p style={{marginTop:'-12vw',position:'absolute'}}>Gallery >
            Wedding Ideas</p>
        <div  style={{marginLeft:"1vw"}}>
            <table>
                <tr>
        <SearchBar width="21vw"></SearchBar>

      <tr>
<Button  style={{marginTop:"2vw"}}>Search</Button>
</tr>
<tr>
<Button style={{marginTop:"1vw"}}>Clear Search</Button>
</tr>
</tr>
</table>
        </div>
        
        <Button1 onClick={topFunction} id="myBtn">Top</Button1>
     
        </div>
  )
}
