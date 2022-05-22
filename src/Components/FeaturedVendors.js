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
    


export default function FeaturedVendors() {


        const [data, setData] = useState([
     
                { id: '1', image: 'images/vendor1.webp' , name: 'Haitham Diab', type: 'vendor'},
                { id: '2', image: 'images/vendor2.webp', name: 'Maram Borhan', type: 'vendor' },
                { id: '3', image: 'images/vendor3.webp' , name: 'Dina Ragheb', type: 'vendor'},
                { id: '4', image: 'images/vendor4.webp', name: 'Mangawy Owes Photography', type: 'vendor' },
          
              ]);



        

  return (
    
      
    <div style={{    marginLeft: "17vw", marginTop: "2vw"}}>
        
            <Text> Featured Vendors</Text>
 
<Grid>
    
  
  {data.filter(item=>item).map((image, id) => 
   <ImagePage im={image} t={image.name} color1="rgba(156,163,175)" t2={image.name} height2="20vw" color="black" size="1.02vw" width="15vw" margin="-1vw" height= "16vw"  radius="0.5vw 0.5vw 0 0 "/>  
   )}

</Grid>


    </div>
  )
}
