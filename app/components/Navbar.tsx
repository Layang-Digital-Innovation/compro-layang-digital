import { useState } from "react";
import { useLocation, Link } from "react-router";
import { Menu, X } from "lucide-react";
import logoLayang from "app/assets/logo-layang.png";
import Button from "./Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // << get current path

  const menuLink = [
    { name: "Home", link: "/" },
    { name: "Service", link: "/service" },
    { name: "About", link: "/about" },
    { name: "Blog", link: "/blog" },
    { name: "Career", link: "/career" },
  ];

  return (
    <div className="py-4 top-0 left-0 w-full fixed flex justify-center items-center bg-white/80 backdrop-blur-sm z-50">
      <div className="container px-5 md:px-10 lg:px-16 flex justify-between items-center">
        <img src={logoLayang} className="w-28 object-contain" alt="Logo" />

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-10 text-[#8D8E8F]">
            {menuLink.map((item, index) => {
              const isActive = location.pathname === item.link;
              return (
                <li
                  key={index}
                  className={`relative font-aileron font-semibold text-md transition ${
                    isActive ? "text-black" : "hover:text-black"
                  }`}
                >
                  <Link to={item.link}>{item.name}</Link>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-black"></span>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Contact Button */}
        <div className="hidden md:flex">
          <a href="https://api.whatsapp.com/send?phone=6282116925851"><Button>Contact Us</Button></a>
        </div>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[70px] w-full bg-white px-5 pb-4">
          <ul className="flex flex-col gap-4 text-[#8D8E8F] mt-4">
            {menuLink.map((item, index) => {
              const isActive = location.pathname === item.link;
              return (
                <li
                  key={index}
                  className={`font-aileron font-semibold text-md transition ${
                    isActive ? "text-black" : "hover:text-black"
                  }`}
                >
                  <Link to={item.link}>{item.name}</Link>
                </li>
              );
            })}
            <li>
              <Button className="w-full">Contact Us</Button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
