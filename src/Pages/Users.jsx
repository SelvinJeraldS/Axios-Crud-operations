import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Users = () => {

  const[loading,SetLoading]=useState([]);
  useEffect(()=>{
    SetLoading()
  },[])

  const [userData,setuserData]=useState([]);

  const navigate =useNavigate();

  const[deleteUserData ,setDeletedUserData]= useState([]);

  const handleDelete = async (id) => {
    await axios
      .delete(`https://6642ed7b3c01a059ea20d2b0.mockapi.io/api/users/${id}`)
      .then((res) => {
        setDeletedUserData(res.data);
        alert(`${res.data.name}'s user data deleted Successfully !`);
      })
      .catch((err) => console.log(err));
  };


  //fetching Mock-Api data using axios
  useEffect(() => {
    fetchData();
  }, [deleteUserData]);


  const fetchData = async () => {
    await axios
      .get("https://65d5835b3f1ab8c63437249d.mockapi.io/api/UserData")
      .then((res) => setuserData(res.data))
      .catch((err) => console.log(err));
  };




  return (
    <div>
      
    </div>
  );
};

export default Users;