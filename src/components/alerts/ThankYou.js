// react
import React from "react";
// react-router-dom
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <div>
      Thank you for submitting a missing item. We will research its safety and
      make sure it gets added to the database!
      <Link to="/">Go Home</Link>
    </div>
  );
}
