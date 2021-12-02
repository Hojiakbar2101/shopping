import React, {useEffect} from "react";

const Filter = ({ position, pos }) => {
  const parent = {
    backgroundColor: "#ccc",
    paddingTop: "2px",
  };
  const style = {
    position: "absolute",
    width: `${pos.w + 50}px`,
    height: "4px",
    left: `${pos.l - 22}px`,
    backgroundColor: "#000",
    transition: '.3s',
    fontWeight: '400',
  };
  useEffect(() =>{
    document.querySelectorAll('.filtered')[0].click();
  },[]);
  return (
    <>
      <h1 className="text-center overflow-hidden">Our Favorites</h1>
      <div className="d-flex text-center filter mt-4">
        <p className="filtered" onClick={(e) => position(e.target.getBoundingClientRect(), e.target.className, e.target)}>
          Everyday
        </p>
        <p className="filtered" onClick={(e) => position(e.target.getBoundingClientRect(), e.target.className, e.target)}>
          Running
        </p>
        <p className="filtered" onClick={(e) => position(e.target.getBoundingClientRect(), e.target.className, e.target)}>
          Travel
        </p>
      </div>
      <div className="my-container" style={parent}>
        <div className="pos" style={style}></div>
      </div>
    </>
  );
};

export default Filter;
