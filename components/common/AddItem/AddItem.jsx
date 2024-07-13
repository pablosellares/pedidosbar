export default function AddItem({ onClick }) {
  const food = JSON.parse(localStorage.getItem("food"));
  // function handleClick() {
  //   console.log(food.qty);
  // }
  return (
    <button
      onClick={onClick}
      style={{
        background: "url(/images/add.svg) center no-repeat",
        border: "none",
        boxShadow: "none",
        height: "24px",
        width: "24px",
        position: "absolute",
        right: "0",
        top: "50%",
        transform: "translateY(-50%)",
      }}
    ></button>
  );
}
