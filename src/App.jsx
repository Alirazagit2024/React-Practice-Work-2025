import React from "react";
import Section from "./components/section";
import Cards from "./components/cards";
import "./App.css";

export default function App() {
  return (
    <>
      <Section
        title1="Selling on the"
        title2="internet like a Pro"
        content="We know how large objects will act, but things on a
small scale just do not act that way."
        btn1="Get Quote Now"
        btn2="Learn More"
      />
      <Cards />
    </>
  );
}
