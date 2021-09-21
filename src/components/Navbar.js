import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/about">About Us</Link>
      </p>
      <p>
        <Link to="/contact">Contact Us</Link>
      </p>
      <p>
        <Link to="/feed">Feed</Link>
      </p>
    </>
  );
}
