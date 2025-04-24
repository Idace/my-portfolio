import React, {useState} from "react";

import ProjectCard from "../components/ProjectCard";
import project1Image from "../assets/project1.png";
import project2Image from "../assets/project2.png";
import project3Image from "../assets/project3.png";
import {FaCube, FaCodeBranch, FaRocket} 
from "react-icons/fa";


function Portfolio() {
    const [showProjects, setShowProjects] = useState(false);

  return (
    <div className="portfolio">
        <div className="portfolio-header">
            <h1 className="title">PORTFOLIO</h1>
        </div>

      <button className="preview-btn" onClick={() => setShowProjects(!showProjects)}>
        {showProjects ? "Hide projects" : "Preview Projects"}
      </button>
      
      {showProjects &&(
      <div className="card-container">
        <ProjectCard 
          icon={<FaCube />}
          name="Vision To Code"
          screenshot={project1Image}
          github="https://github.com/Idace/Figma-lesson4.git"
          tech="Html, css"
          description="This is a basic landing page I built by looking at a design made in Figma. 
          The goal was to practice turning a design into real code using HTML and CSS. 
          The page includes a main section with a title, short text, and a button. 
          The layout is simple and clean, and I focused on making everything look as close to the design as possible."
          whatItDoes="This is a basic landing page I built based on a design. It gives a first impression of a product or service, 
          with a clear message and a button to sign up or learn more. 
          The design works well on both computers and phones, and is meant to look clean and easy to use."
          learned="I got better at matching a design exactly by paying attention to spacing, fonts, and layout. I also improved my CSS skills, 
          especially using Flexbox to arrange things on the page. 
          I learned how to start a new project from scratch and how to use Git and GitHub to save and share my code."
          challenges="The hardest part was getting everything to look exactly like the design. Spacing and font sizes had to be just right. 
          I also had some issues with Flexbox and making sure the layout worked well on different screen sizes. 
          But solving these problems helped me become more careful and confident in my code."
          role="Solo project"
        />
        <ProjectCard
          icon={<FaCodeBranch />}
            name="Custom Sign-Up Form"
            screenshot={project2Image}
            github="https://github.com/Idace/Lesson-7.git"
            tech="Css, JavaScript, Html"
            description="This is a custom sign-up form I designed and built from scratch using HTML and CSS. 
            The layout has a split-screen style, with an image and intro message on one side, and the form on the other. 
            The form lets users fill in their name, email, password, a message, and check a box to agree to the terms. 
            It’s made to look clean, modern, and work well on all screen sizes."
            whatItDoes="The page allows users to sign up by filling out a simple form. It collects important information like name, email, and password, 
            and also includes a message box and a checkbox to accept terms. 
            The design is responsive, so it looks good on both phones and computers."
            learned=" learned how to turn my own design idea into a real working web page using only HTML and CSS. 
            I also practiced how to build forms that are easy to use and work for everyone, including things like labels, placeholders, and layout."
            challenges="The hardest part was making sure the layout worked on both large and small screens, especially with the two-column split. 
            It also took some effort to get all the form fields lined up properly and looking good. Styling things like placeholder text and checkboxes 
            to match the rest of the design was a bit tricky, but I figured it out."
            role="Solo project"
        />
        
        <ProjectCard
        icon={<FaRocket />}
          name="Genesis Portfolio Website"
          screenshot={project3Image}
          github="https://github.com/Idace/Genesis-design.git"
          tech="Css, Html, Scss"
          description="This is a personal portfolio website I built based on a Figma design called Genesis. 
          It includes three different pages: a homepage with creative artwork, an about page, and a contact page. 
          All the pages are connected through a top navigation menu, so you can easily move between them. 
          I used HTML and styled everything with Sass, which is a way to make CSS more organized and easier to work with."
          whatItDoes="The website shows off creative and artistic work in a simple, clean way. You can scroll through the images on the homepage, 
          read more about the person behind the work, and send a message through the contact form"
          learned="I learned how to build a multi-page website and connect everything together. I also learned how to use Sass to keep my styles clean and organized, 
          and how to follow a design and turn it into real code."
          challenges="This was one of the hardest projects I’ve done. I had a lot of trouble getting things to work the way I wanted, especially with the layout and navigation. 
          But I kept trying, learned a lot along the way, and I’m really proud that I finished it and made it all work."
          role="Solo project"
      />
      </div>
    )}
    </div>
  );
}

export default Portfolio
