import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "This is Namaste react"),
      React.createElement("h2", {}, "I'm an H2 tag")
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I'm an H1 tag"),
      React.createElement("h2", {}, "I'm an H2 tag")
    ])
  ]
);

const root = ReactDOM.createRoot(document.getElementById("header"));
root.render(parent);
