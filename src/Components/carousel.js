import React ,{useState}from 'react'
import {Data} from "./Options"

export default function carousel() {
    const Image =() => {
        const [cussrentImage,serCurrentImage] = useState(0)
    }
  return (
    <div>
        
        {
            Data.map((image,index)=> {
                return (
                    <div className= {index === currentImage }></div>



                )
            })

        }

















    </div>
  )
}
