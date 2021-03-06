import {React, useState} from 'react';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
import CsvDownloader from 'react-csv-downloader';


const Category = (props) => {

  //hooks
    const [name,setName]=useState("");
    const [queryName,setQueryName]=useState(["OPPS!!!!!!!!!! NO QUERY TO RUN"]);
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
          Toastify({
            text: "RUN SUCCESSUFLLY",
            duration: 3000,
            close: true,
            gravity: "top", 
            position: "center", 
            stopOnFocus: true, 
            style: {
              background: "linear-gradient(to right, #008080,#00b295)",
            }
          }).showToast();
        }

        if (name[7]==='D' && name[17]==='N') {
          props.record.map((i)=>
            setQueryRole  (prevArray => [...prevArray, i.description])
          )
          setQueryName([])
          Toastify({
            text: "RUN SUCCESSUFLLY",
            duration: 3000,
            close: true,
            gravity: "top", 
            position: "center", 
            stopOnFocus: true, 
            style: {
              background: "linear-gradient(to right, #008080,#00b295)",
            }
          }).showToast();
        }
        if ((name[7]!=='N' && name[7]!=='D') || (name[7]==='N' && name[10]!=='E') || (name[7] ==='D' && name[17]!=='N')){  
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
     
      const handleNamequery=()=>{
        setQueryName([])
        props.record.map((i)=>
            setQueryName(prevArray => [...prevArray, i.categoryName])
          )
          setQueryRole([])
          Toastify({
            text: "RUN SUCCESSUFLLY",
            duration: 3000,
            close: true,
            gravity: "top", 
            position: "center", 
            stopOnFocus: true, 
            style: {
              background: "linear-gradient(to right, #008080,#00b295)",
            }
          }).showToast();
      }

      const handleRolequery=()=>{
        
        props.record.map((i)=>
            setQueryRole  (prevArray => [...prevArray, i.description])
          )
          setQueryName([])
          Toastify({
            text: "RUN SUCCESSUFLLY",
            duration: 3000,
            close: true,
            gravity: "top", 
            position: "center", 
            stopOnFocus: true, 
            style: {
              background: "linear-gradient(to right, #008080,#00b295)",
            }
          }).showToast();
      }
      

    return ( 
        <div className='col-12 mt-5'>
{/* section for original table */}
          <div className="row justify-content-center">
            <div className='Costumer col-11 col-lg-7 px-0 mx-0'>
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
            <div className='main-option col-12 col-lg-4 pl-lg-5 mt-5'>
            <button className='btn btn-info col-12 col-lg-6 ml-lg-5 mt-3 disabled'>CATEGORY TABLE</button>
                <button className='btn btn-info col-12 col-lg-6 ml-lg-5 mt-2 disabled'>ROWS: {props.record.length}</button>
                <button className='btn btn-info col-12 col-lg-6 ml-lg-5 mt-2 disabled'>COLS: 3</button>
                <CsvDownloader className='btn btn-danger col-12 col-lg-6 ml-lg-5 mt-2 '
                      datas={props.record} 
                      filename="myfile"
                      extension=".csv"
                      separator=","
                      text="DOWNLOAD ALL"
                  />
                
            </div>
          </div>
{/*SQL editor box  */}
          <div className='sqlQuery col-12 mt-4'>
            <div className='row justify-content-center'>
                <div className='sql-form col-10 col-lg-5 px-0 mt-5 '>
                  <h4 style={{textDecoration:"underline"}}>QUERY EDITOR</h4>
                  <form onSubmit={handleSubmit}>
                    
                      <textarea className='col-11'
                        type="text"
                        placeholder='SELECT NAME/DESCRIPTION FROM CUSTOMER'
                        rows={6}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                  
                    <button className='btn btn-danger col-5' type="submit" >RUN</button>
                  </form>
                  <p className='col-12 mt-3'style={{color:'grey'}}>or select default queries from below</p>
                  <button className='btn btn-info col-10 ' onClick={handleNamequery} >SELECT NAME </button>
                  <button className='btn btn-info col-10 mt-2' onClick={handleRolequery} >SELECT DESCRIPTION </button>
                </div>
{/* QUERY TABLE SECTION */}
              <div className='searchTable col-11 col-lg-5 px-0'>
                    {/* conditonal rendering */}

                    { queryName.length > 0 && 
                        (<table class="table">
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
                        <table class="table ">
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
                          
                          text="DOWNLOAD RESULT"
                        />
                        ||
                        queryRole.length >0 &&
                        <CsvDownloader  
                          className='col-4 btn btn-success mt-4 '
                          datas={queryRole} 
                          filename="myfile"
                          extension=".csv"
                          separator=" "
                          
                          text="DOWNLOAD RESULT"
                        />

                    }
                  
              </div>
            </div>
            
          </div>
     );
}
 
export default Category;