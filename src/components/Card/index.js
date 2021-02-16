import React from "react";
import "./style.css";
import ScrollReveal from "scrollreveal";


function Card(props){

    React.useEffect(() => {
        ScrollReveal().reveal(".portfolio-one", {delay: 200});
        ScrollReveal().reveal(".portfolio-two", {delay: 250});
        ScrollReveal().reveal(".portfolio-three", {delay: 300});
        ScrollReveal().reveal(".portfolio-four", {delay: 350});
        ScrollReveal().reveal(".portfolio-five", {delay: 450});
        ScrollReveal().reveal(".portfolio-six", {delay: 500});
    }, []);

    return(
        <div className={`col-xs-12 col-sm-6 col-lg-4 ${props.class}`}>
            <a href={props.href} target="_blank" rel="noreferrer">
                <div className="card">
                    <img src={props.img} alt={props.alt}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Card;