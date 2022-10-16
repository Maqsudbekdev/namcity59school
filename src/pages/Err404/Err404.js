import React from "react";

const Err404 = () => {
  const style = {
    err: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
    text: {
      fontSize: "100px",
    },
  };
  return (
    <div className="err" style={style.err}>
      <h1 style={style.text}>Err40</h1>
    </div>
  );
};

export default Err404;
