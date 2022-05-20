import React, {useState} from 'react'
import styled from 'styled-components'
import vendors1 from '../images/vendor1.webp'
import vendors2 from '../images/vendor2.webp'
import vendors3 from '../images/vendor3.webp'
import vendors4 from '../images/vendor4.webp'
import ImagePage from '../Components/images'







export default function FeaturedVendors() {


        const [images, setImages] = useState([

          
          { id: '1', image: vendors1 },
          { id: '2', image: vendors2 },
          { id: '3', image: vendors3 },
          { id: '4', image: vendors4 },
    
        ]);



        
const Text = styled.p`
color: black;
font-size: 2vw;
font-weight: bold;
text-align: center;
`
    
  return (
    <div style={{    marginLeft: "11vw", marginTop: "2vw"}}>
        
            <Text> Featured Vendors</Text>
            <table>
                <tr>
                    <td>
                    <ImagePage im={vendors1} t="Haitham Diab" width="15vw" height= "16vw" radius="1vw 1vw 0 0 "/>  
                    </td>

                    <td>
                    <ImagePage im={vendors2} t="Maram Borhan"  width="15vw" height= "16vw"  radius="1vw 1vw 0 0 "/>   
                    </td>

                    <td>
                    <ImagePage im={vendors3} t="Dina Ragheb" width="15vw" height= "16vw" radius="1vw 1vw 0 0 "/>  
                    </td>


                    <td>
                    <ImagePage im={vendors4} t="Mangawy Owes Photography"  width="15vw" height= "16vw"  radius="1vw 1vw 0 0 "/>  
                        </td>
                </tr>
            </table>
        







    </div>
  )
}
