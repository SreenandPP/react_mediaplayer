import React,{useState,useEffect} from 'react'
import VideoCard from './VideoCard'
import { getVideos } from '../services/allApi'

function Videos({addStatus}) {
   
  const [allVideos,setAllVideos]=useState()
  const [delStatus,setDelStatus]=useState()

  useEffect(()=>{
    getData()
  },[addStatus,delStatus])

  const getData=async()=>{
    const res=await getVideos()
    // console.log(res.data);
    setAllVideos(res.data)
    // console.log(allVideos);
  }

  return (
   <>
   <div className='bg-dark p-5  row' >
     {
      allVideos?
      allVideos.map(item=>(
        <VideoCard video={item} setDelStatus={setDelStatus}/>
      ))
      :
      <h1>No Videos</h1>
     }
   
   </div>
    
   </>
  )
}

export default Videos