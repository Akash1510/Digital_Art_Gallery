import React, { useEffect, useState } from 'react'
import axios from '../Auth_Page/axiosconfig'
const Images = () => {

    const [title ,settitle] = useState('');
    const [description,setd] = useState('')
    const [ image, setimage] = useState(null);

  const handleClick = async(e)=>{
    e.preventDeafult();
    try {
        const res = await axios.post('/upload',{title,description,image});
        console.log(res.data);
        alert('image uploaded Successfully');
        
    } catch (error) {
          console.log(error);
    }
  }

  const onchange = async()=>{
    setimage([title,description,image])
  }
  useEffect(()=>{
    setimage(image);
  })
  return (
    <div>
        <form onClick={handleClick}>

        <input type='text' onChange={(e)=>settitle(e.target.value)}/>
        <input type='text' onChange={(e)=>setd(e.target.value)}/>

        <input type="file" onChange={(e)=>setimage(e.target.files[0])}/>
        <button type='submit'>ok</button>
        </form>
    </div>
  )
}

export default Images