import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import React, { useEffect } from "react";
function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar></NavBar>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  );
}

export default App;
