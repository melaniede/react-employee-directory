import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "./components/Header";
import SearchForm from "./components/Search";
// import myComponent from "./components/Table";
import API from "./utils/API.js"
// import tableContainer from "./components/Table";



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
        {/* <myComponent /> */}
      </div>
    // </Router>
  );
}


export default App;
