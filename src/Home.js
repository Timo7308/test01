import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Slider from 'react-slick';
import profilePicture from './Images/1.jpg';
import './Home.css';
import './Projects.css';
import spaceExplorerImage from './Images/space-explorer.jpg';
import spaceExplorerImage1 from './Images/space-explorer-1.jpg';
import storyMateImage from './Images/story-mate.png';
import onlineShopImage from './Images/online-shop.png';
import calculatorVideo from './videos/calculator.mp4';
import calculatorImage from './Images/calculator-idea.png';

// Define custom arrows
const CustomPrevArrow = (props) => (
  <button className="custom-arrow slick-prev" onClick={props.onClick}>
  
  </button>
);

const CustomNextArrow = (props) => (
  <button className="custom-arrow slick-next" onClick={props.onClick}>
    
  </button>
);

function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const openModal = (project) => {
    setCurrentProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentProject(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  // Projects Data
  const projects = [
    {
      title: 'Space Explorer',
      description:
        'Space Explorer is a 2D jump and run platformer that was developed in Unity. The main goal for the player is to find a new planet for humanity.',
      images: [spaceExplorerImage, spaceExplorerImage1],
      link: 'https://timo7308.itch.io/space-explorer-mac',
      buttonLabel: 'Download on itch.io',
    },
    {
      title: 'Story Mate',
      description:
        'Story Mate is a chat-based app that creates new friendships and exciting interactions. Users chat with each other in the theme of a chosen story.',
      images: [storyMateImage, './Images/story-mate-2.jpg'],
      link: 'https://example.com/project-two',
    },
    {
      title: 'Smart Calculator',
      description: 'This concept for a smart calculator was created with Figma and is supposed to make calculations easier.',
      videos: [calculatorVideo],
    
      images: [
        calculatorImage,
        './Images/calculator-idea.jpg'
      ],
    
      link: 'https://www.figma.com/proto/GFhAVGdmU2XMZOhM8BP7tL/Calculator?node-id=1-2&t=ZTl9BWE8updp4tzT-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2',
      buttonLabel: 'View on Figma',
    },
    {
      title: 'Schuh Deluxe',
      description:
        'For this project, a simple online shop was developed. The shop consists of a user area and an admin area where products can be edited.',
      images: [onlineShopImage, './Images/online-shop-2.jpg'],
      link: '',
    },
  ];

  return (
    <>
      {/* Homepage Container */}
      <div className="home-container">
        <section id="home" className="hero-section">
          <h1>Hi, I'm Timo Schuchmann</h1>
          <h2>Master Student of Digital Media</h2>
          <p>
            Welcome to my personal portfolio! I specialize in creating beautiful,
            responsive websites and applications. Take a look at my work and feel
            free to get in touch if you'd like to collaborate.
          </p>
          <Link to="projects" smooth={true} duration={300} offset={-170} className="cta-button">
            View My Work
          </Link>
        </section>
      </div>

      {/* About Me Section */}
      <h1 className="about-me-heading">About</h1>
      <section id="about-me" className="about-me-section">
     
      <div className="left-skillbar">
        <div className="about-me-content">
        
         
            <img src={profilePicture} alt="Your Name" className="about-me-picture" />
            <div className="about-me-text">
              <p>
                Hi, I'm Timo, a passionate software developer and designer with a
                keen interest in creating innovative solutions and beautiful designs.
                With a background in Media Science and Computer Science, I specialize
                in web development, game development, and app development.
              </p>
            </div>
           </div>
          </div>
       
       
            
          
           
           
              <div className="right-skillbar">
              <h3>Skills</h3>

              <div className="skill-bar">
                <div className="progress-bar">
                  <div className="progress" style={{ width: '85%' }}>
                    <span className="skill-title">HTML</span>
                  </div>
                </div>
              </div>

              <div className="skill-bar">
                <div className="progress-bar">
                  <div className="progress" style={{ width: '85%' }}>
                    <span className="skill-title">CSS</span>
                  </div>
                </div>
              </div>

              <div className="skill-bar">
                <div className="progress-bar">
                  <div className="progress" style={{ width: '65%' }}>
                    <span className="skill-title">PHP</span>
                  </div>
                </div>
              </div>

              <div className="skill-bar">
                <div className="progress-bar">
                  <div className="progress" style={{ width: '65%' }}>
                    <span className="skill-title">SQL</span>
                  </div>
                </div>
              </div>

              <div className="skill-bar">
                <div className="progress-bar">
                  <div className="progress" style={{ width: '40%' }}>
                    <span className="skill-title">React</span>
                  </div>
                </div>
              </div>

              <div className="skill-bar">
                <div className="progress-bar">
                  <div className="progress" style={{ width: '40%' }}>
                    <span className="skill-title">Java</span>
                  </div>
                </div>
              </div>

              <div className="skill-bar">
                <div className="progress-bar">
                  <div className="progress" style={{ width: '40%' }}>
                    <span className="skill-title">C#</span>
                  </div>
                </div>
              </div>
            </div>
          
          
         
        
      </section>

      {/* Timeline Section */}
      <section id="resume" className="resume-section">
      <div class="timeline-wrapper">
        <h2 className="timeline-heading">My Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>2024 - Present</h3>
              <p>Master Student of Digital Media at the University Bremen</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>2020 - 2024</h3>
              <p>Bachelor of Science in Media and Computer Science at University Bremen</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>2018 - 2020</h3>
              <p>Internship at J2S Products GmbH - Social Media Management and Web Development</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>2017 - 2024</h3>
              <p>Partime job at AL Computer Service UG - Warehouse Management</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>2023 - 2024</h3>
              <p>Student assistant at IfIB GmbH - Quantitative and Qualitative Data Analysis</p>
            </div>
          </div>
        </div>
        <section className="resume-section">
          <h4>Download full resume</h4>
          <a
            href="/resume.pdf"
            download="Your_Name_Resume.pdf"
            className="cta-button">
            Download
          </a>
          
        </section>
        </div>
      </section>
      

      {/* Projects Section */}
      <section id="projects" className="projects-container">
      <h1>My Projects</h1>
      
   
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => openModal(project)}
            >
              <img src={project.images[0]} alt={project.title} className="project-image" />
              <h2 className="project-title">{project.title}</h2>
            </div>
          ))}
        </div>
      



      </section>

      {/* Modal for Project Details */}
      {modalOpen && currentProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{currentProject.title}</h2>
            <Slider {...settings} className="project-slider">
              {currentProject.images && currentProject.images.map((image, idx) => (
                <div key={idx}>
                  <img src={image} alt={`Slide ${idx + 1}`} className="modal-image" />
                </div>
              ))}
              {currentProject.videos && currentProject.videos.map((video, idx) => (
                <div key={idx}>
                  <video controls className="modal-video">
                    <source src={calculatorVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </Slider>
            <p className="modal-description">{currentProject.description}</p>
            {currentProject.link && (
           <a 
           href={currentProject.link}
           target="_blank" 
           rel="noopener noreferrer" 
           className="modal-link-button"
         >
           {currentProject.buttonLabel}
         </a>
            )}
            <button className="modal-close-button" onClick={closeModal}>X</button>
          </div>
        </div>
        
      )}

     

      
    </>
  );
}

export default Home;
