
import React, {useState} from 'react'
import styled from 'styled-components'
import ImagePage from './Components/images'
export default function NewAndNotable() {



    const Text = styled.p`
color: black;
font-size: 2vw;
font-weight: bold;
text-align: center;
margin-top:vw
`
  return (
    <div>
        <div style={{backgroundColor:"rgb(246, 246, 246)",marginTop:"2vw"}}>
        
        
        <div style={{marginTop:"2vw",    height: "22vw"}}>
        <Text>New and Notable</Text>
        <table style={{marginLeft:'2vw'}}>
            <tr>


            <td>
                    <ImagePage im='images/iman.webp' t="Iman Saab"color1="rgba(156,163,175)" height2="14vw" color="black" size="0.9vw" width="10vw" height= "10vw" align="left" margin="-1vw" t2="Iman Saab" radius="0.5vw 0.5vw 0 0 "/>  
                    </td>

                    <td>
                    <ImagePage im='images/rustique.webp' t="Rustique Events"  color1="rgba(156,163,175)" t2="Rustique Events" height2="14vw" color="black" size="0.9vw" width="10vw" height= "10vw" margin="-1vw" align="left" radius="0.5vw 0.5vw 0 0 "/>   
                    </td>

                    <td>
                    <ImagePage im='images/dina.webp' t="Dina Mourad"  color1="rgba(156,163,175)" t2="Dina Mourad" height2="14vw" color="black" size="0.9vw" width="10vw" height= "10vw" margin="-1vw" radius="0.5vw 0.5vw 0 0 "/>  
                    </td>


                    <td>
                    <ImagePage im='images/hoxton.webp' t="Huxton House" color1="rgba(156,163,175)" t2="Huxton House"height2="14vw" color="black" size="0.9vw" width="10vw" height= "10vw" margin="-1vw"  radius="0.5vw 0.5vw 0 0 "/>  
                        </td>

                        <td>
                    <ImagePage im='images/aya.webp' t="Aya Abdelhamid" color1="rgba(156,163,175)" t2="Aya Abdelhamid" height2="14vw" color="black" size="0.9vw" width="10vw" height= "10vw" margin="-1vw" radius="0.5vw 0.5vw 0 0 "/>  
                        </td>
                        <td>
                    <ImagePage im="images/iram.webp" t="Iram" color1="rgba(156,163,175)" t2="Iram" height2="14vw" color="black" size="0.9vw" width="10vw" height= "10vw" margin="-1vw" radius="0.5vw 0.5vw 0 0 "/>  
                        </td>




            </tr>
        </table>


</div>




        </div>

    </div>
  )
}
