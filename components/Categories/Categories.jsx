import Image from "next/image";
import Link from "next/link";

import "./categories.css";
import { useEffect, useState } from "react";

export default function Categories() {
  const [comida, setComida] = useState([]);

  useEffect(() => {
    fetch("../data/comida.json")
      .then((res) => res.json())
      .then((data) => {
        setComida(data);
      });
  }, []);

  return (
    <>
      <ul
        className="categoria-ul"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {comida.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className="card card-categoria"
              style={{
                position: "relative",
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
              }}
            >
              <h3>{item.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
