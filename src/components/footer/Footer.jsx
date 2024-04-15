import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer-container">
      © {new Date().getFullYear()} Galileo Protocol. All rights reserved.
    </footer>
  );
}
