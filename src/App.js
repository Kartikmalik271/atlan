import { csv } from 'd3';
import datacsv from './samplecsv.csv'
import { useEffect, useState } from 'react';
import './App.css';
function App() {
  
  const [record,setRecord]=useState([]);
  const [name,setName]=useState("");
  const [queryName,setQueryName]=useState([]);
  const [queryRole,setQueryRole]=useState([]);
  useEffect(()=>{
    csv(datacsv).then(record=>{
      setRecord(record);
    });
  },[]);  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name[7]==='N' && name[10]==='E'){
        
      record.map((i)=>
      setQueryName(prevArray => [...prevArray, i.NAME])
      )
      setQueryRole([])
    }
    if (name[7]==='R' && name[10]==='E') {
      record.map((i)=>
      setQueryRole  (prevArray => [...prevArray, i.ROLE])
      )
      setQueryName([])
    } 
  }
    
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
      <div className='sql-form col-4'>
      <form onSubmit={handleSubmit}>
          <label>Enter your name:
            <input
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <input type="submit" />
        </form>

      </div>
          <div className='searchTable col-6'>
            { queryName.length > 0 && 
                (<table class="table table-striped table-sm">
                  <thead className='table-warning'>
                    <tr>
                      
                      <th scope="col">NAME</th>
                    
                    </tr>
                  </thead>
                  <tbody>
                    { queryName.map((item)=>
                      <tr>
                        <th scope="row">{item}</th>
                      
                      </tr>
                      )
                    }   
                  </tbody>
                </table>)
              
            ||
             (queryRole.length > 0 && 
                <table class="table table-striped table-sm">
                  <thead className='table-warning'>
                    <tr>
                      
                      <th scope="col">ROLE</th>
          
                    </tr>
                  </thead>
                  <tbody>
                    { queryRole.map((item)=>
                      <tr>
                        <th scope="row">{item}</th>
                      
                      </tr>
                      )
                    }   
                  </tbody>
                </table>
            )}

          </div>
    </div>
  );
}
export default App;
