import axios from "axios"
import Navbar from "../../components/Navbar/Navbar"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const EditBlog = () => {
  const {id} = useParams()
  const navigate = useNavigate()
 
  const [blog,setBlog] = useState({})

  const editBlog = async (e)=>{
    e.preventDefault()
    const response = await axios.put("https://64ee09471f8721827142371e.mockapi.io/blogs/" + id,blog)
    if(response.status == 200){
      navigate("/singleBlog/" +id )
    }else{
      alert("Something went wrong ")
    }

  }
  const fetchBlog = async ()=>{
    const response = await axios.get("https://64ee09451f8721827142370c.mockapi.io/blogs/" + id)
    if(response.status == 200){
      setBlog(response.data)
  
    
    }else{
      alert("Something went wrong")
    }
    }
    useEffect(()=>{
      fetchBlog()
    },[])
  return (
    <div className="container">
    <Navbar />
      <h1 className="form-title">Edit Blog</h1>
      
      
      <form onSubmit={editBlog} >
     
          <input type="text" id="title" onChange={(e)=>setBlog({...blog,title:e.target.value})}  value={blog.title}  placeholder='title' name="title" required  />
          
          <textarea id="description" placeholder='description' onChange={(e)=>setBlog({...blog,description:e.target.value})} value={blog.description} name="description" rows="4" required  ></textarea>
          
          <input type="text" id="image" placeholder='image' onChange={(e)=>setBlog({...blog,avatar:e.target.value})} value={blog.avatar}  name="avatar" required  />
          
          <input type="submit" value="Edit" />
      </form>
  </div>
  )
}

export default EditBlog