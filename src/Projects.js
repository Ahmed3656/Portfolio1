import React from "react";

function Projects(){
    const projects = [
        {
            title:"Elite Kicks",
            description:"An e-commerce website, built with JavaScript",
            image:"./images/project4.png",
            url:"https://ahmed3656.github.io/EliteKicks/index.html"
        },
        {
            title:"Portfolio",
            description:"My personal portfolio site, built with React.js",
            image:"./images/project5.png",
            url:"https://ahmed3656.github.io/Portfolio/"
        },
        {
            title:"Welcome to Egypt",
            description:"A Bootstrap based website",
            image:"./images/project3.png",
            url:"https://ahmed3656.github.io/Welcome-to-Egypt/"
        },
        {
            title:"Tech Squad",
            description:"An HTML5 and CSS3 based website (not responsive)",
            image:"./images/project2.png",
            url:"https://ahmed3656.github.io/Tech-Squad/"
        },
        {
            title:"Gamer Spot",
            description:"An HTML and CSS based website (not responsive)",
            image:"./images/project1.png",
            url:"https://ahmed3656.github.io/Gamer-Spot/"
        },
    ]
    return(
        <div className="projects-body">
            <div className="projects-container container d-flex row justify-content-around mx-auto">
                {projects.map((item)=>(
                    <div className="projects-item col-md-4 my-3" key={item.title}>
                    <img src={require(`${item.image}`)} className="m-auto" alt={item.title}></img>
                    <div className="img-overlay d-flex justify-content-center align-items-center">
                        <div className="img-overlay-content text-center text-light">
                            <h5>{item.title}</h5>
                            <p><small>{item.description}</small></p>
                            <a href={item.url} target="_blank">Visit here</a>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Projects