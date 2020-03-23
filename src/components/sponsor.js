import React from "react";

const Sponsor = ({ name, detail, img, url, description, background }) => {
    return (
        <div className="sponsor">
            <div className="banner" style={{ backgroundImage: `url(${background}` }}>
                <img src={img} alt={name} />
            </div>
            <div className="card">
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <h3>{name} <img src="/assets/icons/link.png" /></h3>
                    {detail ? <h4>{detail}</h4> : null}
                </a>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Sponsor;
