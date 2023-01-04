import React from "react"; 

export const Header = (props) => {
    return (
        <div id="header_container">
            <h1>Hello! My name is {props.name}</h1>
            <p>and I am recent graduate with a degree in Computer Science. 
                I have a strong foundation in software development and am eager
                to apply my skills and knowledge to real-world projects. I am fast 
                learner and am always looking for opportunities to expand my skillet
                and gain new experience. In my free time, I enjoy staying up-to-date 
                on the lastest technologies and tinkering with personla projects. I am
                excited to begin my career as a software developer and contribute to the
                success of a dynamic team. 
            </p>
        </div>
    );
}

