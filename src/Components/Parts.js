import React ,{ useState } from 'react'

import styled from 'styled-components'

import ImagePage from './images'





const Grid= styled.div `
display: grid;
grid-auto-flow: column;  
gap: 10px;
`
const Grid2= styled.div`
display: grid;
grid-template-columns: auto auto auto;
gap: -1vw;
margin-left:3vw;
`
const Div1 = styled.div `background-Color:rgb(246, 246, 246);
height:${props=>props.h}
`
const Div2 =styled.div `
margin-left:5vw;
margin-top:2vw;    height: 22vw}}
` 
const Div3=styled.div`

background-image: ${props=>props.bg};
background-repeat: no-repeat, repeat;
background-position: ${props=>props.pos}; 
width:100vw;
margin-top:5vw;
height:18vw
`


const Text = styled.p`
color: ${props=> props.color1} ;
font-size: ${props=>props.size};
font-weight: bold;
text-align: ${props=>props.align1};
margin-top:${props=>props.marginTop};
margin-left:${props=>props.marginLeft}

`
const Button1 = styled.button`
background-color:rgb(223, 138, 64);
color:white;
border-radius:0.5vw;
width:7vw;
margin-left:${props=>props.margin2};
height:2vw;
font-size:0.8vw;
border:none;
font-weight:bold
  `

export default function Parts() {
 

  const [data, setData] = useState([

    { id: '1', image: 'images/search.png', name: 'Search for a vendor', type: 'part1' },
    { id: '2', image: 'images/meet.png' , name: 'Meet and connect a vendor', type: 'part1' },
    { id: '3', image: 'images/create.png' , name: 'Create and manage your budget', type: 'part1'},
    { id: '4', image: 'images/who.png', name: 'Who is coming? Who is not?', type: 'part1' },
    { id: '5', image: 'images/list.png', name: 'Create you dream list', type: 'part1'},
    { id: '6', image: 'images/list.png', name: 'Set your tasks', type: 'part1' },
    { id: '7', image: 'images/health.png', name: 'Health', type: 'part2' },
    { id: '8', image: 'images/alter.jpg' , name: 'Alteration and Tailors', type: 'part2' },
    { id: '9', image: 'images/musician.jpg' , name: 'Musicians and Wedding Bands', type: 'part2'},
    { id: '10', image: 'images/give.jpg', name: 'Giveaways', type: 'part2' },
    { id: '11', image: 'images/designer.png', name: 'Designers', type: 'part2'},
    { id: '12', image: 'images/light.jpg', name: 'Lighting', type: 'part2' },
    { id: '13', image: 'images/snack.jpg', name: 'Wedding Snack Bar Ideas Your Guests Will Devour', type: 'part3' },
    { id: '14', image: 'images/flower.jpg' , name: 'Spring Wedding Flowers That Other Seasons Cant Compete With', type: 'part3' },
    { id: '15', image: 'images/flowers.jpg' , name: "The Best Wedding Flowers for Your Spring Wedding", type: 'part3'},
    { id: '16', image: 'images/bridemaid.jpg', name: "Bridemaids Colors That'll Have Your Crew Looking Fabulous", type: 'part3' },
    { id: '16', image: 'images/dress.jpg', name: "Spring Wedding guest Dresses to Sport at Your Next Wedding!", type: 'part3' },
    { id: '17', image: 'images/gown.jpg', name: 'These Trendy Spring Wedding Gowns Will Wow You', type: 'part3'},
    { id: '18', image: 'images/rings.webp', name: 'Round & Baguette diamond stones', type: 'part4' },
    { id: '19', image: 'images/ring.webp', name: 'Three-rows diamond band', type: 'part4' },
    { id: '20', image: 'images/dress1.webp' , name: 'Silver beading white dress', type: 'part5' },
    { id: '21', image: 'images/dress2.webp' , name: 'Fully beaded long sleeves dress', type: 'part5'},
    { id: '22', image: 'images/wedding.jpg', name: '', type: 'part6' },
    { id: '23', image: 'images/pic1.png', name: 'Passant Shawky and Mohamed Farrag Tie the Knot in a Bohemian Dream ', type: 'part7' },
    { id: '24', image: 'images/pic2.png', name: 'Passant Shawky and Mohamed Farrag’s Gorgeous Beachside Wedding ', type: 'part7' },
    { id: '22', image: 'images/pic3.png', name: 'Menna and Amr’s Pyramid Side Garden Wedding', type: 'part7' },
   

  ]);
  
 
  return (
    <div>
        
    <Div1 h="17vw">
    <Text color1="rgba(156,163,175)" size="0.9vw" marginLeft="20vw" align="center">From booking the right florist to unpacking after your honeymoon We cant wait to help you start the next chapter <br/>of your life</Text>
      <Grid>
    
  
    {data.filter(item=>item.type==="part1").map((image, id) => 
     <ImagePage im={image}  size="1vw" t={image.name} width="2vw"height="2vw" radius="0.5vw 0.5vw 0 0 " margin="1vw"  align="center" height2="7.8vw" width2="13vw" marginLeft="6vw" marginTop='1.5vw' color='rgb(5, 106, 109)' margin1="1vw"></ImagePage>)} 
   
  
  
  </Grid>
  
    </Div1>
    <Div2>
    <Text size="1.8vw" align1="justify">
    Wedding specialists
    </Text>
    <Text color1="rgba(107,114,128)" size="0.9vw" align1="justify" marginLeft="25vw" marginTop="-4vw">Learn more about wedding specialists in all fields, see their work and choose the <br/> best for you and your wedding.</Text>
    <Grid>
    
    {data.filter(item=>item.type=== "part2"  ).map((image, id) => 
        <ImagePage im={image} t={image.name} color1="rgba(156,163,175)" height2="12.7vw" color="black" size="0.75vw" width="9vw" margin="vw" align="center" height= "9vw"  radius="0.5vw 0.5vw 0 0 " width2="9vw" />  
        )}  
  
  
  </Grid>
    </Div2>

    <Div1 h="35vw">
    <Text size="1.8vw" align1="justify" marginLeft="5vw" marginTop='2vw' pos="absolute">
    Wedding of the week
    </Text>
    <Text color1="rgba(107,114,128)" size="0.9vw" align1="justify" marginLeft="30vw" marginTop="-4vw">The most beautiful pictures of other weddings that will help you gather ideas<br/> when planning your own. With inspiration for everything from the ultimate <br/>wedding dress to the best planners.

</Text>
    <Grid2>
    
  
  {data.filter(item=>item.type==="part7").map((image, id) => 
   <ImagePage im={image}  bg="rgb(2, 77, 76)" color="white" size="1.02vw" t={image.name} width="22vw"height="20vw" radius="0.5vw 0.5vw 0 0 " margin="-0.5vw"  align="center" height2="25vw" width2="22vw" margin1="4vw"></ImagePage>)} 
 


    </Grid2>

    </Div1>





    <Text size="1.8vw" align1="justify" marginLeft="5vw">
    Tips and ideas
    </Text>
    <Text color1="rgba(107,114,128)" size="0.9vw" align1="justify" marginLeft="30vw" marginTop="-4vw">Our specialists collect questions and ideas that are usually on a bride and groom's <br/> mind so we can discuss, analyze, and answer common concerns.</Text>
    <Grid2>
    
  
  {data.filter(item=>item.type==="part3").map((image, id) => 
   <ImagePage im={image} color="black" size="1.02vw" t={image.name} width="25vw"height="12vw" radius="0.5vw 0.5vw 0 0 " margin="-0.5vw"  align="center" height2="16vw" width2="25vw" margin1="4vw"></ImagePage>)} 
 


    </Grid2>
 <Div3 bg='url("images/bg1.png")' pos= "-15vw">
   <table>
     <tr>
       <td>
         <div style={{marginLeft:"18vw"}}>
 <Grid>
    
    {data.filter(item=>item.type=== "part4"  ).map((image, id) => 
        <ImagePage im={image} t={image.name} color1="rgba(156,163,175)" height2="12.7vw" color="black" size="0.75vw" width="9vw" margin="vw" align="center" height= "9vw"  radius="0.5vw 0.5vw 0 0 " width2="9vw" margin1="1vw" />  
        )} 
        </Grid>
        </div>
        </td>
        <td>
          <Text size="1.8vw" align1="justify" marginLeft="20vw">Wedding Ring</Text>

          <Text color1="rgba(107,114,128)" size="0.8vw" align1="justify" marginLeft="20vw" marginTop="2vw">Your ring will always serve as a reminder of the love you two share. So, choose <br/> wisely and pick a beautiful wedding ring. You can find every type of design from <br/> timeless classics to the latest trends.</Text>
          <Button1 margin2="20vw"  >See More</Button1>
        
        </td>
        </tr>
        </table>
      </Div3>

      <Div3 bg='url("images/bg2.png")' pos="right" >
   <table>
     <tr>
     <td>
          <Text size="1.8vw" align1="justify" marginLeft="2vw">Wedding Gown</Text>

          <Text color1="rgba(107,114,128)" size="0.8vw" align1="justify" marginLeft="2vw" marginTop="2vw">Check out the latest dress trends so you can create your up-to-date dream gown <br/> with the most talented designers and high-end boutiques out there. Choose the <br/> best for you.</Text>
          <Button1 margin2="2vw" >See More</Button1>
        
        </td>
       <td>
         <div style={{marginLeft:"25vw"}}>
 <Grid>
    
    {data.filter(item=>item.type=== "part5"  ).map((image, id) => 
        <ImagePage im={image} t={image.name} color1="rgba(156,163,175)" height2="12.7vw" color="black" size="0.75vw" width="9vw" margin="vw" align="center" height= "9vw"  radius="0.5vw 0.5vw 0 0 " width2="9vw" margin1="1vw" />  
        )} 
        </Grid>
        </div>
        </td>
       
        </tr>
        </table>
      </Div3>
     
      <Div1 h="28vw">
        <Text size="1.8vw" align1="center" marginLeft="2vw" >Build Your Wedding Website</Text>
        <Text color1="rgba(107,114,128)" size="0.8vw"  align1="center" marginLeft="2vw">Keep all the good memories and memorable pictures you'll cherish forever safe <br/> using this feature. You will be able to choose its design and let your guests send <br/> pictures, videos, and special moments they've collected from your wedding day.</Text>
        <Grid>
    
    {data.filter(item=>item.type=== "part6"  ).map((image, id) => 
        <ImagePage im={image} t={image.name} color1="rgba(156,163,175)" height2="15vw" color="black" size="0.75vw" width="20vw" margin="vw" align="center" height= "15vw"  radius="0.5vw 0.5vw 0 0 " width2="9vw" margin1="40vw" />  
        )} 
        </Grid>
      </Div1>


    
    </div>
  )
}
