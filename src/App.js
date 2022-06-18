import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { csv } from 'd3';
import datacsv from './samplecsv.csv'
import './App.css';
import Customer from './components/customer';
import Nav from './components/nav';
function App() {
  
  const [record,setRecord]=useState([]);
 
  useEffect(()=>{
    csv(datacsv).then(record=>{
      setRecord(record);
    });
  },[]);  
  
    
  return (
    <div className="App">
      <div className='NavBar col-12 px-0 py-10px'>
        
            
      </div>
      <BrowserRouter>
        <Routes>
            <Route path="/" exact={true} element={<Customer record={record}/>} />
        </Routes>
</BrowserRouter>
            
    </div>
  );
}
export default App;
