
// // import axios from 'axios';
// // import React, { useEffect, useState } from 'react';

// // const Edit = ({id}) => {
// //   const [editData,seteditData]=useState([]);
// //   useEffect( ()=>{

// //     fetchData()
// //   },[])

// //   const fetchData = async () => {
        
// //          await axios.get(`https://6642ed7b3c01a059ea20d2b0.mockapi.io/api/users/${id}`)
// //         .then(res=>seteditData(res.data))
// //         .catch(error=>console.log(error))
         
// //           console.log(error);
        
// //       };
// //   const handlechange=(id)=>{

// //   }
// //   return (
// //     <div>
// //       <form >
// //           <label> UserName: </label>
// //           <input type="text" name="username" value={editData.username} onChange={handlechange}/>

// //           <label> Name: </label>
// //           <input type="text" name="name" value={editData.username} onChange={handlechange}/>

// //           <label> Email </label>
// //           <input type="email" name="email" value={editData.email} onChange={handlechange}/>

// //           <label> Address: </label>
// //           <input type="text" name="adress" value={editData.address.street} onChange={handlechange}/>

// //           <label> City: </label>
// //           <input type="text" name="city" value={editData.address.city} onChange={handlechange}/>

// //           <label> suite: </label>
// //           <input type="text" name="suite" value={editData.address.suite} onChange={handlechange}/>

// //           <label> Zipcode : </label>
// //           <input type="number" name="zipcode" value={editData.address.zipcode} onChange={handlechange}/>
          
// //           <label> Geographical Latitude </label>
// //           <input type="text" name="lat" value={editData.geo.lat} onChange={handlechange}/>

// //           <label> Geographical Long </label>
// //           <input type="text" name="lng" value={editData.geo.lng} onChange={handlechange}/>

// //           <label> Phone: </label>
// //           <input type="tel" name="phone" value={editData.phone} onChange={handlechange}/>

// //           <label> Website: </label>
// //           <input type="text" name="website" value={editData.website} onChange={handlechange}/>

// //           <label> company Name: </label>
// //           <input type="text" name="name" value={editData.company.name} onChange={handlechange}/>

// //           <label> company Phrase: </label>
// //           <input type="text" name="name" value={editData.company.catchPhrase} onChange={handlechange}/>

// //           <label> company Name: </label>
// //           <input type="text" name="name" value={editData.company.bs} onChange={handlechange}/>

// //       </form>
// //     </div>
// //   );
// // };

// // export default Edit;
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// const Edit = ({ id }) => {
//   const [editData, setEditData] = useState({
//     name: "",
//     username: "",
//     email: "",
//     address: {
//       street: "",
//       suite: "",
//       city: "",
//       zipcode: "",
//       geo: {
//         lat: "",
//         lng: "",
//       },
//     },
//     phone: "",
//     website: "",
//     company: {
//       name: "",
//       catchPhrase: "",
//       bs: "",
//     },
//   });

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const res = await axios.get(`https://6642ed7b3c01a059ea20d2b0.mockapi.io/api/users/${id}`);
//       setEditData(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     const nameParts = name.split('.');
//     if (nameParts.length === 1) {
//       setEditData({
//         ...editData,
//         [name]: value,
//       });
//     } else if (nameParts.length === 2) {
//       setEditData({
//         ...editData,
//         [nameParts[0]]: {
//           ...editData[nameParts[0]],
//           [nameParts[1]]: value,
//         },
//       });
//     } else if (nameParts.length === 3) {
//       setEditData({
//         ...editData,
//         [nameParts[0]]: {
//           ...editData[nameParts[0]],
//           [nameParts[1]]: {
//             ...editData[nameParts[0]][nameParts[1]],
//             [nameParts[2]]: value,
//           },
//         },
//       });
//     }
//   };

//   return (
//     <div>
//       <form>
//         <label> Username: </label>
//         <input
//           type="text"
//           name="username"
//           value={editData.username}
//           onChange={handleChange}
//         />

//         <label> Name: </label>
//         <input
//           type="text"
//           name="name"
//           value={editData.name}
//           onChange={handleChange}
//         />

//         <label> Email: </label>
//         <input
//           type="email"
//           name="email"
//           value={editData.email}
//           onChange={handleChange}
//         />

//         <label> Address: </label>
//         <input
//           type="text"
//           name="address.street"
//           value={editData.address.street}
//           onChange={handleChange}
//         />

//         <label> City: </label>
//         <input
//           type="text"
//           name="address.city"
//           value={editData.address.city}
//           onChange={handleChange}
//         />

//         <label> Suite: </label>
//         <input
//           type="text"
//           name="address.suite"
//           value={editData.address.suite}
//           onChange={handleChange}
//         />

//         <label> Zipcode: </label>
//         <input
//           type="text"
//           name="address.zipcode"
//           value={editData.address.zipcode}
//           onChange={handleChange}
//         />

//         <label> Geographical Latitude: </label>
//         <input
//           type="text"
//           name="address.geo.lat"
//           value={editData.address.geo.lat}
//           onChange={handleChange}
//         />

//         <label> Geographical Longitude: </label>
//         <input
//           type="text"
//           name="address.geo.lng"
//           value={editData.address.geo.lng}
//           onChange={handleChange}
//         />

//         <label> Phone: </label>
//         <input
//           type="tel"
//           name="phone"
//           value={editData.phone}
//           onChange={handleChange}
//         />

//         <label> Website: </label>
//         <input
//           type="text"
//           name="website"
//           value={editData.website}
//           onChange={handleChange}
//         />

//         <label> Company Name: </label>
//         <input
//           type="text"
//           name="company.name"
//           value={editData.company.name}
//           onChange={handleChange}
//         />

//         <label> Company CatchPhrase: </label>
//         <input
//           type="text"
//           name="company.catchPhrase"
//           value={editData.company.catchPhrase}
//           onChange={handleChange}
//         />

//         <label> Business Model: </label>
//         <input
//           type="text"
//           name="company.bs"
//           value={editData.company.bs}
//           onChange={handleChange}
//         />
//       </form>
//     </div>
//   );
// };

// export default Edit;

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Edit = ({ id }) => {
  const [editData, setEditData] = useState({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(`https://6642ed7b3c01a059ea20d2b0.mockapi.io/api/users/${id}`);
      setEditData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nameParts = name.split('.');
    if (nameParts.length === 1) {
      setEditData({
        ...editData,
        [name]: value,
      });
    } else if (nameParts.length === 2) {
      setEditData({
        ...editData,
        [nameParts[0]]: {
          ...editData[nameParts[0]],
          [nameParts[1]]: value,
        },
      });
    } else if (nameParts.length === 3) {
      setEditData({
        ...editData,
        [nameParts[0]]: {
          ...editData[nameParts[0]],
          [nameParts[1]]: {
            ...editData[nameParts[0]][nameParts[1]],
            [nameParts[2]]: value,
          },
        },
      });
    }
  };

  return (
    <div className="container">
      <h2>Edit User</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Username:</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={editData.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={editData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={editData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address:</label>
          <input
            type="text"
            className="form-control"
            name="address.street"
            value={editData.address.street}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">City:</label>
          <input
            type="text"
            className="form-control"
            name="address.city"
            value={editData.address.city}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Suite:</label>
          <input
            type="text"
            className="form-control"
            name="address.suite"
            value={editData.address.suite}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Zipcode:</label>
          <input
            type="text"
            className="form-control"
            name="address.zipcode"
            value={editData.address.zipcode}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Geographical Latitude:</label>
          <input
            type="text"
            className="form-control"
            name="address.geo.lat"
            value={editData.address.geo.lat}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Geographical Longitude:</label>
          <input
            type="text"
            className="form-control"
            name="address.geo.lng"
            value={editData.address.geo.lng}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone:</label>
          <input
            type="tel"
            className="form-control"
            name="phone"
            value={editData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Website:</label>
          <input
            type="text"
            className="form-control"
            name="website"
            value={editData.website}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Company Name:</label>
          <input
            type="text"
            className="form-control"
            name="company.name"
            value={editData.company.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Company CatchPhrase:</label>
          <input
            type="text"
            className="form-control"
            name="company.catchPhrase"
            value={editData.company.catchPhrase}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Business Model:</label>
          <input
            type="text"
            className="form-control"
            name="company.bs"
            value={editData.company.bs}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
