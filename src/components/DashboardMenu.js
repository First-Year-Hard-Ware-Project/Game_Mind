import React from "react";
import "../styles/DashboardMenu.css";

export default function DashboardMenu() {
  // Retrieve the name from local storage, default to "John" if not found
  const userName = localStorage.getItem("name") || "John";

  return (
    <>
      <div className="rectangle" />
      <div className="text-wrapper-8">Hello, <span>{userName}</span>!</div>
      <p className="text-wrapper-9">Nice to see you again</p>
      <div className="text-wrapper-10">Friday</div>
      <p className="element-jan">
        <span className="text-wrapper-11">22</span>
        <span className="text-wrapper-11">nd</span>
        <span className="text-wrapper-11"> Jan 2023</span>
      </p>
      <div className="text-wrapper-12">03:24PM</div>
    </>
  );
}
