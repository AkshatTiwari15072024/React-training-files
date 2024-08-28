import React from "react";
import {BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Home';
import Create from './Create';
import Update from './Update';
import Delete from './Delete';
import SideBar from './Sidebar';
import Createlater from "./Createlater";
import Dontcreate from "./Dontcreate";
import Updatelater from "./Updatelater";
import Dontupdate from "./Dontupdate";
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <SideBar>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/create" element={<Create/>}></Route>
      <Route path="/update/:id" element={<Update/>}></Route>
      <Route path="/delete/:id" element={<Delete/>}></Route>
      <Route path="/createlater" element={<Createlater/>}></Route>
      <Route path="/dontcreate" element={<Dontcreate/>}></Route>
      <Route path="/updatelater" element={<Updatelater/>}></Route>
      <Route path="/dontupdate" element={<Dontupdate/>}></Route>
    </Routes>
    </SideBar>
    </BrowserRouter>
  );
}

export default App;
