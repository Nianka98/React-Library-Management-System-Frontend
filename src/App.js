import "bootstrap/dist/css/bootstrap.min.css";
import UserRegister from "./components/UserRegister";
import BookRegister from "./components/BookRegister";
import UserHome from "./components/UserHome";
import Home from "./components/Home";
import About from "./components/About";
import Register from "./components/Register";
import BookCheckOut from "./components/BookCheckOut";
import CheckedBook from "./components/CheckedBook";
import BookGallery from "./components/BookGallery";
import Pricing from "./components/sample";
// import CheckedBook from "./components/CheckedBook";
//import logo from './logo.svg';
import { Route, Routes, useLocation } from "react-router-dom";
// import Navbar from "./Navbar";
import Navbar from "./Navbar";
import "./App.css";
import Login from "./components/Login";
// import HomeNew from "./components/LTE/HomeNew";
// import Header from "./components/LTE/Header";
// import Footer from "./components/LTE/Footer";
// import SideNav from "./components/LTE/SideNav";

function App() {
  const location = useLocation();
  const routesWithoutNavbar = ["/"];
  const hideNavbar = routesWithoutNavbar.includes(location.pathname);
  return (
    <>
      {!hideNavbar && <Navbar />}
      <div className="container">
        {" "}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/UserHome" element={<UserHome />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/UserRegister" element={<UserRegister />} />
          <Route path="/BookRegister" element={<BookRegister />} />
          <Route path="/About" element={<About />} />
          <Route path="/BookCheckOut" element={<BookCheckOut />} />
          <Route path="/CheckedBook" element={<CheckedBook />} />
          <Route path="/BookGallery" element={<BookGallery />} />
          <Route path="/CheckedBook" element={<CheckedBook />} />
          <Route path="/sample" element={<Pricing />} />
        </Routes>
        {/* <Header />
        <HomeNew />
        <SideNav />
        <Footer /> */}
      </div>
    </>
  );
}

export default App;
