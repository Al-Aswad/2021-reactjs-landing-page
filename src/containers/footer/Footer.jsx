import React from 'react'
import gptLogo from '../../assets/logo.svg'
import './footer.css'

const Footer = () => {
     return (
          <div className="gpt3__footer section__padding">
               <div className="gpt3__footer-heading">
                    <h1 className="gradient__text">
                         Lorem ipsum dolor sit amet consectetur.
                    </h1>
               </div>
               <div className="gpt3__footer-btn">
                    <p>Request Early Access</p>
               </div>
               <div className="gpt3__footer-links">
                    <div className="gpt3__footer-links_logo">
                         <img src={gptLogo} alt="logo"/>
                         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="gpt3__footer-links_div">
                         <h4 className="">Links</h4>
                         <p>Overons</p>
                         <p>Sosial Media</p>
                         <p>Countri</p>
                         <p>Contact</p>
                    </div>
                    <div className="gpt3__footer-links_div">
                         <h4 className="">Company</h4>
                         <p>Overons</p>
                         <p>Sosial Media</p>
                         <p>Countri</p>
                         <p>Contact</p>
                    </div>
                    <div className="gpt3__footer-links_div">
                         <h4 className="">Get In Touch</h4>
                         <p>Overons</p>
                         <p>Sosial Media</p>
                         <p>Countri</p>
                         <p>Contact</p>
                    </div>
               </div>
               <div className="gpt3__footer-copyright">
                    <p>@ 2021 GPT-3. All right reserved</p>
               </div>
          </div>
     )
}

export default Footer
