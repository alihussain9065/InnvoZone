import React from 'react'
import './App.css'
import {FaFacebook } from "react-icons/fa";
import {FaInstagram } from "react-icons/fa";
import {FaTwitterSquare } from "react-icons/fa";
import {FaLinkedin,FaAdn } from "react-icons/fa";
const App = () => {
  return (
    <>
    <div className='Container' >
      <div className='navbar'>
        <div id='navbarItem' >Works</div>
        <div id='navbarItem'>Blogs</div>
        <div id='navbarItem'>Contact</div>
      </div>
      <div className='header'>
        <div className='AboutMe'>
         <h2 id='AboutContentHeading'> Hi , I am Ali,<br/> Creative Technologist </h2>
         <p id='AboutText'> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
         <button id='AboutBtn'>
           <span  id='AboutBtnText'>Download Resume</span>
           </button>
        </div>
        <div className='Avatar'>
          <FaAdn id='main'/>
          </div>    
      </div>

      <div className='Midsection'>
        <div id='Secheader'>
           <p>Recent posts</p>
           <p id='btn'>View all</p>
        </div>
        <div className='Grid'>
        <div id='sectiongrid'>
           <h2 id='secheading' >Making a desing system from <br/>scratch</h2>
           <p id='secText'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
        </div>
        <div id='sectiongrid'>
           <h2>Creating pixal prefect icons in <br/>Figma</h2>
           <p id='secText'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet</p>
        </div>
        </div>
      </div>
      <div className='Featured'>
        <div id='featuredlist'>
         <h6 id='heading'> Featured works</h6>
         <div id='list'>
           <div id='img' />
           <div id='featuredtext'>
             <h2 id='text'>Designing Dashboards</h2>
             <p id='textinput'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
           </div>
         </div>
         <div id='borderline'/>
         <div id='list'>
           <div id='img' />
           <div id='featuredtext'>
             <h2 id='text'>Designing Dashboards</h2>
             <p id='textinput'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
           </div>
         </div>
         <div id='borderline'/>
         <div id='list'>
           <div id='img' />
           <div id='featuredtext'>
             <h2 id='text'>Designing Dashboards</h2>
             <p id='textinput'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
           </div>
         </div>
         <div id='borderline'/>
        </div>
      </div>
      <div className='footer'>
        <div id='icons'>
        <FaFacebook size={24}/>
        <FaInstagram size={24}/>
        <FaTwitterSquare size={24}/>
        <FaLinkedin size={24}/>
        </div>
        <p>Copyright 2020 All reserved</p>
        </div>

      </div>
      </>
  )
}

export default App