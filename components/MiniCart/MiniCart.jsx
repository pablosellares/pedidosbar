import { useEffect, useState } from "react";
import CallToAction from "../common/CallToAction/CallToAction";

export default function MiniCart() {
  const [addedFood, setAddedFood] = useState([]);

  useEffect(() => {
    fetch("/data/hamburguesas.json")
      .then((res) => res.json())
      .then((data) => {
        setAddedFood(data);
      });
  }, []);

  const addedItems = addedFood.filter((item) => item.qty > 0);

  return (
    <div className="minicart">
      <h4>Estas por ordenar</h4>
      <ul>
        {addedItems.map((item, i) => (
          <li key={i}>{item.name}</li>
        ))}
      </ul>
      <hr className="totals-separator"></hr>
      <div className="minicart-totals-cta" style={{ display: "flex" }}>
        <div className="minicart-totals">
          <h5>Total</h5>
          <p className="minicart-totals-price">$0000</p>
        </div>
        <CallToAction contenido="Abonar" />
      </div>
    </div>
  );
}
