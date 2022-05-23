import React from 'react'
import SearchBar from './searchBar'
import styled from "styled-components";



const Button = styled.button`
background-color:black;
color:white;
border-radius:0.5vw;
width:17vw;
margin-left:2vw;
height:2vw;
font-size:1.2vw;
margin-top: ${props=>props.margintop}

`
const Button1 = styled.button`
background-color:rgb(223, 138, 64);
color:white;
border-radius:12vw;
width:4vw;
margin-left:2vw;
height:3vw;
font-size:1.2vw;
border: none;
display: none;
 position:fixed;
  border: none;
  outline: none;
  margin-top:4vw;
  
`

const P = styled.p`
margin-top:-12vw;
position:absolute;
margin-left:10vw;`

const Div = styled.div `
magin-left:1vw`

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
        <P>Gallery >
            Wedding Ideas</P>
        <Div>
            <table>
                <tr>
        <SearchBar width="21vw"></SearchBar>

      <tr>
<Button  margintop="2vw">Search</Button>
</tr>
<tr>
<Button margintop="1vw">Clear Search</Button>
</tr>
</tr>
</table>
        </Div>
        
        <Button1 onClick={topFunction} id="myBtn"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></Button1>
        {/* <img src="" height ="80" width="100" />

         */}
     
        </div>
  )
}
