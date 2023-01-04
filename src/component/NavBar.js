import { findByLabelText } from "@testing-library/react";
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
    const navBar_style = { 
        div : {
            height: "80px", 
            display: "flex", 
            flexDirection: "row", 
            justifyContent: "space-between", 
            color: "#8b4bfa",
            padding: "20px 30px 20px 30px",
            alignItems: "baseline",
        },

        span : {
            color: "#3f4afa", 
            fontSize: "40px",
            fontWeight: "900", 
            fontFamily: "Poppins, sans-serif",
        },

        p : {
            fontSize: "30px", 
            fontWeight: "900",
            fontFamily: "Poppins, sans-serif",
        },

        list: {
            display: "flex", 
            flexDirection: "row", 
            justifyContent: "space-between", 
            width: "35%",
            alignItems: "baseline", 

        },

        a: {
            textDecoration: "none", 
            color: "#8b4bfa", 
            fontWeight: "500", 
            fontFamily: "Poppins, sans-serif",
        }, 

        button: {
            height: "40px", 
            width: "120px", 
            borderRadius: "50px", 
            alignItems: "center", 
            backgroundImage: "linear-gradient(#3f4afa, #8b4bfa)", 
            color: "#f8f8f8", 
            textDecoration: "none", 
            border: "none", 

        }
    }
    return (
        <div id="navbar_container" style={navBar_style.div}>
            <p><span style={navBar_style.span}>DANG</span>'s Webfolio</p>
            <div id="linkList" style={navBar_style.list}>
                <a style={navBar_style.a} href="index.html">Home</a>
                <a style={navBar_style.a} href="#">Works</a>
                <a style={navBar_style.a} href="#">About</a>
                <a style={navBar_style.a} href="#">Projects</a>
            </div>
            <button style={navBar_style.button}><a href="#" id="button_link">Let's Chat</a></button>
        </div>
    ); 
}

