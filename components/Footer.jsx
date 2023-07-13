import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="absolute bottom-0 text-center bg-yellow-400 w-full h-14 font-medium p-4">
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
