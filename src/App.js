

import Header from './Components/Header';
import Nav from './Components/nav'
import Options from'./Components/Options'
import Buttons from './Components/Buttons'

function App() {
  return (
    <div>
      {/* <Header></Header> */}

      <Nav></Nav> 
      <table>

        <tr>

          <td><Buttons></Buttons></td>
          <td><Options></Options></td>
        </tr>
      </table>

    </div>
  );
}

export default App;
