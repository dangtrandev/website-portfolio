import React from "react";

/*A homepage that introduces the developer and provides an overview of their skills and experience.
A portfolio section that showcases the developer's past projects, including screenshots and descriptions of each project.
A blog section where the developer can write about their work and share their thoughts on the industry.
A contact form or email address where potential clients or employers can get in touch with the developer.
An about me or resume section that provides more detailed information about the developer's background and qualifications.
Links to the developer's social media profiles and online profiles (such as LinkedIn).
A responsive design that works well on both desktop and mobile devices.
The specific details and features of the website will depend on the needs and preferences of the front-end developer.*/

//using the arrow function component
export const NavBar = () => {
    return (
        <div id="navbar_container">
            <p><span>DANG</span>'s Webfolio</p>
            <div id="navLink_list">
                <a href="index.html">Home</a>
                <a href="#">Works</a>
                <a href="#">About</a>
                <a href="#">Projects</a>
            </div>
            <button><a href="#">Let's Chat</a></button>
        </div>
    ); 
}

