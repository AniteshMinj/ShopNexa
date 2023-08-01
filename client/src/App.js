import logo from './logo.svg';
import './App.css';
import Card from './component/card/Card';
import NavBar from './component/navbar/NavBar';
import Home from './pages/Home/Home';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import BuyProduct from './pages/BuyProduct/BuyProduct';
import ProductPage from './pages/ProductPage/ProductPage';
import BuyProduct from './pages/BuyProduct/BuyProduct';
import SignUp from './pages/Signin-Signout/SignUp';
import LogIn from './pages/Signin-Signout/LogIn';
import { Outlet } from 'react-router';

function App() {
  return (
    <>
     {/* <Home/>   */}
     <BrowserRouter>
     <Routes>
        <Route path="/LogIn" element={<LogIn/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route element={
            <>
              <NavBar />
              <Outlet />
            </>
          }>

        <Route path="/" element={<Home/>}/>
        <Route path="/ProductDetails" element={<ProductPage/>}/>
        <Route path="/BuyProduct" element={<BuyProduct/>}/>
          </Route>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
