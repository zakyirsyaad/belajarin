// FotoBadge.js
import React from 'react';

const FotoBadge = ({ src, alt, badgeImg }) => {
    return (
        <div className="foto-badge-container">
            <img src={src} alt={alt} className="user-photo" />
            <span className="badge"><img src={badgeImg} /></span>
        </div>
    );
};

export default FotoBadge;
