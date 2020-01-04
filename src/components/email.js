import React from "react";

const Email = ({ title, name, email, image }) => {
    return (
        <div>
            <img
                src={`http://hospitalia.gent/assets/people/${image}`}
                alt={title}
            />
            <div>
                <h3>{title}</h3>
                <p>{name}</p>
                <a href={email.replace("(at)", "@").replace("(dot)", ".")}>
                    {email.replace("(at)", "@").replace("(dot)", ".")}
                </a>
            </div>
        </div>
    );
};

export default Email;
