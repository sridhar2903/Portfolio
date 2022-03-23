import React from 'react'
import { Link } from 'react-scroll'
const Menubar = ({ hidemenu }) => {
    return (
        <>

            <div className='menustyle' style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#aaa9ad', fontFamily: 'Lato'
            }}>

                <p style={{ paddingTop: '20px' }}><Link activeClass="active" to="home" spy={true} smooth={true} onClick={hidemenu}>Home</Link></p>
                <hr style={{ width: '400px', height: '2px', backgroundColor: 'silver' }} />
                <p style={{ paddingTop: '20px' }}><Link to="about" spy={true} smooth={true} onClick={hidemenu}>About</Link></p>
                <hr style={{ width: '400px', height: '2px', backgroundColor: 'silver' }} />
                <p style={{ paddingTop: '20px' }}><Link to="projects" spy={true} smooth={true} onClick={hidemenu}>Projects</Link></p>
                <hr style={{ width: '400px', height: '2px', backgroundColor: 'silver' }} />
                <p style={{ paddingTop: '20px' }}><Link to="resume" spy={true} smooth={true} onClick={hidemenu}>Resume</Link></p>
                <hr style={{ width: '400px', height: '2px', backgroundColor: 'silver' }} />
                <p style={{ paddingTop: '20px' }}><Link to="contact" spy={true} smooth={true} onClick={hidemenu}>Contact</Link></p>
            </div>



        </>
    )
}

export default Menubar