import {React, useState} from 'react';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
import CsvDownloader from 'react-csv-downloader';


const Category = (props) => {

    const [name,setName]=useState("");
    const [queryName,setQueryName]=useState(["OPPS!!!!!!!!!! NO QUERY RAN"]);
    const [queryRole,setQueryRole]=useState([]); 
            
    
    
//handle submit btn of query form
    const handleSubmit = (e) => {

        e.preventDefault();
        setQueryName([])
        if (name[7]==='N' && name[10]==='E'){   
          props.record.map((i)=>
            setQueryName(prevArray => [...prevArray, i.categoryName])
          )
          setQueryRole([])
        }
        if (name[7]==='D' && name[17]==='N') {
          props.record.map((i)=>
            setQueryRole  (prevArray => [...prevArray, i.description])
          )
          setQueryName([])
        }
        if ((name[7]!=='N' && name[17]!=='D' && name[10]!=='E' && name[17]!=='N') || (name[7]==='N' && name[10]!=='E') || (name[7] ==='D' && name[17    ]!=='N')){  
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
                    <th scope="col">#</th>
                    <th scope="col">NAME</th>
                    <th scope="col">DESCRIPTION</th>
                  </tr>
                </thead>
                <tbody>
                  { props.record.map((item)=>
                    <tr>
                      <th scope="row">{item.categoryID}</th>
                      <td>{item.categoryName}</td>
                      <td>{item.description}</td>
                    </tr>
                    )
                  }   
                </tbody>
              </table>
            </div>
            <div className='main-option col-4 pl-5 mt-5'>
                <button className='btn btn-info col-6 ml-5 mt-5 disabled'>ROWS: {props.record.length}</button>
                <button className='btn btn-info col-6 ml-5 mt-2 disabled'>COLS: 3</button>
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
                        placeholder='SELECT NAME/ROLE FROM CUSTOMER'
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
 
export default Category;