import React from "react";

const Sponsor = ({ name, img, url, description, background }) => {
    return (
        <div className="sponsor">
            <div className="banner" style={{ backgroundImage: `url(${background}` }}>
                <img src={img} alt={name} />
            </div>
            <div className="card">
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <h3>{name}</h3>
                </a>
                <p>lorem ipsum pls replace me</p>
            </div>
        </div>
    );
};

export default Sponsor;
