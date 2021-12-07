import React from 'react'
import Feature from '../../components/feature/Feature'
import './whatgpt3.css'



const WhatGPT3 = () => {
    return (
        <div className="gpt3__whatgpt3 section__margin" id="whatgp3">
        <div className="gpt3__whatgpt3-feature">
            <Feature title="WhatGPT3" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus ab obcaecati voluptas necessitatibus quaerat doloremque ipsum fuga harum dicta ullam officiis nulla rerum earum distinctio, debitis quisquam enim error facere."/>
            {/* <Feature/> */}
        </div>
        <div className="gpt3__whatgpt3-heading">
            <h1 className="gradient__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, id?
            </h1>
            <p>Explore The Library</p>
        </div>
        <div className="gpt3__whatgpt3-container">
            {/* <Feature title="Feature"/>
            <Feature title="Feature"/>
            <Feature title="Feature"/> */}
            <Feature title="ChetBots" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, recusandae fugit! Id dignissimos repellat harum rem voluptate ratione facilis nemo, cumque explicabo! Magnam assumenda quam perferendis blanditiis fuga neque necessitatibus.14"/>
            <Feature title="KnowladgeBase" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, recusandae fugit! Id dignissimos repellat harum rem voluptate ratione facilis nemo, cumque explicabo! Magnam assumenda quam perferendis blanditiis fuga neque necessitatibus.14"/>
            <Feature title="Education" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, recusandae fugit! Id dignissimos repellat harum rem voluptate ratione facilis nemo, cumque explicabo! Magnam assumenda quam perferendis blanditiis fuga neque necessitatibus.14"/>
        </div>
        </div>
    )
}

export default WhatGPT3
