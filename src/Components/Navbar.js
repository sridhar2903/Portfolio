import React, { Component } from 'react'
import {Link} from 'react-scroll'
import './style.css'
 class Navbar extends Component {
    render() {
        return (
            <>
               <div style={{position:'sticky',top:'0px'}}>
            <ul className='ulextra' style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around',backgroundColor: '#FBF3E4',height: '74px',fontFamily: 'Inter,sans-serif'
            ,position:'relative',bottom:'20px',zIndex:'1000'}}>
           
          <li style={{paddingTop:'20px'}}><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
          <li style={{paddingTop:'20px'}}><Link  to="about" spy={true} smooth={true}>About</Link></li>
          <li style={{paddingTop:'20px'}}><Link  to="projects" spy={true} smooth={true}>Projects</Link></li>
          
          <li style={{paddingTop:'20px'}}><Link  to="resume" spy={true} smooth={true}>Resume</Link></li>
          <li style={{paddingTop:'20px'}}><Link  to="contact" spy={true} smooth={true}>Contact</Link></li>
            </ul>
            
           </div>
         
            
            </>
         
        )
    }
}
export default  Navbar