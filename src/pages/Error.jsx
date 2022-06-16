import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ErrorStyles } from "./styledComponents";

function Error() {
  const [height, setHeight] = useState("100vh");

  useEffect(() => {
    const navbarRect = document
      .querySelector(".navbar")
      .getBoundingClientRect();
    const footerRect = document
      .querySelector(".footer")
      .getBoundingClientRect();

    setHeight(`calc(100vh - ${navbarRect.height}px - ${footerRect.height}px)`);
  }, []);

  return (
    <ErrorStyles
      className="error"
      style={{
        width: "100%",
        minHeight: height,
      }}
    >
      <h2>Not Found!</h2>
      <Link to="/">Comfy Home</Link>
    </ErrorStyles>
  );
}

export default Error;
