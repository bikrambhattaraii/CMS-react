import { useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import "./CreateBlog.css";
import { useNavigate } from "react-router-dom";
const CreateBlog = () => {
  const navigate = useNavigate()

 
const createBlog=async (e)=>{
  e.preventDefault()
  const formData = new FormData(e.currentTarget)
  const data = Object.fromEntries(formData)
  const response =   await axios.post("https://64ee09471f8721827142371e.mockapi.io/blogs",data)
  if(response.status == 201){
  navigate("/")
  }else{
  alert("Something went wrong")
  }

}
  
  return (
    <div>
      <Navbar />
      <form onSubmit={createBlog}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            onChange={(e) => SetDescription(e.target.value)}
            name="description"
            required
          />
        </div>
        <div>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.value)}
            required
            name="image"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateBlog;
