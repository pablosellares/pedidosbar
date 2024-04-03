export default function AddItem() {
  const food = JSON.parse(localStorage.getItem("food"));
  function handleClick() {
    console.log(food);
  }
  return (
    <button
      onClick={handleClick}
      style={{
        background: "url(/images/add.svg) center no-repeat",
        border: "none",
        boxShadow: "none",
        height: "24px",
        position: "absolute",
        right: "0",
        top: "50%",
        transform: "translateY(-50%)",
        width: "24px",
      }}
    ></button>
  );
}
