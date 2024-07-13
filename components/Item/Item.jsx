import { useEffect, useState } from "react";
import Link from "next/link";

export default function Item() {
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
    </>
  );
}
