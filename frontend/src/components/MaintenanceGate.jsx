import { useEffect, useState } from "react";
import "./MaintenanceGate.css";

const STORAGE_KEY = "robox_site_unlocked";
const SITE_PASSWORD = "0111";

export default function MaintenanceGate({ children }) {
  const [unlocked, setUnlocked] = useState(false);
  const [checked, setChecked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setUnlocked(localStorage.getItem(STORAGE_KEY) === "true");
    setChecked(true);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (password === SITE_PASSWORD) {
      localStorage.setItem(STORAGE_KEY, "true");
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  if (!checked) return null;

  if (!unlocked) {
    return (
      <div className="maintenance-gate">
        <div className="maintenance-card">
          <img src="/LogoIcon.png" alt="Robox" className="maintenance-logo" />
          <span className="maintenance-badge">Under Development</span>
          <h1>We're building something new</h1>
          <p>This site is currently under development and isn't open to the public yet. Enter the password to continue.</p>
          <form onSubmit={handleSubmit} className="maintenance-form">
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="Password"
              autoFocus
              className={error ? "maintenance-input error" : "maintenance-input"}
            />
            <button type="submit" className="btn btn-primary">
              Enter
            </button>
          </form>
          {error && <p className="maintenance-error">Incorrect password. Please try again.</p>}
        </div>
      </div>
    );
  }

  return children;
}
