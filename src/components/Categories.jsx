import React from 'react'
import { Button } from 'react-bootstrap'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addCategory } from '../services/allApi';
import { toast } from 'react-toastify';
import CategoryList from './CategoryList';




function Categories({}) {

  const [category,setCategory]=useState({
    name:'',videos:[]
  })

  const[CatStatus,setCatStatus]=useState([])

  const [show, setShow] = useState(false);

 
  const getCategory=(val)=>{
    if(val){
      setCategory({...category,name:val})
    }
  }

  const handleAdd=async()=>{
    console.log(category);
    if(category.name){
      const res=await addCategory(category)
      if(res.status>=200 && res.status<300){
        setCatStatus(res.data)
        toast.success("Category Added Successfully!!")
        handleClose()
      }
      else{
        toast.error("Category Adding Failed!!")
      }
    }
    else{
      toast.info("Enter Valid Details!!")
    }
  }

    const handleClose = () =>{
      setShow(false);
      setCategory({
        name:'',videos:[]
      })
    } 
    const handleShow = () => setShow(true);
  return (
    <>
    <div className='d-grid'>
   <Button variant='primary' className='btn' onClick={handleShow}  >Add Category</Button>
    </div>
     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton >
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body   >
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Category</Form.Label>
                <Form.Control onChange={(e)=>{getCategory(e.target.value)}}  type="text" placeholder="Enter Video Category" />
          </Form.Group>
         
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>Save</Button>
        </Modal.Footer>
      </Modal>
        <CategoryList CatStatus={CatStatus} />
    </>
  )
}

export default Categories