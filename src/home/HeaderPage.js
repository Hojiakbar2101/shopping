import React from 'react';
import { Parallax } from 'react-parallax';
const HeaderPage = ({img, title, des, btnName}) => {
    const header = {
        height: "545px",
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        marginTop: "50px",
    }
    return (
        <>
            <div className="page__headers" style={header}></div>
            <div className="my-container text-center">
                <h4 className="fs-32 mt-4">{title}</h4>
                <p className="fs-16 page__header_des">{des}</p>
                <button className="page__header_btn">
                    {btnName}
                </button>
            </div>
        </>
    );
};


export default HeaderPage;