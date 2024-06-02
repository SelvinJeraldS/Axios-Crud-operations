import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({
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
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
      fetchData();
    }, [setFormData]);
  
    const fetchData = async () => {
      try {
        const res = await axios.get("https://6642ed7b3c01a059ea20d2b0.mockapi.io/api/users");
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleEdit = (user) => {
      setIsEditing(true);
      setFormData(user);
      setId(user.id);
      navigate(`/edit/${user.id}`);
    };
  
    const handleDelete = async (id) => {
      try {
        await axios.delete(`https://6642ed7b3c01a059ea20d2b0.mockapi.io/api/users/${id}`);
        // Remove the deleted user from the local state
        setUsers(users.filter(user => user.id !== id));
      } catch (error) {
        console.log(error);
      }
    };
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (isEditing) {
        await axios.put(`https://6642ed7b3c01a059ea20d2b0.mockapi.io/api/users/${formData.id}`, formData);
      } else {
        await axios.post("https://6642ed7b3c01a059ea20d2b0.mockapi.io/api/users", formData);
      }
      fetchData();
      setFormData({
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
      setIsEditing(false);
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Street</label>
            <input
              type="text"
              className="form-control"
              value={formData.address.street}
              onChange={(e) => setFormData({ ...formData, address: { ...formData.address, street: e.target.value } })}
            />
          </div>
          <div className="form-group">
            <label>Suite</label>
            <input
              type="text"
              className="form-control"
              value={formData.address.suite}
              onChange={(e) => setFormData({ ...formData, address: { ...formData.address, suite: e.target.value } })}
            />
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              className="form-control"
              value={formData.address.city}
              onChange={(e) => setFormData({ ...formData, address: { ...formData.address, city: e.target.value } })}
            />
          </div>
          <div className="form-group">
            <label>Zipcode</label>
            <input
              type="text"
              className="form-control"
              value={formData.address.zipcode}
              onChange={(e) => setFormData({ ...formData, address: { ...formData.address, zipcode: e.target.value } })}
            />
          </div>
          <div className="form-group">
            <label>Geographical Latitude</label>
            <input
              type="text"
              className="form-control"
              value={formData.address.geo.lat}
              onChange={(e) => setFormData({ ...formData, address: { ...formData.address, geo: { ...formData.address.geo, lat: e.target.value } } })}
            />
          </div>
          <div className="form-group">
            <label>Geographical Longitude</label>
            <input
              type="text"
              className="form-control"
              value={formData.address.geo.lng}
              onChange={(e) => setFormData({ ...formData, address: { ...formData.address, geo: { ...formData.address.geo, lng: e.target.value } } })}
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              className="form-control"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Website</label>
            <input
              type="text"
              className="form-control"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Company Name</label>
            <input
              type="text"
              className="form-control"
              value={formData.company.name}
              onChange={(e) => setFormData({ ...formData, company: { ...formData.company, name: e.target.value } })}
            />
          </div>
          <div className="form-group">
            <label>Company CatchPhrase</label>
            <input
              type="text"
              className="form-control"
              value={formData.company.catchPhrase}
              onChange={(e) => setFormData({ ...formData, company: { ...formData.company, catchPhrase: e.target.value } })}
            />
          </div>
          <div className="form-group">
            <label>Business Model</label>
            <input
              type="text"
              className="form-control"
              value={formData.company.bs}
              onChange={(e) => setFormData({ ...formData, company: { ...formData.company, bs: e.target.value } })}
            />
          </div>
          <button type="submit" className="btn btn-danger mt-3">
            {isEditing ? "Update" : "Create"}
          </button>
        </form>
  
        
        </div>
      
    );
  };
  


export default Create;