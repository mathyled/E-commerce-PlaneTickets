// import React from "react";
// import axios from "axios";

// const Welcome = (props) => {
//   const API_URL = "http://localhost:3001/api/auth/";

//   const verifyUser = (code) => {
//     return axios.get(API_URL + "confirm/" + code).then((response) => {
//       return response.data;
//     });
//   };

//   if (props.match.path === "/confirm/:confirmationCode") {
//     verifyUser(props.match.params.confirmationCode);
//   }
//   return (
//     <div>
//       <header>
//         <h3>
//           <strong>Account confirmed!</strong>
//         </h3>
//       </header>
//       {/* <Link to={"/login"}">
//         Please Login
//       </Link> */}
//     </div>
//   );
// };

// export default Welcome;
