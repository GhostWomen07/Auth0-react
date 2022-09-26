import React from "react";

import { Cards, Header} from "components";
import { BrowserRouter, Routes, Route } from "react-router-dom"



const Home=()=>{
  return (
    <div className="d-flex flex-column min-vh-100">
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}/>
        <Route path="/profile" element={<Cards />}/>
      </Routes>
    </BrowserRouter>
      {/* <Main />
      <Cards />
      <Footer /> */}
    </div>
  );
};

export default Home;
