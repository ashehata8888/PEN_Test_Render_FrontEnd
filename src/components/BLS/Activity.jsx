// import React from "react";
/* eslint-disable */
import Footer from "../Footer"
import { useLocation } from "react-router-dom";

// const position = login.res.data.position
// console.log(position)
// "http://https://backend-ahmed-shehata-crm.onrender.com/api/bus"
      /* <li key={userObj.id}>{userObj}</li> */

import React, { useEffect, useState } from 'react'




function Activity () {
  const location = useLocation();
  console.log(location.state.token);
  const toto = location.state.token;

  const [user, setUser] = useState([]);
  const key = location.state.bu_id - 1;
  const fetchData = () => {
    return (
      fetch('http://https://backend-ahmed-shehata-crm.onrender.com/api/bus', {
        method: 'GET',
        headers: new Headers({
        'Authorization': 'bearer '+ (toto), 
        'Content-Type': 'application/x-www-form-urlencoded'
    }), 

      })
        .then((response) => response.json())
        // .then((data) => setUser(data.message));
        .then((data) => {
          const res = data.data[key.toString()]
          console.log(Object.values(res))
          return setUser(Object.values(res))
        })
    )
  
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <main>
      <h1>User List</h1>

      
        <label htmlFor="cars">BU:</label>
        <select name="cars" id="cars">
          {user && user.length > 0 && user.map((userObj, index) => (
          
            <option value={userObj}>{userObj}</option>
     ))}
</select>
      
     
    

 
    </main>);
  
}



export default Activity;


/* function Activit() { */
//   const location = useLocation()
//     console.log(location)
    
//       let option1, option2, option3, option4;
//   if (location.state.position === "Admin"){
//     option1 = "Cat";
//     option2 = "Kamal";
//     option3 = "Dog";
//     option4 = "Jiraf";
     
//   }
    

//   return <div className="homeContainer">
//       <h1>Welcome to {location.state.position} Page From Backend API Response</h1>
//        <section>
//     <h1>You are logged in! with Activit Privileges</h1>
//   <br />
//           <p>
              
//               <label htmlFor="cars">Choose a car:</label>

// <select name="cars" id="cars">
//   <option value="volvo">{option1}</option>
//   <option value="saab">{option2}</option>
//   <option value="mercedes">{option3}</option>
//   <option value="audi">{option4}</option>
//               </select>
              
//      <a href="/">Go back to Home Page</a>
//   </p>
//   </section> 
//   <Footer/>
//   </div>;
// }

// export default Activit;
