import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import "./TabBar.css";

export default function TabBar() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("/data/menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenuItems(data);
      }, []);
  });
  return (
    <menu className="nav-menu">
      <ul className="menu-ul">
        {menuItems.map((menuItem) => (
          <li key={menuItem.id}>
            <Link href={menuItem.href}>
              <img src={menuItem.icon} width="28" height="28" />
              <p>{menuItem.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </menu>
  );
}
