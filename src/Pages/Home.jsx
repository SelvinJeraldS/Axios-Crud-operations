
// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";

// const Home = () => {
//   const [users, setUsers] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const res = await axios.get(`https://6642ed7b3c01a059ea20d2b0.mockapi.io/api/users`);
//       setUsers(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleEdit = (id) => {
//     navigate(`/edit/${id}`);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`https://6642ed7b3c01a059ea20d2b0.mockapi.io/api/users/${id}`);
//       setUsers(users.filter(user => user.id !== id)); // Remove the deleted user from state
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <div className="row row-cols-1 row-cols-md-2 g-4">
//         {users.map((element, index) => {
//           return (
//             <div key={index}>
//               <div className="col">
//                 <div className="card">
//                   <div className="card-header">
//                     <h1 className="text-center">User Details</h1>
//                   </div>
//                   <div className="card-body">
//                     <p className="card-text"><strong>Name:</strong> {element.name}</p>
//                     <p className="card-text"><strong>Username:</strong> {element.username}</p>
//                     <p className="card-text"><strong>Email:</strong> {element.email}</p>
//                     <p className="card-text"><strong>Address:</strong> {element.address.street} {element.address.suite} {element.address.city} {element.address.zipcode}</p>
//                     <p className="card-text"><strong>Geographical Latitude:</strong> {element.address.geo.lat}</p>
//                     <p className="card-text"><strong>Geographical Longitude:</strong> {element.address.geo.lng}</p>
//                     <p className="card-text"><strong>Phone:</strong> {element.phone}</p>
//                     <p className="card-text"><strong>Website:</strong> {element.website}</p>
//                     <p className="card-text"><strong>Company Name:</strong> {element.company.name}</p>
//                     <p className="card-text"><strong>Company Phrase:</strong> {element.company.catchPhrase}</p>
//                     <p className="card-text"><strong>Business Model:</strong> {element.company.bs}</p>
//                   </div>
//                   <Link to={`/edit/${element.id}`} className="btn btn-primary mr-2">Edit</Link>
//                   <button className="btn btn-danger" onClick={() => handleDelete(element.id)}>Delete</button>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Home;

import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(`https://6642ed7b3c01a059ea20d2b0.mockapi.io/api/users`);
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`, { state: { id } });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://6642ed7b3c01a059ea20d2b0.mockapi.io/api/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {users.map((element, index) => (
          <div key={index} className="col">
            <div className="card">
              <div className="card-header">
                <h1 className="text-center">User Details</h1>
              </div>
              <div className="card-body">
                <p className="card-text"><strong>Name:</strong> {element.name}</p>
                <p className="card-text"><strong>Username:</strong> {element.username}</p>
                <p className="card-text"><strong>Email:</strong> {element.email}</p>
                <p className="card-text"><strong>Address:</strong> {element.address.street} {element.address.suite} {element.address.city} {element.address.zipcode}</p>
                <p className="card-text"><strong>Geographical Latitude:</strong> {element.address.geo.lat}</p>
                <p className="card-text"><strong>Geographical Longitude:</strong> {element.address.geo.lng}</p>
                <p className="card-text"><strong>Phone:</strong> {element.phone}</p>
                <p className="card-text"><strong>Website:</strong> {element.website}</p>
                <p className="card-text"><strong>Company Name:</strong> {element.company.name}</p>
                <p className="card-text"><strong>Company Phrase:</strong> {element.company.catchPhrase}</p>
                <p className="card-text"><strong>Business Model:</strong> {element.company.bs}</p>
              </div>
              <button className="btn btn-primary mr-2" onClick={() => handleEdit(element.id)}>Edit</button>
              <button className="btn btn-danger" onClick={() => handleDelete(element.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
