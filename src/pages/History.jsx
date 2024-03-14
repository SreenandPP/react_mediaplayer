import React,{useEffect,useState} from 'react'
import { getHistory } from '../services/allApi'
import { deleteHistory } from '../services/allApi'
import { ToastContainer, toast } from 'react-toastify'

function History() {
  const [his,setHis]=useState([])

  const [delHisStatus,setDelHisStatus]=useState({})
   
  useEffect(()=>{
    getData()
  },[delHisStatus])


    const getData=async()=>{
    const res=await getHistory()
    console.log(res.data);
    setHis(res.data)
   }

   const handleDelHis=async(id)=>{
    console.log(id);
    const res=await deleteHistory(id)
    console.log(res);

    if(res.status>=200 && res.status<300){
      setDelHisStatus(res)
      toast.success("Video Deleted Successfully!!")
    }
    else{
      toast.error("Video Deletion Failed")
    }}

    


  return (
    <>
      <div className='p-5'>
        <h1>Watch History</h1>
        <table className='table table-bordered bg-dark text-white'>
          <tr>
            <th>Caption</th>
            <th>Url</th>
            <th>Date & Time</th>
            <th></th>
          </tr>

          {
          his?
          his.map(item=>(
            <tr>
              <td>{item.caption}</td>
              <td>{item.url}</td>
              <td>{item.datetime}</td>
              <td>
              <i className="fa-solid fa-trash bg-dark text-white " onClick={()=>{handleDelHis(item.id)}} style={{color:'#ef0b0b',cursor:'pointer'}}></i>
              </td>
            </tr>
          ))
          :
          <tr>
             <p className='text-danger'>No watch history!!</p>
          </tr>
           
        }
        </table>
      
          
        
      </div>
      <ToastContainer/>
    </>

  )

}

export default History