import { useEffect, useState } from "react"
import Navbar from "../../components/Navbar/Navbar"
import './Allblogs.css'
import axios from "axios"
const AllBlogs = () => {

  const [blogs,setBlogs]=useState([])
  
    console.log("TEST")
    const fetchBlogs=async()=>{
    const response= await axios.get("https://64ee09471f8721827142371e.mockapi.io/blogs")
   if(response.status ==200){
    
    setBlogs(response.data)
    
   }
    
 }
  useEffect(()=>{  
    fetchBlogs()
  },[])
  return (
    <div>
        <Navbar />

        <div style={{display:'flex',justifyContent:"space-evenly",flexWrap:'wrap'}}>
{
  blogs.map((blog)=>{
    return (
      <div className="card" key={blog.id}>
     <img src={blog.avatar} alt="Avatar"  width='100%' />
      <div className="container">
        <h4><b>{blog.title}</b></h4> 
        <p style={{color:"red"}}>{blog.description}</p> 
        <p>{blog.createdAt}</p>
      </div>
</div>
    )
  })
}
</div>
</div> 
 )
}

export default AllBlogs