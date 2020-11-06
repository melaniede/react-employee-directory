import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "./components/Header";
import SearchForm from "./components/Search";
import API from "./utils/API.js"
import Table from "./components/Table";
import EmployeeRow from "./components/EmployeeRow";


function App() {

 const [results, setResult] = useState([]);

 useEffect(() => {
  API.getEmployees()
    .then(res => setResult( res.data.results ))
    .catch(err => console.log(err));
    }, []); 
    console.log(results);

  return (
    // <Router>
      <div>
        <Header />
        <SearchForm />
        <Table />
        {results.map(employee => (
        <EmployeeRow
          key={employee.id.value}
          image={employee.picture.thumbnail}
          name={employee.name.first + " " + employee.name.last}
          email={employee.email}
          phone={employee.phone}
        />
      ))};
      </div>
    // </Router>
  );
}


export default App;
