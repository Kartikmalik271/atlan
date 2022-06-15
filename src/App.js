import { csv } from 'd3';
import datacsv from './samplecsv.csv'
import { useEffect, useState } from 'react';
import './App.css';
function App() {
  
  const [record,setRecord]=useState([]);
  useEffect(()=>{
    csv(datacsv).then(record=>{
      setRecord(record);
    });
  },[]);  
 
  
  return (
    <div className="App">
      <div className='Costumer col-7 align-items-center'>
        <table class="table table-striped table-sm">
          <thead className='table-warning'>
            <tr>
              <th scope="col">#</th>
              <th scope="col">NAME</th>
              <th scope="col">ROLE</th>
            </tr>
          </thead>
          <tbody>
            { record.map((item)=>
              <tr>
                <th scope="row">{item.Sr}</th>
                <td>{item.NAME}</td>
                <td>{item.ROLE}</td>
              </tr>
              )
            }   
          </tbody>
        </table>
        
      </div>
    </div>
  );
}
export default App;
