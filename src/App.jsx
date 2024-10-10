import React from "react";
import Pagination from "./components/Pagination";
import { Route,Routes } from "react-router-dom";
import FileStructure from "./components/FileStructure";
import { data } from "./Data";
import { ThemeProvider } from "./Context/ThemeContext";
import Navbar from "./components/Navbar";
import OtpPage from "./components/OTPPage";
import GridPractice from "./components/GridPractice";
import DataFetch from "./components/DataFetch";
import { TrafficSignal }  from './components/TrafficSignal'


function App(){
  return(
    <div>
      <ThemeProvider >
        <Navbar/>
      <Routes>
      <Route path="/" element={<Pagination/>}/>
      <Route path="/file-structure" element={<FileStructure data={data[0]}/>}/>
      <Route path='otp-page' element={<OtpPage/>}/>
      <Route path="/grid" element={<GridPractice/>}/>
      <Route path="/tanstack" element={<DataFetch/>}/>
      <Route path="/signal" element={<TrafficSignal/>}/>
      </Routes>
      </ThemeProvider>
    </div>
  )
}

export default App