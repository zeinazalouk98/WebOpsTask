import React from 'react'
import styled from 'styled-components'



const Text = styled.p`
color: ${props => props.color};
font-size: 0.8vw;
font-weight: ${props=>props.weight};
text-align: left;
margin-Left: ${props=>props.margin};
margin-Top: ${props => props.top};
position: ${props => props.position};

`

const Button = styled.img`
background-color:black;
color:white;
border-radius:0.5vw;
width:8vw;
margin-left:1vw;
height:2.5vw;
font-size:1.2vw;


`
export default function Footer(props) {
  return (
    <div>

    <div style={{backgroundColor:"black", bordeRadius:"1vw 1vw 0 0", height:"10vw"}}>
        <table>
            <tr>
                <td>
                    <tr>
                        <Text margin="1vw" color=" rgb(128, 128, 128)" weight="normal">
                        Plan your wedding wherever and <br/>
                        whenever you want on the Weds360 App
                        </Text>
                    </tr>
                    <tr>
                        
                        <Button src='images/apple.png'></Button>
                       
                        <span>
                        <Button src="images/google.png"></Button>
                        </span>
                        <span>
                        <Button src="images/app.png"></Button>
                        </span>
                     
                    </tr>



                </td>
                <td>
                    <Text weight="bold" margin="15vw" color="rgb(128, 128, 128)">
                    Support
                    </Text>
                    <Text weight="bold" margin="15vw" color="white">

                    Privacy Policy <br/>
                    Terms and Conditions
                    </Text>
                </td>

                <td>
                    <Text weight="bold" margin="18vw" color="rgb(128, 128, 128)" top="-3vw" position="absolute"> Contact Us</Text>
                    <tr>
                        <td> <Text weight="bold" margin="18vw" color="white"   top="-1vw" position="absolute">Email: </Text></td><td><Text color="rgb(128, 128, 128)"weight="bold" margin="20.4vw" top="-1vw" position="absolute" >lovetohelp@weds360.com</Text></td> 
                    </tr>
                    <tr>
                        <td> <Text weight="bold" margin="18vw" color="white"   top="1vw" position="absolute">Address: </Text></td><td><Text color="rgb(128, 128, 128)"weight="bold" margin="21.3vw" top="1vw" position="absolute" >6B, 12 Aswan Square, Al Agouzah, Giza <br/>Governorate 12651</Text></td> 
                    </tr>
                    <tr>
                        <td> <Text weight="bold" margin="18vw" color="white"   top="4vw" position="absolute">Phone: </Text></td><td><Text color="rgb(128, 128, 128)"weight="bold" margin="20.5vw" top="4vw" position="absolute" >+201066776677</Text></td> 
                    </tr>
                   
                    {/* <Text weight="bold" margin="18vw" color="white" top="vw" position="absolute"> <Text color="rgb(128, 128, 128)">6B, 12 Aswan Square, Al Agouzah, Giza <br/>Governorate 12651</Text></Text>
                    <Text weight="bold" margin="18vw" color="white"> <Text color="rgb(128, 128, 128)">+201066776677</Text></Text> */}
                </td>




            </tr>










        </table>



    </div>









    </div>
  )
}
