import React, { useEffect, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import styles from './home.modules.css'
import img1 from './images/img1.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'

function Home() {

  const keyFeatures=["Job Posting and Management",
    "Candidate Sourcing and Filtering",
    "Automated Applicant Tracking",
    "Collaborative Hiring",
    "Interview Scheduling and Management"];

    const benefits=[
      "Time and Cost Savings",
      "Expanded Candidate Reach",
      "Improved Candidate Quality",
      "Enhanced Collaboration and Decision-Making",
      "Data-Driven Insights"
    ]
    const textRef = useRef(null);

    const handleScroll = () => {

    //     var pageTop = $(document).scrollTop();
    //   var pageBottom = pageTop + $(window).height();
    //   var tags = $(".tag");

    //   for (var i = 0; i < tags.length; i++) {
    //     var tag = tags[i];
    //     if ($(tag).position().top < pageBottom) {
    //       $(tag).addClass("visible");
    //     } else {
    //       $(tag).removeClass("visible");
    //     }
    //   }

    //   const element = textRef.current;
    //   const rect = element.getBoundingClientRect();
    //   const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  
    //   if (rect.top <= viewHeight * 0.75) {
    //     element.classList.add('slide-down-visible');
    //   } else {
    //     element.classList.remove('slide-down-visible');
    //   }
    };
  
    // useEffect(() => {
    //   window.addEventListener('scroll', handleScroll);
    //   return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //   };
    // }, []);

  return (
    <>
      {/* <nav className={`navbar ${styles.navbar} w-100 text-dark my-3 navbar-expand-lg`}>
        <div className='container-fluid'>
          <ul className={`navbar-nav `}>
            <li className='nav-item'>
              <a href="/" className='nav-link'>LOGO</a>
            </li>
            <li className='nav-item'>
              <a href="/" className='nav-link'>Home</a>
            </li>
            <li className='nav-item'>
              <a href="/" className='nav-link'>Hire Now</a>
            </li>            
            <li className='nav-item'>
              <a href="/" className='nav-link'>About</a>
            </li>            
            <li className='nav-item'>
              <a href="/" className='nav-link'>Login</a>
            </li>
          </ul>
        </div>
      </nav> */}
      <br/>
      <div className="container main">
        <div className='row'>
          <div className="col-md-6 tagline"
          data-aos="fade-up" data-aos-once="true"
          data-aos-easing="ease-in-sine" data-aos-duration="600"
          // data-aos="fade-zoom-in" data-aos-offset="200" 
          // data-aos-easing="ease-in-sine" data-aos-duration="600"

          >
            <p> Hire the </p>
            <p className='text-yellow'> Best Talents </p>
            <p> With Us. </p>
          </div>
          <div className='col-md-5'>
            <img src={img1} className='img1' alt="img1"/>
          </div>
      </div>
      </div>
      <br/>
      <div className='container section my-5 w-100'>
        <h2 className='text-center'>Key Features</h2>
        <div className='row'
         data-aos="fade-zoom-in" data-aos-offset="200" 
         data-aos-easing="ease-in-sine" data-aos-duration="600"

        >
        <div className='col-md-3 my-3'>
            <img src={img2} className='img2' height={300} alt="img2"/>
          </div>
          <div className='col-md-8'>
            <ol className='key-list'>
              {keyFeatures.map((item,index) =><li key={index}>{item}</li>)}
            </ol>
          </div>
        </div>       
      </div>

      <div className='container section my-5 w-100'>
        <h2 className='text-center'>Benefits</h2>
        <div className='row'
         data-aos="fade-zoom-in" data-aos-offset="200" 
         data-aos-easing="ease-in-sine" data-aos-duration="600"
        >
          <div className='col-md-8'>  
            <ul className='benefits'>
              {benefits.map((item,index) =><li key={index}>{item}</li>)}
            </ul>
          </div>
          <div className='col-md-3 my-3 '>
            <img src={img3} className='img3' alt="img3"/>
          </div>
        </div>       
      </div>
    </>
  )
}

export default Home