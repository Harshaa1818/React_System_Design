import React from "react";
import Pagination from "./components/Pagination";
import { Route,Routes } from "react-router-dom";
import FileStructure from "./components/FileStructure";
import { data } from "./Data";
import { ThemeProvider } from "./Context/ThemeContext";
import Navbar from "./components/Navbar";
import OtpPage from "./components/OTPPage";


function App(){
  return(
    <div>
      <ThemeProvider >
        <Navbar/>
      <Routes>
      <Route path="/" element={<Pagination/>}/>
      <Route path="/file-structure" element={<FileStructure data={data[0]}/>}/>
      <Route path='otp-page' element={<OtpPage/>}/>
      </Routes>
      </ThemeProvider>
    </div>
  )
}

export default App