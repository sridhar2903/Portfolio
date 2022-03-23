import React from 'react'
import { Link } from 'react-scroll'
import { useState } from 'react'
import Menubar from './Menubar'
import './style.css'




function Navbar() {
  const [menu, setMenu] = useState(false)

  return (
    <>
      <div style={{ position: 'sticky', top: '0px' }} >
        <ul className='ulextra' style={{
          display: 'flex', listStyle: 'none', justifyContent: 'space-around', backgroundColor: '#FBF3E4', height: '74px', fontFamily: 'Lato'
          , position: 'relative', bottom: '20px', zIndex: '1000'
        }}>

          <li style={{ paddingTop: '20px' }}><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
          <li style={{ paddingTop: '20px' }}><Link to="about" spy={true} smooth={true}>About</Link></li>
          <li style={{ paddingTop: '20px' }}><Link to="projects" spy={true} smooth={true}>Projects</Link></li>

          <li style={{ paddingTop: '20px' }}><Link to="resume" spy={true} smooth={true}>Resume</Link></li>
          <li style={{ paddingTop: '20px' }}><Link to="contact" spy={true} smooth={true}>Contact</Link></li>
          <i class="fa fa-bars" onClick={() => setMenu(!menu)} ></i>
        </ul>

      </div>


      <div className='setmenu'>
        {menu && <Menubar hidemenu={() => setMenu(!menu)} />}

      </div>
      <br />
      <br />
    </>

  )
}

export default Navbar