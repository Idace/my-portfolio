import React, {useState} from "react"
import "../components/About.css"

const  About=()=> {
    const[showPopup, setShowPopup] = useState(false)

    const handleClick = () => {
        setShowPopup(true)
        setTimeout(() => setShowPopup(false), 3000)
    }

    return (
        <div className="about-container">
            <h1 className="about-title">Meet the maker</h1>

        <div className="about-card">
            <h2 className="about-section"> Product specs</h2>
            <p>
               I have learned a lot from working in physical stores. 
               Leading teams, staying organised and keeping things running smoothly. 
               Now I am starting to turn that experience into digital skills for the world of e-commerce.
            </p>
        </div>

        <div className="about-card">
            <h2 className="about-section"> Features</h2>
            <ul>
                <li>Built my skills on busy shop floors</li>
                <li>Love structure, smart design and getting things done</li>
                <li>Work best with good people and a good laugh</li>
                <li>Learning the code behind the clicks to connect store and screen</li>
            </ul>
        </div>

        <div className="about-card">
            <h2 className="about-section"> Bonus Content</h2>
            <p>
                I live on a small country farm with my family. 
                We love building stuff, growing things, getting our hands dirty and laughing a lot. 
                Life’s best when it’s simple, creative and a little bit messy.
            </p>
        </div>
        <div className="about-card">
            <h2 className="about-section">Add to cart?</h2>
            <p>
                Curious, creative and stubborn in the best way. I love to learn, build and explore what’s possible.
                Let’s connect. I’m a work in progress and proud of it. 
            </p>

            <button className="about-btn" onClick={handleClick}>
                Let's build something
            </button>
        </div>

        {showPopup && (
            <div className="popup">
                <p className="popup-text"> Email me at:<br /><strong>idaebeling@gmail.com</strong></p>
            </div>
        )}
    </div>
    )
}



export default About;