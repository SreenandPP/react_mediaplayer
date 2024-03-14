import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
      <div className='bg-dark w-100 d-flex flex-column justify-content-center text-white '>
        <div className='row p-5  '>
          <div className='col '>
            <h4 style={{color:'white'}}>Mediaplayer 2024</h4>
            <p style={{ textAlign: 'justify'}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos magnam beatae sint quae molestias excepturi
              totam temporibus ad velit minima earum, tempora harum iste, autem vitae fugiat! Iure omnis hic
              maxime asperiores, enim perspiciatis esse. Nesciunt perferendi
            </p>

          </div>
          <div className='col ' >
            <h4 style={{color:'white'}}>Links</h4>
            <Link to={'/'} style={{color:'white', textDecorationLine:'none' }}>Landing</Link><br />
            <Link to={'/dash'} style={{color:'white', textDecorationLine:'none' }}>Dashboard</Link><br />
            <Link to={'/his'} style={{color:'white', textDecorationLine:'none' }}>History</Link>
          </div>
          <div className='col  '>
            <h4 style={{color:'white'}}>Reference</h4>
            <a href="https://getbootstrap.com/" target='_blank' style={{color:'white', textDecorationLine:'none' }}>Bootstrap</a><br />
            <a href="https://react-bootstrap.netlify.app/" target='_blank' style={{color:'white', textDecorationLine:'none' }}>React-Bootstrap</a><br />
            <a href="https://react-bootstrap.netlify.app/" target='_blank' style={{color:'white', textDecorationLine:'none' }}>React</a>
          </div>
        </div>

        <div className='text-center'>

          <p><i class="fa-solid fa-copyright"></i>Mediaplayer2024</p>
        </div>
      </div>
    </>

  )
}

export default Footer