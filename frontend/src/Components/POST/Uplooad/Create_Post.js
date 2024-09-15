
import axios from "../post_axios_config";
import React from "react"
import { useState } from "react"
const CreatePost = () => {
  const [title, settitle] = useState('');
  const [description, setdescription] = useState('')
  const [post_image, setimage] = useState(null);
  const [alert,setalert] = useState('');

 const handleSubmit =async(e)=>{
     e.prevenDefault()
     const formData = new FormData();
     formData.append('title', title);
     formData.append('description', description);
     formData.append('post_image', post_image);
     
     try {
      const res = await axios.post('/add-new',formData)
      console.log(res.data)
      if(res.status ===200)
      {
        setalert('Post created successfully')
        console.log("Post Created Successfully");
      }
      
      
     } catch (error) {
      setalert('Post Not Created Successfully')
      console.log('Post Not Created successfully');
     }
 }

  return (

    <>
      <div className="border rounded-lg border-purple-700 bg-purple-400">
        <div>
          <h1 className="text-center text-purple-800">Create the Post</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center justify-center">
              <div>
                <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} />
              </div>
              <div>
                <input type="text" value={description} onChange={(e)=>{setdescription(e.target.value)}}/>
              </div>
              <div>
                <input type="file" onChange={(e) => setimage(e.target.files[0])}/>
              </div>
              <div>
               <button  type="submit" className="bg-pink-500 border rounded-lg">submit</button>
              </div>
             </div>
            </form>
        </div>

      </div>
    </>
  )
}

export default CreatePost;