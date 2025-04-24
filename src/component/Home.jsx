import React from 'react';
import './style.css'
import SurajResume from './SurajResume.pdf';
const Home = () => {
  return (
    <div>
      <div className="header">
        <div className="nav">
          <div className="navlogo">
            <h1>Portfolio</h1>
          </div>
          <div className="navlink">
            <ul>
              <li className="homel nav-hover"><a href="#Homepage">Home</a></li>
              <li className="aboutl nav-hover"><a href="#About">About</a></li>
              <li className="servicel nav-hover"><a href={SurajResume} target="_blank" rel="noopener noreferrer">Resume</a></li>
              <li className="skilll nav-hover"><a href="#Skill">Skill</a></li>
              <li className="projectl nav-hover"><a href="#Project">Project</a></li>
              <li className="contactl nav-hover"><a href="#Contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="homepage" id="Homepage">
        <div className="homediv1">
          <div className="about-me">
            <h2 className="line1">Hello it's me</h2>
            <h1 className="line2">Suraj Chauhan</h1>
            <h3 className="line4">Frontend Developer</h3>
           
            <p>Welcome to my personal portfolio website!</p>
            <ul className="social-link">
              <li><a href="#"><i className="fa-brands fa-facebook social-logo"></i></a></li>
              <li><a href="https://www.instagram.com/surajchauhan4894"><i className="fa-brands fa-instagram social-logo"></i></a></li>
              <li><a href="tel:+6392227274"><i className="fa-solid fa-phone social-logo"></i></a></li>
              <li><a href="https://www.linkedin.com/in/suraj-chauhan-6969ab258"><i className="fa-brands fa-linkedin social-logo"></i></a></li>
              <li><a href="https://wa.me/+916392227274"><i className="fa-brands fa-square-whatsapp social-logo"></i></a></li>
            </ul>
          </div>
        </div>

        <div className="homediv2">
          <div className="my-image">
            <div className="me">
              {/* Your image or animation can go here */}
            </div>
          </div>
        </div>
      </div>

    {/* About section  */}
      <div id="About">
        <div className="AboutText">
          <h1 style={{marginLeft: '2rem'}}>About Me</h1>
          <h2 style={{marginLeft: '2rem'}}>Full Stack Developer!</h2>
          <p style={{marginLeft: '2rem'}}>
            Hello! I'm a passionate Full Stack Developer currently in my third
            year of pursuing a Bachelor of Technology (B.Tech).
            <br />With a solid foundation in both front-end and back-end technologies,
            <br />I love creating seamless and dynamic web applications that enhance user experiences.
          </p>
          <button style={{float: 'center',width:'100%'}} id="aboutMe">More About Me</button>
        </div>
        <div className="About_Image_Box">
          <div className="About_Image"></div>
        </div>
      </div>
  
      {/* skills section  */}
      <div className="skills" id="Skill">
      <h1>My <span style={{ color: 'aqua', fontSize: '1.4rem' }}>Skills</span></h1>
        <div className="skill1">
          <div className="technical">
            <h2>Technical Skills</h2>
            <ul className="skills_list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>SQL</li>
              <li>C++</li>
            </ul>
          </div>
          <div className="professional">
            <h2>Professional Skills</h2>
              <ul className='skills_list'>
                <li>Teamwork</li>
                <li>Teamwork</li>
                <li>Communication</li>
                <li>Time Management</li>
                <li>Problem-solving</li>
              </ul>
          </div>
        </div>
      </div>


{/* project section  */}
      <div className="projects" id='Project'>
        <h1>Projects</h1>
        <ul className='project_list'>
          <li>
            <b style={{color: 'aqua',fontSize: '1.4rem'}}>Recipe Finder Web App:</b> 
            <p>
              A responsive web application that allows users to
              search and discover recipes from around the world using TheMealDB API.
              Users can search recipes by name, ingredient, or category, and view detailed
              information including ingredients, cooking instructions, and meal thumbnails.
            </p>
            <p style={{marginTop: '10px'}}>Project Link : <a href="https://recipe-finder-beta-teal.vercel.app/" style={{color: '#62AEEB'}}>Recipe finder </a></p>
          </li>

          <li>
            <b style={{color: 'aqua',fontSize: '1.4rem'}}>N-Queens Visualizer: </b> 
            <p>
              An interactive React web app that visualizes the N-
              Queens problem using step-by-step animations of the backtracking algorithm
              on an N×N chessboard.
            </p>
            <p style={{marginTop: '10px'}}>Project Link : <a href=""style={{color: '#62AEEB'}} >Nqueen Visualizer</a></p>
          </li>

          <li>
            <b style={{color: 'aqua',fontSize: '1.4rem'}}> Web Projects: </b> 
            <p>
              Designed and developed portfolio website, basic pages &
              Amazon/Netflix clones.
            </p>
            <p style={{marginTop: '10px'}}>Project Link : <a href="https://amazon-clone-fawn-xi.vercel.app/" style={{color: '#62AEEB'}}>Amazon Clone </a> ,
              <a href="https://netflix-clone-rouge-sigma-48.vercel.app/" style={{color: '#62AEEB'}}>Netflix Clone</a> 
            </p>
          </li>
        </ul>

      </div>

      <div className="contact" id='Contact'>
        <p style={{fontSize: '1.4rem'}}>
          Contact number : <a href="tel:+6392227274" style={{color: 'aqua',fontSize: '1.4rem'}}>6392227274</a>
        </p>
      </div>
    </div>
  );
};

export default Home;
