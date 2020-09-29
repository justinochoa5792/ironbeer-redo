import React from "react";
import { Link } from "react-router-dom";
import { HomeTwoTone } from "@ant-design/icons";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        {" "}
        <HomeTwoTone />
      </Link>
    </div>
  );
}
export default Header;
