import React, { Component } from 'react'
import res from './resumeimage.png'
import './style.css'

class AllSections extends Component {
  render() {
    return (
      <>
        <div id="home" style={{ height: 800, position: 'relative', bottom: '35px', zIndex: '-1000' }}>
          <br />
          <br />

          <h1 > Hi , Iam Sai Sridhar Devarakonda</h1>
          <h1 style={{ color: '#105652' }}>A Front-End Developer</h1>


        </div>



        <div id="about" style={{ height: 500 }}>
          <br />
          <br />
          <h1> About Me</h1>
          <hr style={{ width: '100px', height: '3px', backgroundColor: 'orange' }} />
          <pre style={{ fontSize: '18px' }} className='pre'>
            I'm a  front-end developer .I'm interested in all kinds of visual communication,<br />
            but my major focus is on designing web applications.

          </pre>
          <pre style={{ fontSize: '18px' }} className='pre'>
            I enjoy turning complex problems into simple, beautiful and intuitive designs. <br />
            When I'm not pushing pixels, you'll find me gaming,playing ukulele or listening to the Music.</pre>
        </div>
        <br />



        <div id="projects" style={{ height: 500 }}>
          <br />
          <br />
          <h1 style={{ color: 'white' }}> Projects </h1>
          <hr style={{ width: '100px', height: '3px', backgroundColor: 'orange' }} />
          <pre style={{ fontSize: '18px' }}  >

            <a href="https://cocky-easley-667030.netlify.app/" target={'_blank'} >React Blog App<br /><br /></a>
            <a href="https://sridhar2903.github.io/TODO_JS/" target={'_blank'} > Todo App<br /><br /></a>
            <a href="https://sridhar2903.github.io/Digital_Clock/clock.html" target={'_blank'} >Digital Clock<br /><br /></a>
            <a href="https://sridhar2903.github.io/Basic-HTML-Page/Basic-HTML-Page.html" target={'_blank'}  >Basic HTML Page<br /><br /></a>
          </pre>
        </div>
        <br />




        <div id="resume" style={{ height: 1000 }}>
          <br />
          <br />
          <h1 style={{ color: '#105652' }}> Resume </h1>
          <hr style={{ width: '100px', height: '3px', backgroundColor: 'orange' }} />
          <img src={res} alt='image nort found!' height='800px' />
        </div>


        <div id="contact" style={{ height: 800 }}>
          <br />
          <br />
          <h1 style={{ color: 'whitesmoke' }}> Contact & Socials </h1>
          <hr style={{ width: '100px', height: '3px', backgroundColor: 'orange' }} />

          <pre style={{ fontSize: '18px' }}>
            <i class="fa fa-envelope" style={{ color: 'white' }}>  </i><span style={{ fontFamily: 'Lato', color: 'white' }}>saisridhard@gmail.com </span> <br /><br />
            <i class="fa fa-phone" style={{ color: 'white' ,position:'relative',right:'15px',top:'2px'}}></i><span style={{ fontFamily: 'Lato', color: 'white' }}>(+91)9915724988 </span> <br /><br/>
            <i class="fa fa-github" style={{fontSize:'26px',position:'relative',top:'4px'}}></i><span style={{ fontFamily: 'Lato', color: 'white' }}>  github.com/sridhar2903 </span> <br /><br/>
            <i class="fa fa-instagram" style={{fontSize:'26px',position:'relative',top:'4px',right:'6px'}}></i><span style={{ fontFamily: 'Lato', color: 'white' }}>  devarakondasaisridhar </span> <br /><br/>
          </pre>
        </div>
      </>
    )
  }
}
export default AllSections