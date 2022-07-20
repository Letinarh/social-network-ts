import React from 'react';
import preloaderImg from "../../../Assets/images/LoaderSimple.gif";


const Preloader = () => {
    return (
        <div>
            <img src={preloaderImg}/>
        </div>
    );
};

export default Preloader;