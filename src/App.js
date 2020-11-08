import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "./components/Header";
import API from "./utils/API.js"
import MaterialTable from "material-table";


function App() {

 const [results, setResult] = useState([]);

 useEffect(() => {
  API.getEmployees()
    .then(res => setResult( res.data.results ))
    .catch(err => console.log(err));
    }, []); 
    console.log(results);

  return (
      <div>
        <Header />
        <div style={{ maxWidth: '100%' }}>
          <MaterialTable
            title= 'Employee Table'
            columns={[
              {title: 'Employee', field: 'picture.thumbnail', render: rowData => <img src={rowData.picture.thumbnail}/> },
              {title: 'First Name', field: 'name.first'},
              {title: 'Last Name', field: 'name.last'},
              {title: 'Email', field: 'email'},
              {title: 'Phone Number', field: 'phone'}
            ]}
            data={results}
            options={{
              search: true,
              showTitle: false
            }} />
        </div>
      </div>
  );
}


export default App;
