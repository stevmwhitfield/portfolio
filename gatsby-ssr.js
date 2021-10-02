import React from "react";

export function onRenderBody({ setHeadComponents }) {
  setHeadComponents([
    <script
      defer
      src="https://use.fontawesome.com/releases/v5.15.4/js/all.js"
      integrity="sha384-rOA1PnstxnOBLzCLMcre8ybwbTmemjzdNlILg8O7z1lUkLXozs4DHonlDtnE7fpc"
      crossOrigin="anonymous"
    ></script>,
  ]);
}
