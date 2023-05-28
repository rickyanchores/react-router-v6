import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const navList = [
    {
      name: "Home",
      href: "/"
    },
    {
      name: "BookList",
      href: "/booklist"
    },
    {
      name: "About",
      href: "/about"
    },
    {
      name: "FAQ",
      href: "/faq"
    }
  ];

  return (
    <div className="Nav">
      <h3>Nav</h3>
      <ul className="navLinks">
        {navList.map((link) => (
          <Link className="link" to={link.href}>
            {link.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
