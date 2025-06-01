import heroImg from "app/assets/hero-img.png";
import Button from "./Button";

function Hero() {
  return (
       <section>
      <div className="container gap-12 px-5 md:px-10 lg:px-16 mt-20 py-18 mx-auto md:flex md:justify-between">
              <div className="flex-1/4 space-y-4 my-auto">
                <h1 className="font-aileron text-header3 text-center md:text-start md:text-header2 lg:text-header1 font-black text-[#0A2540]">Empowering Your Business with Innovation</h1>
                <h2 className="text-sm lg:text-sub-title2 text-center md:text-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis quaerat deserunt sapiente porro quas itaque, magnam consequuntur dolor corrupti ipsa.</h2>
                <div className="mx-auto flex justify-center items-center md:block">
                    <Button>Discover Our Works</Button>
                </div>

              </div>
              <div className="flex-1 flex justify-center items-center my-10 md:my-0">
                     <img src={heroImg} className="w-3/4 md:w-max" alt="" />
              </div>
      </div>
    </section>
  )
}

export default Hero