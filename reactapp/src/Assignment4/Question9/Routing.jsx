//Question9
// Implement a responsive sidebar navigation using Material-UI's Drawer component.
//  Include links that allow users to navigate between different sections of your web app.

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideNav from "./SideNav";
import AboutUs from "./AboutUs";
import Header from "./Header";
import Footer from "./Footer";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SideNav />}>
          <Route path="header" element={<Header />}></Route>
          <Route path="aboutus" element={<AboutUs />}></Route>
          <Route path="footer" element={<Footer />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
