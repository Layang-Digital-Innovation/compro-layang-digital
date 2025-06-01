import logo6 from "~/assets/Logo-Surveyor-Tasik.png"
import logo5 from "~/assets/logo-breaker-creative.png"
import logo4 from "~/assets/logo-functional-prehab.png"
import logo2 from "~/assets/logo-halo-optom.png"
import logo1 from "~/assets/logo-timelesstype.png"
import logo3 from "~/assets/logo-universitas-bth.png"

export default function Client() {

      const listImage = [logo1, logo2, logo3, logo4, logo5, logo6]

  return (
          <section className="bg-[#FDFDFD]">
        <div className="container py-10 px-5 md:px-10 lg:px-16 mx-auto">
          <h1 className="font-aileron text-header3 text-center font-bold">Trusted by Client Across Industries</h1>
          <p className="text-center text-sub-title2">Here are some of the companies that have trusted us with their digital journey.</p>
          <div className="flex flex-wrap pt-10 justify-center gap-10">
            {
              listImage.map((item, i) => (
                  <img src={item} key={i} className={` object-contain ${item === logo5 ? 'w-15' : 'w-20'}`} alt="" />
              ))
            }
          </div>
        </div>
      </section>
  )
}
