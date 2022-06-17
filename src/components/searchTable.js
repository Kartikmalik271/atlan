import React from 'react';
const searchTable = (queryName) => {
    return ( 
        <table class="table table-striped table-sm">
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
        </table>
     );
}
 
export default searchTable;