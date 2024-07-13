import Link from "next/link";

import "./TopBar.css";
import { useState } from "react";
import MiniCart from "../MiniCart/MiniCart";

export default function TopBar({ titulo }) {
  const user = localStorage.getItem("user");

  const [isVisible, setIsVisible] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    if (!isVisible) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  return (
    <>
      <div className="topBar">
        <h4 className="top-text top-title top-welcome">{titulo}</h4>
        <button
          style={{
            background: "url(/images/cart.svg) center no-repeat",
            border: "none",
            boxShadow: "none",
            height: "24px",
            width: "24px",
          }}
          onClick={handleClick}
        ></button>
        {isVisible ? <MiniCart /> : ""}
      </div>
    </>
  );
}
