import {React, useState} from 'react';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
import CsvDownloader from 'react-csv-downloader';


const Supply = (props) => {

    const [name,setName]=useState("");
    const [queryName,setQueryName]=useState(["OPPS!!!!!!!!!! NO QUERY RAN"]);
    const [queryRole,setQueryRole]=useState([]); 
            
    
    
//handle submit btn of query form
    const handleSubmit = (e) => {

        e.preventDefault();
        setQueryName([])
        if (name[7]==='C' && name[18]==='E'){   
          props.record.map((i)=>
            setQueryName(prevArray => [...prevArray, i.companyName])
          )
          setQueryRole([])
        }
        if (name[7]==='C' && name[13]==='T') {
          props.record.map((i)=>
            setQueryRole  (prevArray => [...prevArray, i.contactName])
          )
          setQueryName([])
        }
        if ((name[7]!=='C' && name[13]!=='T' && name[18]!=='E') || (name[7]==='C' && name[18]!=='E') || (name[7] ==='C' && name[13]!=='T')){  
          //alert message
          Toastify({
            text: "INVALID RESPONSE",
            duration: 3000,
            close: true,
            gravity: "top", 
            position: "center", 
            stopOnFocus: true, 
            style: {
              background: "linear-gradient(to right, #ab2346, #cc2936)",
            }
          }).showToast();
        } 
      }
     

    return ( 
        <div className='col-12 mt-5'>
{/* section for original table */}
          <div className="row justify-content-center">
            <div className='Costumer col-7 px-0 mx-0'>
              <table class="table  ">
                <thead className='table-primary'>
                  <tr>
                    <th scope="col">SUPPLIER_ID</th>
                    <th scope="col">COMPANY_NAME</th>
                    <th scope="col">CONTACT</th>
                    <th scope="col">ADDRESS</th>
                  </tr>
                </thead>
                <tbody>
                  { props.record.map((item)=>
                    <tr>
                      <th scope="row">{item.supplierID}</th>
                      <td>{item.companyName}</td>
                      <td>{item.contactName}</td>
                      <td>{item.address}</td>
                    </tr>
                    )
                  }   
                </tbody>
              </table>
            </div>
            <div className='main-option col-4 pl-5 mt-5'>
                <button className='btn btn-info col-6 ml-5 mt-5 disabled'>ROWS: {props.record.length}</button>
                <button className='btn btn-info col-6 ml-5 mt-2 disabled'>COLS: 4</button>
                <CsvDownloader className='btn btn-danger col-6 ml-5 mt-2 '
                      datas={props.record} 
                      filename="myfile"
                      extension=".csv"
                      separator=","
                      text="DOWNLOAD ALL"
                  />
                
            </div>
          </div>
          <div className='sqlQuery col-12 mt-4'>
            <div className='row justify-content-center'>
                <div className='sql-form col-5 px-0 mt-5 '>
                  <form onSubmit={handleSubmit}>
                    
                      <textarea
                        type="text"
                        placeholder='SELECT COMPANY_NAME FROM CUSTOMER'
                        cols={60}
                        rows={6}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                  
                    <button className='btn btn-danger col-5' type="submit" >RUN</button>
                  </form>
                  
                </div>

              <div className='searchTable col-5 px-0'>

{/* conditonal rendering */}
                    { queryName.length > 0 && 
                        (<table class="table table-striped ">
                          <thead className='table-warning'>
                            <tr>
                              
                              <th scope="col">QUERY RESULT</th>
                            
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
                        </table>
                        )
                        

                    ||
                    (queryRole.length > 0 && 
                        <table class="table table-striped ">
                          <thead className='table-warning'>
                            <tr>
                              
                              <th scope="col">QUERY RESULT</th>
                  
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
                  {
                      queryName.length >0 &&
                        <CsvDownloader  
                          className='col-4 btn btn-success mt-4 '
                          datas={queryName} 
                          filename="myfile"
                          extension=".csv"
                          separator=" "
                          
                          text="DOWNLOAD"
                        />
                        ||
                        queryRole.length >0 &&
                        <CsvDownloader  
                          className='col-4 btn btn-success mt-4 '
                          datas={queryRole} 
                          filename="myfile"
                          extension=".csv"
                          separator=" "
                          
                          text="DOWNLOAD"
                        />

                    }
                  
              </div>
            </div>
            
          </div>
     );
}
 
export default Supply;