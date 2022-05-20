import React ,{ useState } from 'react'
import Images1 from '../images/1.jpeg'

import Images2 from '../images/2.jpeg'

import Images3 from '../images/3.jpeg'

import Images4 from '../images/4.jpeg'
import Images5 from '../images/5.jpeg'

import Images6 from '../images/6.jpeg'
import ImagePage from '../Components/images'


export default function Options() {

    // const IMAGES = {
    //     image1: require(Images1),
    //     image2: require('../images/2.jpeg'),
    //     image3: require('../images/3.jpeg'),
    //     image4: require('../images/4.jpeg'),
    //     image5: require('../images/5.jpeg'),
    //     image6: require('../images/6.jpeg'),
        
    //   };
      
      
        const [images, setImages] = useState([
          { id: '1', image: Images1 },
          { id: '2', image: Images2 },
          { id: '3', image: Images3 },
          { id: '4', image: Images4 },
          { id: '5', image: Images5},
          { id: '6', image: Images6 },
    
        ]);
    
  

  return (
      
    <div>
        
        {/* {images.map((image, id) => <ImagePage im={image} t="heelloo" />  )} */}
          

    <table>


    <tr>
        <td>
        <ImagePage im={Images1} t="Irresistible appetizers’ corner" />  
        </td>
        <td>
        <ImagePage im={Images2} t="GuestBook Cards" /> 

        </td>
        <td>
        <ImagePage im={Images3} t="Nature inspired candy station" /> 

        </td>
    </tr>
    
    <tr>
        <td>
        <ImagePage im={Images4} t="Wedding chocolate mini boxes" />  
        </td>
        <td>
        <ImagePage im={Images5} t="Wedding table numbers" /> 

        </td>
        <td>
        <ImagePage im={Images6} t="Live ice cream station" /> 

        </td>
    </tr>




    </table>
             


        




    </div>
  )
}
