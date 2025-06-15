import { useState } from "react";
import { useLocation, Link } from "react-router";
import { Menu, X } from "lucide-react";
import logoLayang from "app/assets/logo-layang.png";
import Button from "./Button";
import { AnimatePresence, motion } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuLink = [
    { name: "Home", link: "/" },
    { name: "Service", link: "#services" },
    { name: "About", link: "#about" },
    { name: "Blog", link: "#blog" },
  ];

  return (
    <div className="py-4 top-0 left-0 w-full fixed flex justify-center items-center bg-white/80 backdrop-blur-sm z-50">
      <div className="container px-5 md:px-10 lg:px-16 flex justify-between items-center">
        {/* Logo */}
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

      

        {/* Contact Button (Desktop) */}
        <div className="flex items-center gap-4">
          
       <div className="hidden md:flex">
          <a href="https://api.whatsapp.com/send?phone=6285182322580">
            <Button>Contact Us</Button>
          </a>
        </div>
          <LanguageSwitcher/>
        </div>
 

        {/* Hamburger Button (Mobile) */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black">
            <div className="relative w-8 h-5 flex items-center">
              <span
                className={`absolute h-[3px] w-[80%] bg-black rounded transition-all duration-300 ease-[cubic-bezier(0.075,0.82,0.165,1] ${
                  isOpen ? "rotate-45 w-[80%]" : "-translate-y-[4px]"
                }`}
              ></span>
              <span
                className={`absolute   h-[3px]  bg-black rounded transition-all duration-300 ease-[cubic-bezier(0.075,0.82,0.165,1] ${
                  isOpen ? "-rotate-45 w-[80%]" : "translate-y-[4px] w-full"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
       <AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="md:hidden absolute top-[70px] left-0 w-full bg-white px-5 pb-4 shadow-md"
    >
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
              <Link to={item.link} onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>
            </li>
          );
        })}
        <li>
          <a href="https://api.whatsapp.com/send?phone=6285182322580">
            <Button className="w-full">Contact Us</Button>
          </a>
        </li>
      </ul>
    </motion.div>
  )}
</AnimatePresence>
      </div>
    </div>
  );
}

export default Navbar;
