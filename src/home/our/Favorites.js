import React, { useState } from "react";
import Filter from "./Filter";
import data from "./data.json";
import Shopping from "./Shopping";
const Favorites = () => {
  const [pos, setPos] = useState({});
  const [dataes, setData] = useState(data.filter(item => {
      return item.title === 'everday';
  }))
  function position(e, all, target) {
    setPos({ w: e.width, l: e.left });
    let clas = document.querySelectorAll(`.${all}`);
    clas.forEach((item) => {
      item.classList.remove("big");
    });
    target.classList.add("big");
    setData(data.filter(item => {
        return item.title === target.innerText.toLowerCase();
    }))
  }
  return (
    <div className="mt-5 py-5">
      <Filter position={position} pos={pos} />
      <Shopping data={dataes}/>
    </div>
  );
};

export default Favorites;
