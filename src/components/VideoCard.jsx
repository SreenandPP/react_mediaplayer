import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteVideo } from '../services/allApi';
import { toast } from 'react-toastify';
import { addHistory } from '../services/allApi';



function VideoCard({ video, setDelStatus, cat }) {
  const [show, setShow] = useState(false);
  const [history, settHistory] = useState({
    caption: video.caption, url: video.url, datetime: ''
  })

  const handleDelete = async (id) => {
    console.log(id);
    const res = await deleteVideo(id)
    console.log(res);

    if (res.status >= 200 && res.status < 300) {
      setDelStatus(res)
      toast.success("Video Deleted Successfully!!")
    }
    else {
      toast.error("Video Deletion Failed")
    }
  }

  const handleClose = () => {
    addHistory(history)
    setShow(false);
  }
  const handleShow = () => {
    const dt = new Date()
    settHistory({ ...history, datetime: new Date() })
    setShow(true);
  }
  const handleOnDrag = (e, id) => {
    console.log("Video is Dragging id:" + id);
    e.dataTransfer.setData("videoId", id)
  }


  return (
    <>
      <Card style={cat ? { width: '15rem', borderRadius: '5px', border: 'none'  } : { width: '18rem', borderRadius: '5px', border: 'none' }} draggable onDragStart={(e) => { handleOnDrag(e, video?.id) }} className='ms-3 mb-3 p-2'>
        <Card.Img style={{ height: '170px' }} variant="top" src={video.image} onClick={handleShow} />
        <Card.Body className='d-flex flex-row justify-content-between' >
          <Card.Title className='text-break'>{video.caption}</Card.Title>
          {
             !cat &&
             <i className="fa-solid fa-trash" onClick={() => { handleDelete(video.id) }} style={{ color: '#ef0b0b', cursor: 'pointer' }}
              ></i>}

          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{video.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="315" src={video.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
      </Modal>

    </>
  )
}

export default VideoCard