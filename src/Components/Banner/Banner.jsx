import React from 'react';
import "./Banner.css"

const Banner = ({ statusCount, resolvedCount }) => {
    return (
        <div className='max-w-300 mx-auto'>
            <div className="container">
                <div className="card purple-gradient">
                    <div className="pattern-overlayy"></div>
                    <div className="content">
                        <p>In-Progress</p>
                        <h1>{statusCount}</h1>
                    </div>
                </div>

                <div className="card green-gradient">
                    <div className="pattern-overlayy"></div>
                    <div className="content">
                        <p>Resolved</p>
                        <h1>{resolvedCount}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;