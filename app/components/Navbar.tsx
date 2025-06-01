import logoLayang from "app/assets/logo-layang.png";
import Button from "./Button";

function Navbar() {

      const menuLink = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "Service",
      link: "#",
    },
    {
      name: "About",
      link: "#",
    },
    {
      name: "Blog",
      link: "#",
    },
    {
      name: "Career",
      link: "#",
    },
  ];

  return (
          <div className="py-4 top-0 left-0 w-full fixed flex justify-center-safe items-center-safe bg-white/80 backdrop-blur-sm z-50">
        <div className="container px-5 md:px-10 lg:px-16 flex justify-between">
          <img src={logoLayang} className="w-35 object-contain" alt="" />
          <nav className="flex justify-center">
            <ul className="flex items-center-safe justify-center gap-10 text-[#8D8E8F]">
              {menuLink.map((item, index) => (
                <li key={index} className="font-aileron font-semibold text-md">
                  {item.name}
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex justify-center items-center">
            <Button>
                Contact Us
            </Button>
          </div>   
        </div>
      </div>
  )
}

export default Navbar