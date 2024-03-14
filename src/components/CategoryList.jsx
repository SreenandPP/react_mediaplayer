import React, { useEffect, useState } from 'react'
import { deleteCategoryVideo, getCategories, getSpecificVideo, updateCategory } from '../services/allApi'
import { deleteCategory } from '../services/allApi'
import { toast } from 'react-toastify'
import VideoCard from './VideoCard'




function CategoryList({CatStatus}) {
  const [cat,setCat]=useState([])

  const [delCatStatus,setDelCatStatus]=useState({})

  useEffect(()=>{
    getCat()
  },[CatStatus,delCatStatus])

  const getCat=async()=>{
    const res=await getCategories()
    console.log(res.data);
    setCat(res.data)
  }

  

  const handleDelCat=async(id)=>{
    console.log(id);
    const res=await deleteCategory(id)
    console.log(res);

    if(res.status>=200 && res.status<300){
      setDelCatStatus(res)
      toast.success("Video Deleted Successfully!!")
    }
    else{
      toast.error("Video Deletion Failed")
    }
  }

  

  const handleDrop=async(e,id)=>{
    // console.log("category id:"+id);
    const vid=e.dataTransfer.getData("videoId")
    // console.log("dropped video id:"+vid);
    let category=cat.find(item=>item.id==id)
    // console.log(category);
    const res=await getSpecificVideo(vid)
    category.videos.push(res.data)
    // console.log(category);
    const rescat=await updateCategory(category,id)
    if(rescat.status>=200 && rescat.status<300){
      toast.success(`${res.data.caption} is added to ${category.name}`)
      getCat()
    }
    else{
      toast.error("Video adding to category failed")
    }
   }

   const handleDragOver=(e)=>{
    e.preventDefault()
    console.log("Dragging Over Category");
   }
  return (
    <>
      <div className='border border-4 border-dark p-3 mt-3'>
        {
            cat?
            cat.map(item=>(
              <div className='bg-dark text-white mb-3 p-3 rounded shadow' onDragOver={e=>{handleDragOver(e)}} droppable onDrop={e=>handleDrop(e,item?.id)}>
                <div>
                <span>{item.name}</span>
                 <i className="fa-solid fa-trash float-end" onClick={()=>{handleDelCat(item.id)}} style={{color:'#ef0b0b',cursor:'pointer'}}></i>
                </div><br />
    
                <div>
                  {
                    item?.videos.map(v=>(
                      <VideoCard video={v} cat={true}/>
                    ))
                  }
                </div>
                 
              </div>
             
            ))
            :
            <h1>No Categories</h1>
        }
        
      </div>
    </>
    
  )
}

export default CategoryList