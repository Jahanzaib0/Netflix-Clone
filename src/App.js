
import './App.css';
import NetflixHome from './component/Home/NetflixHome';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Login from './component/Login';
import Unlimited from './component/Unlimited';
import ProtectedRoute from './component/ProtectedRoute';
function App() {
  
  return (
   <>
   <Router>
    <Routes>

 <Route path='/home' element={<ProtectedRoute Component={NetflixHome}/>}></Route>
 <Route path='/Login' element={<Login/>}></Route>
 <Route path="/" element={<Unlimited/>}></Route>
 
    </Routes>
 </Router>
   </>
  );
}

export default App;
