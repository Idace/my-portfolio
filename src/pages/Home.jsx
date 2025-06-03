import React, {useState} from "react"
import "../components/Home.css"


const Home =()=> {
    const [added, setAdded] = useState(false)

    const handledAddClick =()=> {
        setAdded(true)
        setTimeout(() => setAdded(false), 2000)
    }

    return (
        <div className="site-container">
            <h1 className="title">Hi and welcome to my digital storefront</h1>
            <p> I’m currently studying frontend development at Sundsgården Folk High School, 
                a course for women and non-binary folks who want to break into tech. We’re learning how 
                to build websites from scratch with HTML, CSS and JavaScript. We work in teams, help each other out 
                and get inspired by women who are already working in the industry.
            </p>
            <p> 
                It’s been intense, exciting and honestly really fun. This portfolio is where I’m collecting everything 
                I’ve been working on so far. Some code, some design, some aha-moments and probably a few late-night bugs.
            </p>
            <p>
                Feel free to look around and see what I’ve been up to.
            </p>
            <button className="cart-btn" onClick={handledAddClick}>
                Add curiosity to cart
            </button>
            {added && <p className="cart-message">Curiosity added!</p>}
        </div>
    )
}



export default Home;
