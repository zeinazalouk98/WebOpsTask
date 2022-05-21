
import Nav from '../Components/nav'
import Options from'../Components/Options'
import Buttons from '../Components/Buttons'
import FeaturedVendors from '../Components/FeaturedVendors';
import NewAndNotable from '../NewAndNotable';
import Footer from '../Components/Footer';
function GalleryWedding() {
  return (
    <div>
    
       <Nav></Nav> 
      <table style={{ marginTop: "8vw"}}>

        <tr>

          <td><Buttons></Buttons></td> 
          <Options></Options>
        </tr>
      </table>
      <FeaturedVendors/>
      <NewAndNotable/>
      <Footer></Footer> 



    </div>
  );
}

export default GalleryWedding;
