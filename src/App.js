import React from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "./components/Home";
import About from "./components/About";
import Research from "./components/Research";
import People from "./components/People";
import Education from "./components/Education";
import Inclusion from "./components/Inclusion";
import Industry from "./components/Industry";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
      <div>
          <Header/>
          <Routes>
            
                <Route path="/aspire" element={<Home/>} />
                <Route path="/aspire/about" element={<About/>}/>
                <Route path="/aspire/research" element={<Research/>}/>
                <Route path="/aspire/people" element={<People/>}/>
                <Route path="/aspire/education" element={<Education/>}/>
                <Route path="/aspire/inclusion" element={<Inclusion/>}/>
                <Route path="/aspire/industry" element={<Industry/>}/>
       
          </Routes>
          <Footer/>
      </div>

  );
}

export default App;
