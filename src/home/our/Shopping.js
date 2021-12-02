import React from "react";

const Shopping = ({ data }) => {
  return (
    <div className="my-container filtered__box">
      {data.map((item, i) => (
        <div className="box__wrap" key={i}>
          <div className="box">
            <img src={item.img} className="box__img" />
          </div>
          <div className="buy__btn">
            <button>Shop Men</button>
            <button>Shop Women</button>
          </div>
          <div className="box_description">
            <h4 className="fs-22">{item.description}</h4>
            <div className="hr"></div>
            <p className="mt-2"><i className={item.icon} style={{color: item.bool?"#ebd300":"#ccc"}}></i><span className="fs-14 ml-3">{item.season}</span></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shopping;
