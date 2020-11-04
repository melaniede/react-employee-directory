import React from "react";

function SearchForm () {
    return (
    <form class="form-inline">
        <input 
        class="form-control mr-sm-2" 
        type="search" 
        placeholder="Search" 
        aria-label="Search"/>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    );
}

export default SearchForm;


// import React from "react";
// import "./style.css";

// // Using the datalist element we can create autofill suggestions based on the props.breeds array
// function SearchForm(props) {
//   return (
//     <form className="search">
//       <div className="form-group">
//         <label htmlFor="breed">Breed Name:</label>
//         <input
//         //   value={props.search}
//         //   onChange={props.handleInputChange}
//           name="breed"
//           list="breeds"
//           type="text"
//           className="form-control"
//           placeholder="Type in a dog breed to begin"
//           id="breed"
//         />
//         {/* <datalist id="breeds">
//           {props.breeds.map(breed => (
//             <option value={breed} key={breed} />
//           ))}
//         </datalist> */}
//         <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
//           Search
//         </button>
//       </div>
//     </form>
//   );
// }

// export default SearchForm;