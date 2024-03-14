import React from 'react'
import { Link } from 'react-router-dom'
function Landing() {
  return (
    <>
      <div className='w-100 d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
        <div className='row p-5 shadow'>
          <div className='col d-flex flex-column justify-content-center'>
            <h1>Mediaplayer 2024</h1>
            <p>Explore media player for youtube video upload and management.you can manage videos,catogories and even chechk it</p>
            <div>
              < Link to={'/dash'} className='btn btn-warning'>Explore  <i class="fa-solid fa-arrow-right"></i></Link>
            </div>
          </div>

          <div className='col'>
          <img src="https://static.vecteezy.com/system/resources/previews/025/442/489/non_2x/tiny-people-listen-music-sound-audio-or-radio-online-with-smartphone-app-or-laptop-media-player-music-play-list-modern-flat-cartoon-style-illustration-on-white-background-vector.jpg" className='img-fluid ' alt="img" />
        </div>
        </div>

  </div>

  <div className='mt-3 p-5 shadow'>
          <h2 className='text-center'>Features</h2>

        <div className='d-flex mt-3 flex-row justify-content-evenly ' >
           <div className="card" style={{width:'18rem', backgroundColor:'#ff4343' ,borderRadius:'5px' }}>
            <img style={{height:'300px'}} src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjk0YXVvNnppMDdxbTR2M3E1cDNheHVzYnd6bTZoYXRiNWt0b212diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4hLU9R1Zjypsd6b6/giphy.gif" className="card-img-top" alt="..."/>
             <div className="card-body">
               <h5 className="card-title text-white">Upload videos</h5>
                <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           
             </div>
       </div>

       <div className="card" style={{width:'18rem', backgroundColor:'#b6ffe8' ,borderRadius:'5px'}}>
            <img style={{height:'300px'}} src="https://miro.medium.com/v2/resize:fit:1358/1*8lcdOkw8uXu3k73Q1rwt6Q.gif" className="card-img-top" alt="..."/>
             <div className="card-body">
               <h5 className="card-title">Watch Videos</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           
             </div>
       </div>

       <div className="card" style={{width:'18rem', backgroundColor:'#f8e8c5' ,borderRadius:'5px'}}>
            <img style={{height:'300px'}} src="https://i.pinimg.com/originals/77/f7/ba/77f7ba6dd06cc3c3eb9e5aebbab454b3.gif" className="card-img-top" alt="..."/>
             <div className="card-body">
               <h5 className="card-title">Watch History</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           
             </div>
       </div>
          </div>
        </div>
        

        <div className='mt-5 row p-5 shadow'>
           <div className='col'>
             <h2>Simple, Fast & Seured</h2>
             <p style={{textAlign:'justify'}}>Mediaplayer 2024 is a platform for simple and faster youtube video uploading and management video watch history too where you get a simple video player interface with app itself</p>
           </div>
           <div className='col'>
           <iframe style={{borderRadius:'10px'}} width="560" height="315" src="https://www.youtube.com/embed/g8zxiB5Qhsc?si=jR9L1i4TaP4YuhTS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           </div>
        </div>

    </>

  )
}

export default Landing