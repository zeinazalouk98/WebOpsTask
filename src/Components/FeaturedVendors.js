import React, {useState} from 'react'
import styled from 'styled-components'

import ImagePage from '../Components/images'




const Text = styled.p`
color: black;
font-size: 2vw;
font-weight: bold;
text-align: center;
margin-Left: -14vw;
`



const Grid= styled.div `
display: grid;
grid-auto-flow: column;  
gap: 10px;
margin-left:vw;
width:15vw
` 
const Div = styled.div ` margin-left: 15vw;
 margin-top: 2vw`
const Div1 = styled.div `background-Color:rgb(246, 246, 246);
margin-top:2vw`
const Div2 =styled.div `
margin-left:12vw;
margin-top:2vw;  
height: 22vw;
`

export default function FeaturedVendors() {


        const [data, setData] = useState([
     
                { id: '1', image: 'images/vendor1.webp' , name: 'Haitham Diab', type: 'vendor'},
                { id: '2', image: 'images/vendor2.webp', name: 'Maram Borhan', type: 'vendor' },
                { id: '3', image: 'images/vendor3.webp' , name: 'Dina Ragheb', type: 'vendor'},
                { id: '4', image: 'images/vendor4.webp', name: 'Mangawy Owes Photography', type: 'vendor' },
                { id: '5', image: 'images/sheraton.webp', name: 'Sheraton Miramar Resort El-Gouna', type: 'vendor' },
                { id: '6', image: 'images/iman.webp' , name: "Iman Saab", type: 'note'},
                { id: '7', image: 'images/rustique.webp', name: "Rustique Events", type: 'note' },
                { id: '8', image: 'images/dina.webp' , name: "Dina Mourad", type: 'note'},
                { id: '9', image: 'images/hoxton.webp', name: "Huxton House", type: 'note' },
                { id: '10', image: 'images/aya.webp', name: "Aya Abdelhamid", type: 'note' },
                { id: '11', image: "images/iram.webp", name: "Iram", type: 'note' },
                { id: '12', image: 'images/new1.webp', name: "Mohamed Al Sagheer", type: 'note' },
                { id: '13', image: 'images/new2.webp', name: "Khaled Almanaa", type: 'note' },
                { id: '14', image: "images/new3.webp", name: "We Do Films", type: 'note' },
                   
                 
          
              ]);



        

  return (
    
     <div> 
    <Div>
        
            <Text> Featured Vendors</Text>
 
                <Grid>
    
  
                 {data.filter(item=>item.type==="vendor").map((image, id) => 
                 <ImagePage im={image} t={image.name} color1="rgba(156,163,175)" t2={image.name} height2="16vw" color="black" size="0.84vw" width="13vw" margin="-1vw" height= "12vw"  radius="0.5vw 0.5vw 0 0 "/>  
                        )}

                </Grid>


        </Div>




    {/* new and noteable part */}
        <div>
        <Div1>
        
        
        <Div2>
       
        <Text>New and Notable</Text>
        <Grid>


        {data.filter(item=>item.type=== "note"  ).map((image, id) => 
        <ImagePage im={image} t={image.name} color1="rgba(156,163,175)" t2={image.name} height2="10.5vw" color="black" size="0.75vw" width="8vw" margin="-0.5vw" height= "7vw"  radius="0.5vw 0.5vw 0 0 "/>  
        )}

        </Grid>



        </Div2>


        

        </Div1>

        </div>
        </div>
    
  )
}
