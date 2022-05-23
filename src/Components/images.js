import { isVisible } from '@testing-library/user-event/dist/utils';
import React from 'react'
import styled from 'styled-components'


const Image = styled.img`

  width: ${props => props.width};
  height:${props => props.height};
  margin-left:${props=>props.marginLeft};
  margin-top:${props=>props.marginTop};
  margin-right:0vw;
  border-radius:${props => props.radius};


`;

const Text = styled.p`
color: ${props => props.color||props.color1};
font-size: ${props => props.size};
font-weight: normal;
text-align: ${props => props.align};
margin-top: ${props => props.margin}

`


const DIV = styled.div `

box-shadow: var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);
border-radius:0.5vw;
background-color:${props=>props.bg};
height:${props => props.height2};
width:${props=> props.width2};
margin-left: ${props=> props.margin1};
margin-top:2vw;
box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);




`



export default function 
(props) {
  return (
    <div>
      
    <DIV  height2={props.height2} width2={props.width2} margin1={props.margin1} bg={props.bg}>
    <Image src={props.im.image} width={props.width} height={props.height} radius={props.radius} marginLeft={props.marginLeft} marginTop={props.marginTop}></Image>
    <Text  color1={props.color1}size={props.size} >{props.t2} </Text>
    <Text  color={props.color}size={props.size} align={props.align} margin={props.margin}>{props.t}</Text>
    </DIV>
    
    </div>
  )
}
