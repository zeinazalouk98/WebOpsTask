import React ,{ useState } from 'react'

import styled from 'styled-components'

import ImagePage from '../Components/images'





const Grid= styled.div `
display: grid;
grid-template-columns: auto auto auto;
gap: 10px;
margin-left:4vw;

` 
    
  
  
  


export default function Options() {
        
      
      
        const [data, setData] = useState([
          { id: '1', image: 'images/1.jpeg', name: 'Irresistible appetizers', type: 'option' },
          { id: '2', image: 'images/2.jpeg' , name: 'GuestBook Cards', type: 'option' },
          { id: '3', image: 'images/3.jpeg' , name: 'Nature inspired candy station', type: 'option'},
          { id: '4', image: 'images/4.jpeg', name: 'Wedding chocolate mini boxes', type: 'option' },
          { id: '5', image: 'images/5.jpeg', name: 'Wedding table numbers', type: 'option'},
          { id: '6', image: 'images/6.jpeg', name: 'Live ice cream station', type: 'option' },
         
    
        ]);

      


    
  

  return (
    
      
<div >      

<Grid>
    
  
  {data.filter(item=>item).map((image, id) => 
   <ImagePage im={image} color="black" size="1.02vw" t={image.name} width="19vw"height="10.5vw" radius="1vw"  margin="0.5vw"  align="center"></ImagePage>)} 
 


</Grid>

</div>   




  )
}
