import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Oders from './components/Oders/Oders';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Shipment from './components/Shipment/Shipment';
import Shop from './components/Shop/Shop';
import Singup from './components/Singup/Singup';

function App() {
  return (
    <div>
     <Header></Header>
    
 <Routes>
 <Route path='/' element={<Shop/>}></Route>
       <Route path='/shop' element={<Shop/>}></Route>
         <Route path='/orders' element={<Oders/>}></Route>
         <Route path='/inventory' element=
         {
         <RequireAuth>
              <Inventory/>
         </RequireAuth>
      }></Route>
        <Route path='/shipment' element={
          <RequireAuth>
            <Shipment/>
          </RequireAuth>
        }></Route>
         <Route path='/about' element={<About/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
           <Route path='/signup' element={<Singup/>}></Route>
 </Routes>

 </div>
  );
}

export default App;
