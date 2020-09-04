import React from "react";

function Loading() {
  return (
    <img src={require("../Spinner.gif")} alt="Loading..." class="loading" />
  );
}

export default Loading;
