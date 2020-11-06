import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "./components/Header";
import SearchForm from "./components/Search";
import API from "./utils/API.js"
import Table from "./components/Table";



function App() {

 const [result, setResult] = useState();

 useEffect(() => {
  API.getEmployees()
    .then(res => setResult({ result: res.data }))
    .catch(err => console.log(err));
    }, []);
    console.log(result);


  return (
    // <Router>
      <div>
        <Header />
        <SearchForm />
        <Table />
        {/* <myComponent /> */}
        {result.results.map(employee => (
        <Employee
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
