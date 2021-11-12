import './App.css';
import { Homepage } from './pages/homepage.component';

import { Route, Routes, useParams , Link} from 'react-router-dom';


const HatsPage=()=>{
  return(
    <div>
      HATS PAGE...
    </div>
  )
}
 

function App(props) {
  console.log("homepage");
  return (
    <div>
      <Routes>
          <Route exact path='/' element={<Homepage/>} />
          <Route exact path='/hats' element={<HatsPage/>}/>
      </Routes>

    </div>
  );
}

export default App;
