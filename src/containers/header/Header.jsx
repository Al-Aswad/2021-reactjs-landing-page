import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
    return (
        <div>
            <div className="gpt3__header section__padding">
                <div className="gpt3__header-content">
                    <h1 className="gradient__text">
                        Let's Build Something From Heart
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consequatur provident explicabo excepturi nostrum minus, praesentium recusandae necessitatibus delectus neque nihil quam, at, vero numquam amet voluptatibus natus aut aliquam!10</p>
                    <div className="gpt3__header-content__input">
                        <input type="email"  placeholder="Hi, Can i Help you ?"/>
                        <button type="button">Get Started</button>
                    </div>
                    <div className="gpt3__header-content__people">
                        <img src={people} alt=""/>
                        <p>Semuanya di lakukan secara profesional</p>
                    </div>
                </div>  
                <div className="gpt3__header-image">
                    <img src={ai} alt=""/>
                </div>                  
            </div>
        </div>
    )
}

export default Header
