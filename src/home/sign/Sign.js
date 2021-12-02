import React from "react";

const Sign = () => {
  const style = {
    color: "#ccc",
    textDecoration: "none"
  };
  return (
    <div className="my-container text-center">
      <h2 className="fs-32">Want First Dibs?</h2>
      <p className="fs-16">
        Join our email list and be the first to know about new limited edition
        products, material innovations, and lots
        <br /> of other fun updates.
      </p>
      <div className="sign__in">
        <input
          type="email"
          placeholder="Enter Your Email Address
"
        />
        <button>Sign Up</button>
      </div>
      <br />
      <a
        href="#"
        className="fs-14"
        style={style}
      >
        Note: You can opt-out at any time. See our
      </a>
      <a
        href="#"
        className="fs-14"
        style={style}
      >
        Privacy Policy and Terms
      </a>
    </div>
  );
};

export default Sign;
