import Link from "next/link";

import "./TopBar.css";

export default function TopBar({ titulo }) {
  const user = localStorage.getItem("user");

  return (
    <>
      <div className="topBar">
        <h4 className="top-text top-title top-welcome">{titulo}</h4>
        <Link href="/">
          <img src="/images/cart.svg" width="24" height="24" />
        </Link>
      </div>
    </>
  );
}
