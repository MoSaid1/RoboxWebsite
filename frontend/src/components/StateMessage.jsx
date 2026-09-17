import "./StateMessage.css";

export function Loading({ label = "Loading..." }) {
  return (
    <div className="state-message">
      <div className="spinner" />
      <p>{label}</p>
    </div>
  );
}

export function ErrorMessage({ message = "Something went wrong. Please try again." }) {
  return (
    <div className="state-message">
      <p>{message}</p>
    </div>
  );
}
