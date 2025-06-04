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
                a course for women and non-binary people who want to break into tech. We’re learning how 
                to build websites from scratch with HTML, CSS and JavaScript.
            </p>
            <p> 
               This portfolio is where I collect what I’ve been working on so far. Code, design and ideas in progress.
            </p>
            <p>
                Feel free to browse around. Just like any good webshop, new things are always being added.
            </p>
            <button className="cart-btn" onClick={handledAddClick}>
                Add curiosity to cart
            </button>
            {added && <p className="cart-message">Curiosity added!</p>}
        </div>
    )
}



export default Home;
