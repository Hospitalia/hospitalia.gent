import React from "react";

const Person = ({ title, name, email, image, large }) => {
    return (
        <div className={large ? "person large" : "person"}>
            <img
                src={`http://hospitalia.gent/assets/people/${image}`}
                alt={title}
            />
            <div>
                <h3>{title}</h3>
                <p>{name}</p>
                {email ? (
                    <a href={email.replace("(at)", "@").replace("(dot)", ".")}>
                        {email.replace("(at)", "@").replace("(dot)", ".")}
                    </a>
                ) : null}
            </div>
        </div>
    );
};

export default Person;
