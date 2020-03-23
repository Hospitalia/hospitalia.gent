import React from "react";

const Person = ({ title, name, email, image, large }) => {
    return (
        <div className="person">
            {image ? (
                <img
                    className={large ? "large" : "small"}
                    src={image}
                    alt={title}
                />
            ) : null}
            <div>
                <h3>{title}</h3>
                <p>{name}</p>
                {email ? (
                    <a href={`mailto:${email.replace("(at)", "@").replace("(dot)", ".")}`}>
                        {email.replace("(at)", "@").replace("(dot)", ".")}
                    </a>
                ) : null}
            </div>
        </div>
    );
};

export default Person;
