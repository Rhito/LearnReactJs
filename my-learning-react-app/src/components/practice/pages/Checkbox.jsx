import React, { useState } from "react";

export default function Checkbox() {
  const [preferences, setPreferences] = useState({
    email: false,
    sms: false,
    push: false,
  });

  function handleChange(e) {
    setPreferences({
      ...preferences,
      [e.target.name]: e.target.checked,
    });
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="email"
          checked={preferences.email}
          onChange={handleChange}
        />
        Email
      </label>
      <label>
        <input
          type="checkbox"
          name="sms"
          checked={preferences.sms}
          onChange={handleChange}
        />
        SMS
      </label>
    </div>
  );
}
