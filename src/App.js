

import Header from './Components/Header';
import Nav from './Components/nav'
import Options from'./Components/Options'
import Buttons from './Components/Buttons'
import FeaturedVendors from './Components/FeaturedVendors';

function App() {
  return (
    <div>
      {/* <Header></Header> */}

      <Nav></Nav> 
      <table style={{ marginTop: "8vw"}}>

        <tr>

          <td><Buttons></Buttons></td>
          <td><Options></Options></td>
        </tr>
      </table>
      <FeaturedVendors/>

    </div>
  );
}

export default App;
