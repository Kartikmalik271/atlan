import { useEffect, useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import { csv } from 'd3';
import datacsv from './samplecsv.csv'
import './App.css';
import Customer from './components/customer';
import Category from './components/category';
import Nav from './components/nav';
import Territory from './components/territory';
import Supply from './components/supply';


function App() {
  
//hooks
  const [record,setRecord]=useState([]);
  const [recordcategory,setRecordcategory]=useState([])
  const [territories,setTerritories]=useState([]);
  const [suppliers,setSuppliers]=useState([]);

// to declaring with initial values when component mounts
  useEffect(()=>{
    csv(datacsv).then(record=>{
      setRecord(record);
    });
    csv('https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/categories.csv').then(item=>{
      setRecordcategory(item)
    });
    csv('https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/territories.csv').then(ter=>{
      setTerritories(ter)
    });
    csv('https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/suppliers.csv').then(supply=>{
      setSuppliers(supply)
    });
  },[]);

  return (
    <div className="App">
    <Nav/>
    {/* routs declaration */}
    <Routes>
      <Route path="/" element={<Customer record={record}/>} />
      <Route path="supplier" element={<Supply record={suppliers}/>} />
      <Route path="category" element={ <Category record={recordcategory}/>} />
      <Route path="territory" element={ <Territory record={territories}/> } />
    </Routes> 
    <p className='col-12 mt-4' style={{color:'grey',textAlign:"center"}}>-KARTIK MALIK</p>       
    </div>
  );
}
export default App;
