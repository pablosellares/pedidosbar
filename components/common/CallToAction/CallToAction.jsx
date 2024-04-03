import "./CallToAction.css";

const CallToAction = ({ contenido, onSubmit }) => {
  return (
    <button
      className="btn btn-cta w-100"
      type="submit"
      value={contenido}
      onSubmit={onSubmit}
    >
      {contenido}
    </button>
  );
};

export default CallToAction;
