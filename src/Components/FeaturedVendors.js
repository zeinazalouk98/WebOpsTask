import React, {useState} from 'react'
import styled from 'styled-components'

import ImagePage from '../Components/images'







export default function FeaturedVendors() {


        // const [images, setImages] = useState([

          
        //   { id: '1', image: 'vendor' },
        //   { id: '2', image: vendors2 },
        //   { id: '3', image: vendors3 },
        //   { id: '4', image: vendors4 },
    
        // ]);



        
const Text = styled.p`
color: black;
font-size: 2vw;
font-weight: bold;
text-align: center;
margin-Left: -14vw;
`
    
  return (
    <div style={{    marginLeft: "17vw", marginTop: "2vw"}}>
        
            <Text> Featured Vendors</Text>
            <table>
                <tr>
                    <td>
                    <ImagePage im='images/vendor1.webp' t="Haitham Diab"color1="rgba(156,163,175)" height2="20vw" color="black" size="1.02vw" width="15vw" height= "16vw" align="left" margin="-1vw" t2="Haitham Diab" radius="0.5vw 0.5vw 0 0 "/>  
                    </td>

                    <td>
                    <ImagePage im='images/vendor2.webp' t="Maram Borhan"  width="15vw" color1="rgba(156,163,175)" t2="Maram Borhan" height2="20vw" color="black" size="1.02vw" height= "16vw" margin="-1vw" align="left" radius="0.5vw 0.5vw 0 0 "/>   
                    </td>

                    <td>
                    <ImagePage im='images/vendor3.webp' t="Dina Ragheb" width="15vw" color1="rgba(156,163,175)" t2="Dina Ragheb" height2="20vw" color="black" size="1.02vw" height= "16vw" margin="-1vw" radius="0.5vw 0.5vw 0 0 "/>  
                    </td>


                    <td>
                    <ImagePage im='images/vendor4.webp' t="Mangawy Owes Photography" color1="rgba(156,163,175)" t2="Mangawy Owes Photography" height2="20vw" color="black" size="1.02vw" width="15vw" margin="-1vw" height= "16vw"  radius="0.5vw 0.5vw 0 0 "/>  
                        </td>
                </tr>
            </table>
        







    </div>
  )
}
