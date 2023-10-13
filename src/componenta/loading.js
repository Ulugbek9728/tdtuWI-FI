import React from 'react';
import '../asset/loading.css'

function Loading(props) {
    return (
        <div className="loader">
            <div className="circle">
                <div className="dot"></div>
                <div className="outline"></div>
            </div>
            <div className="circle">
                <div className="dot"></div>
                <div className="outline"></div>
            </div>
            <div className="circle">
                <div className="dot"></div>
                <div className="outline"></div>
            </div>
            <div className="circle">
                <div className="dot"></div>
                <div className="outline"></div>
            </div>
        </div>
    );
}

export default Loading;