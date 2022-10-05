import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Logements from "./pages/Logements";

const App = () => {
  return (
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="a-propos" element={<About />}></Route>
        <Route path="*" element={<Error404 />}></Route>
        <Route exact path="/logements/:id" element={<Logements />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
