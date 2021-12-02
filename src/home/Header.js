import React from 'react';

const Header = () => {
    return (
        <div className="Header" style={{backgroundImage: 'url("./images/page_header1.png")'}}>
            <div className="my-container">
                <div className="box">
                    <h1 className="fs-48">The Trail Runner SWT Is Here.</h1>
                    <p className="fs-16">Durable. Comfortable. Ready to get dirty.</p>
                    <div className="">
                        <button className="header__btn">Shop Men</button>
                        <button className="header__btn ml-5">Shop Women</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Header;