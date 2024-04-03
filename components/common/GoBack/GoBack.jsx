export default function GoBack() {
  function handleClick() {
    history.back(1);
  }
  return (
    <button
      onClick={handleClick}
      style={{
        width: "24px",
        height: "24px",
        background: "url(/images/back.svg) center no-repeat",
        marginRight: "8px",
        border: "none",
        boxShadow: "none",
      }}
    ></button>
  );
}
