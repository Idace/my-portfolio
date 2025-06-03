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
                Background in retail, logistics and team leadership. Built for structure, multitasking and solving
                chaos with calm and caffeine.
            </p>
        </div>

        <div className="about-card">
            <h2 className="about-section"> Features</h2>
            <ul>
                <li>Hands-on experience from physicel stores</li>
                <li>Organizationel ninja with a passion for clean UX</li>
                <li>Team player who loves a laugh and a plan</li>
                <li>Dreams of bridging the gap between shop floor and webshop</li>
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
                Curiosity, creativity and stubborness included. Always ready to learn, build and push boundaries.
                Click below to collaborate, limited edition, always evolving. 
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