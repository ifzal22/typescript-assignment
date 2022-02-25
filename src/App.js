
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Inventory from './component/Inventory/Inventory';
import NotFound from './component/NotFound/NotFound';
import OrderReview from './component/OrderReaview/OrderReview';
import Shop from './component/Shop/Shop';


function App() {
  return (
    <div >
    <Header></Header>
    <BrowserRouter>
    <Routes>
      <Route element={<Shop></Shop>} exact path="/">
      
      </Route>
      <Route element={   <Shop></Shop>} exact path="/shop">
   
      </Route>
      <Route element={  <OrderReview></OrderReview>} exact path="/Review">
    
      </Route>
      <Route element={  <Inventory></Inventory>} path="inventory">
     
      </Route>
      <Route element={ <NotFound></NotFound>} path="*">
  

      </Route>
    </Routes>
    
    </BrowserRouter>
    <Shop></Shop>

    </div>
  );
}

export default App;
