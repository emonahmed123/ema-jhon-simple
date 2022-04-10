import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Oders from './components/Oders/Oders';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
     <Header></Header>
    
 <Routes>
 <Route path='/' element={<Shop/>}></Route>
       <Route path='/shop' element={<Shop/>}></Route>
         <Route path='/orders' element={<Oders/>}></Route>
         <Route path='/inventory' element={<Inventory/>}></Route>
         <Route path='/about' element={<About/>}></Route>
 </Routes>

 </div>
  );
}

export default App;
