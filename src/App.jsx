import React from "react";
import Pagination from "./components/Pagination";
import { Route,Routes } from "react-router-dom";
import FileStructure from "./components/FileStructure";
import { data } from "./Data";
import { ThemeProvider } from "./Context/ThemeContext";
import Navbar from "./components/Navbar";


function App(){
  return(
    <div>
      <ThemeProvider >
        <Navbar/>
      <Routes>
      <Route path="/" element={<Pagination/>}/>
      <Route path="/file-structure" element={<FileStructure data={data[0]}/>}/>
      </Routes>
      </ThemeProvider>
    </div>
  )
}

export default App