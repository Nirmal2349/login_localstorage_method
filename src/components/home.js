import React from "react";

export function Home() {
  const handleLogout = () => {
    localStorage.removeItem("signup");
    window.location.reload();
  };
  const handleDelete = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      <h1>Welcome {localStorage.getItem("username")}</h1>
      <button onClick={handleLogout} className="logout_btw">
        Logout
      </button>
      <button onClick={handleDelete} className="delete_btw">
        Delete account
      </button>
    </div>
  );
}
