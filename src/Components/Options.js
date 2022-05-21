import React ,{ useState } from 'react'

import styled from 'styled-components'

import ImagePage from '../Components/images'





const Grid= styled.div `
display: grid;
grid-template-columns: auto auto auto;
gap: 10px;
width:;

` 
    
  
  
  


export default function Options() {
        
      
      
        const [data, setData] = useState([
          { id: '1', image: 'images/1.jpeg', name: 'Irresistible appetizers', type: 'option' },
          { id: '2', image: 'images/2.jpeg' , name: 'GuestBook Cards', type: 'option' },
          { id: '3', image: 'images/3.jpeg' , name: 'Nature inspired candy station', type: 'option'},
          { id: '4', image: 'images/4.jpeg', name: 'Wedding chocolate mini boxes', type: 'option' },
          { id: '5', image: 'images/5.jpeg', name: 'Wedding table numbers', type: 'option'},
          { id: '6', image: 'images/6.jpeg', name: 'Live ice cream station', type: 'option' },
          { id: '7', image: 'vendor1.webp' , name: 'vendor1', type: 'vendor'},
          { id: '8', image: 'vendor2.webp', name: 'vendor2', type: 'vendor' },
          { id: '9', image: 'vendor3.webp' , name: 'vendor3', type: 'vendor'},
          { id: '10', image: 'vendor4.webp', name: 'vendor4', type: 'vendor' },
    
        ]);

      


    
  

  return (
    
      
<div style={{width:'100vw'}}>      


    
      
        {/* { data.filter(item=>item.type ==='option').map((image, id) => <ImagePage im={image} t="heelloo" width='10px' />  )} */}
          

    {/* <table>

  
    <tr>
        <td>
        <ImagePage im={Images1} color="black" size="1.02vw" t="’ corner" width="19vw" height="10.5vw"  radius="1vw"
         align="center" margin="-0.5vw"/>  
        </td>
        <td>
        <ImagePage im={Images2} color="black" size="1.02vw" t="GuestBook Cards"  width="19vw" height="10.5vw"  margin="-0.5vw" radius="1vw"  align="center"/> 

        </td>
        <td>
        <ImagePage im={Images3} color="black" size="1.02vw" t="Nature inspired candy station" width="19vw"height="10.5vw"  margin="-0.5vw"  radius="1vw" align="center"/> 

        </td>
    </tr>
    
    <tr>
        <td>
        <ImagePage im={Images4} color="black" size="1.02vw" t="Wedding chocolate mini boxes" width="19vw" height="10.5vw"  margin="-0.5vw"  radius="1vw"  align="center" />  
        </td>
        <td>
        <ImagePage im={Images5} color="black" size="1.02vw" t="Wedding table numbers" width="19vw"height="10.5vw"  radius="1vw"   margin="-0.5vw" align="center"/> 

        </td>
        <td>
        <ImagePage im={Images6} color="black" size="1.02vw" t="Live ice cream station" width="19vw"height="10.5vw" radius="1vw"  margin="-0.5vw"  align="center"/> 

        </td>
    </tr>




    </table>
              */}
    

<Grid>
    
  
  {data.filter(item=>item.type ==='option').map((image, id) => 
   <ImagePage im={image} color="black" size="1.02vw" t={image.name} width="19vw"height="10.5vw" radius="1vw"  margin="-0.5vw"  align="center"></ImagePage>)} 
 


</Grid>

</div>   




  )
}
