import React from "react";
import ReactDOM from "react-dom/client";
import Line from "../Components/Line";
import Favorites from "../Components/Favorites";

const AboutDesc = () => {
    return(
        <div className="aboutDesc">
            <h1>Eduardo Murillo</h1>
            <Line/>
            <p>
                I am a 22 year old programmer going into my senior year!
            </p>
            <p>
                I have spent my last two years at UIC expanding my knowledge in programming through the rigorous curriculum at school.All classes
                have contributed greatly to my love of the field. I even became a teaching assistant for UIC's Machine Organization class in the Spring
                of 2025; facilitating labs, office hours, and creating supplemental media resources for the students in the class. 
            </p>
            <section className="listings">
                {/* <Line/> */}
                <p>
                    Coursework: Advanced Data Structures, Computer Algorithms, Cryptography, Database Systems, Machine Organization, Operating Systems, Secure Web App Development
                </p>
                <div className="listingLine"><Line/></div>
                <p>
                    Languages: Assembly x86, C, C++, CSS, HTML, Java, Javascript, Python
                </p>
                <div className="listingLine"><Line/></div>
                <p>
                    Frameworks: FLASK, REACT
                </p>
                <div className="listingLine"><Line/></div>
            </section>
            
            
            <p>
                I am partial to backend development as I prefer to logical standpoint and approaches to their situations. I intend on working on backend and operating systems upon graduation college. 
                I am very excited to get into the field and hopefully make some kind of impact!
            </p>
        </div>
    )
}

export default AboutDesc