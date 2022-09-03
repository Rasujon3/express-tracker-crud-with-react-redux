import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="App">
      <div className="header">
        <h1>Expense Tracker</h1>
      </div>
      {/* Main */}
      <div className="main">
        <div className="container">{children}</div>
      </div>
      {/* Footer */}
      <div className="footer">
        &copy;{new Date().getFullYear()} Ruhul Amin Sujon
      </div>
    </div>
  );
};

export default Layout;
