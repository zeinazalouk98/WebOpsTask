import React from 'react'
import styled from 'styled-components'


const Image = styled.img`

  width: ${props => props.width};
  height:${props => props.height};
  margin-left:vw;
  margin-top:vw;
  margin-right:0vw;
  border-radius:${props => props.radius};


`;

const Text = styled.p`
color: black;
font-size: 1.02vw;
font-weight: normal;
text-align: center;
`


const DIV = styled.div `

box-shadow: var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);
border-radius:1vw;
background-color:;

margin-left:5.3vw;
margin-top:2vw;
box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);



`



export default function 
(props) {
  return (
    <div>
      
    <DIV>
    <Image src={props.im} width={props.width} height={props.height} radius={props.radius}></Image>

    <Text>{props.t}</Text>
    </DIV>
    
    </div>
  )
}
