import Nav from './Components/Nav';
import Slider from "./Components/Slider";
import ProductList from './Components/ProductList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Components/About';
import ProductInfo from './Components/ProductInfo';
import Footer from './Components/Footer';
import ContactUs from './Components/ContactUs';
import AddProduct from './AddProduct';
import { Provider } from 'react-redux';
import { store } from './Components/rtk/store';


function App() {
 
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Nav />
        <Routes>
          <Route path="/" element={
            <>
              <Slider />
              <ProductList />
            </>
          }>
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/detailes/:productId" element={<ProductInfo />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/addProduct" element={<AddProduct />} />
        </Routes>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
