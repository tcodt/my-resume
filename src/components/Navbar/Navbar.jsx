import { Link } from "react-router-dom";
import "./Navbar.css";
import { useEffect, useState } from "react";
import "animate.css";
import { FaHouse } from "react-icons/fa6";
import { MdContactPhone, MdOutlineImportContacts } from "react-icons/md";

export default function Navbar() {
  const [animate, setAnimate] = useState("");

  useEffect(() => {
    setAnimate("animate__animated animate__bounceInLeft");
  }, []);

  return (
    <header className={animate}>
      <nav>
        <ul className="flex items-center gap-8 p-4">
          <li>
            <Link
              to="/"
              className="text-blue-400 text-3xl font-bold drop-shadow-md shadow-sky-500 [text-shadow:_0_4px_8px_rgba(14_165_223_/_0.5)]"
            >
              T<span className="text-sky-400">C</span>O
              <span className="text-sky-400">D</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-white text-lg font-medium custom-hover-menu flex items-center gap-2"
            >
              خانه <FaHouse size={20} />
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white text-lg font-medium custom-hover-menu flex items-center gap-2"
            >
              درباره من <MdOutlineImportContacts size={20} />
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white text-lg font-medium custom-hover-menu flex items-center gap-2"
            >
              ارتباط با من <MdContactPhone size={20} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
