import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
console.log(links)

  const linkElements = links.map((link) => 
  <a key = {link} href = {`#${link}`}>{link}</a>
    // <a key = {link} href = {'#'+{link}}>{link}</a>
  )
 
  return <nav>
    {linkElements}
  </nav>;
}

export default NavBar;
