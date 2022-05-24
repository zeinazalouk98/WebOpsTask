import React from 'react'
import styled from 'styled-components'
import TypeAnimation from 'react-type-animation';
import ImagePage from '../Components/images'
import Parts from '../Components/Parts';
import FeaturedVendors from '../Components/FeaturedVendors';
import Nav from '../Components/nav'


const A= styled.p`
color:rgb(5, 106, 109);
font-weight:bold;
font-size:1.6vw;
margin-top:5vw;
position:absolute;
margin-left:11.5vw
`

const T = styled.p`
color:Black;
font-weight:normal;
font-size:1.3vw;
margin-top:5.2vw;
position:absolute;
margin-left:5vw

`



const Div= styled.div`

margin-left:10vw,
`

export default function HomePage() {
  

  return (
    <div>
      <Nav/>
    <div>
    <T>Search For</T>
   <A> <TypeAnimation
        cursor={true}
        sequence={[
          
          'Best Venue',
          2000,
          'Best Wedding Planner',
          2000,
          'Best Hairdresser',
          2000, 
          'Most Beautiful Wedding Dress',
          2000,
          'Most Stunnig Wedding Ring',
          2000,
          'Most Talented Photographer',
          2000,
          'The Best Barber',
          2000,
          "Best Men's Wedding Suit",
          2000,
        ]}
        wrapper="A"
        repeat='infinty'
       />
</A>     
  

<Div>
            <video loop="true" autoplay="autoplay" muted style={{height:'20vw',borderRadius:"5vw 0 0 5vw", marginTop:"2vw",marginLeft:'45.8vw'}}>
            <source src="https://weds360-production.s3.amazonaws.com/VIDEOS/coveren.webm#t=0.001"/>
            </video>
        </Div>


        </div>
        <Parts/>
        <FeaturedVendors/>


    </div>
  )
}
