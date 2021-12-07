import React from 'react'
import Feature from '../../components/feature/Feature'
import './features.css'

const featuresData=[
     {
          title:'Lorem ipsum dolor, sit amet consectetur',
          text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam blanditiis saepe animi minima!"
     },
     {
          title:'Lorem ipsum dolor, sit amet consectetur',
          text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam blanditiis saepe animi minima!"
     },
     {
          title:'Lorem ipsum dolor, sit amet consectetur',
          text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam blanditiis saepe animi minima!"
     },
     {
          title:'Lorem ipsum dolor, sit amet consectetur',
          text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam blanditiis saepe animi minima!"
     },
     
]

const Features = () => {
     return (          
          <div className="gpt3__features section__padding" id="features">
               <div className="gpt3__features-heading">
                    <h1 className="gradient__text">
                         Lorem ipsum dolor, sit amet consectetur adipisicing.
                    </h1>
                    <p>
                         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab necessitatibus
                    </p>
               </div>
               <div className="gpt3__features-container">
                    {featuresData.map((item, index)=>(
                        <Feature title={item.title} text={item.text} />
                    ))}
               </div>
          </div>          
     )
}

export default Features
