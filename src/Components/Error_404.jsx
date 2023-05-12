import React from "react";

const Error = () => {
  const error_img =
    "https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg";
  const error_gif = "404_Error.gif";
  return (
    <>
      <div class="error_container">
        <img src={error_img}/>
        <h1>Oops! Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <a href="/">Go back to the homepage</a>
      </div>
    </>
  );
};
export default Error;
