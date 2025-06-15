import Button from './Button'

import logoLayang2 from "app/assets/logo-layang-2.png"
import faceBook from "app/assets/Facebook.png"
import instagram from "app/assets/instagram.png"
import youtube from "app/assets/Youtube.png"
import { Mail, Phone, Facebook, Instagram, Youtube } from "lucide-react";
import { useTranslation } from 'react-i18next'

export default function Footer() {

  const {t} = useTranslation();

  return (
          <section className="bg-[#53599A] text-white">
        <div className="container px-5 md:px-10 lg:px-16 mx-auto pt-14 pb-24">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="max-w-md">
              <h1 className="text-header2">{t("footer.header")}</h1>
              <p>
               {
                t("footer.subtitle")
               }
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:self-center justify-end gap-1 w-full md:w-1/2 py-8 md:py-0">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="border border-white max-w-full md:w-[60%] p-2 rounded-md"
              />
              <Button className="bg-[#986FB3] my-2 md:my-0 hover:bg-[#b283d1] md:max-w-fit w-[40%]">
                {t("footer.button")}
              </Button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
                      <div className="py-10 space-y-4">
            <img src={logoLayang2} className="w-40 mb-10" alt="" />
            <div className="flex items-center gap-2">
              <Mail/>
              <p>info@layangdigital.com</p>
            </div>
            <div className="flex items-center gap-2">
              <Phone/>
              <p>0851-8232-2580</p>
            </div>
          </div>
          <div className="grid grid-cols-3 py-10 gap-9 w-full max-w-md">
          <div className="w-fit">
            <h3 className="font-semibold">
              Site map
            </h3>
            <ul className="font-light">
              <li>Home</li>
              <li>Service</li>
              <li>About</li>
              <li>Blog</li>
              <li>Carreer</li>
            </ul>
          </div>
          <div className="w-fit">
            <h3 className="font-semibold">
              Social Media
            </h3>
            <ul className="font-light">
              <a href="https://www.facebook.com/Layangdigital/" target="_blank"><li>Facebook</li></a>
             <a href="https://www.youtube.com/@layangdigitalinnovation3011" target="_blank"><li>Youtube</li></a>
              <a href="https://www.instagram.com/layangdigital/" target="_blank"><li>Instagram</li></a>
            </ul>
          </div>
          <div className="w-fit">
            <h3 className="font-semibold">
              Legal
            </h3>
            <ul className="font-light">
              <li>Privacy & Policy</li>
            </ul>
          </div>
          </div>
          </div>
          <div className="h-[0.5px] bg-gray-100"></div>
          <div className="flex flex-col md:flex-row gap-2 justify-between py-2">
            <p className="text-label1"> © Layang Digital Innovation , 2025. All rights reserved</p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/layangdigital/" target="_blank"><Instagram className='text-[#a592b1]'/></a>
              <a href="https://www.facebook.com/Layangdigital/" target="_blank"><Facebook className='text-[#a592b1]'/></a>
              <a href="https://www.youtube.com/@layangdigitalinnovation3011" target="_blank"><Youtube className='text-[#a592b1]'/></a>
            </div>
          </div>
        </div>
      </section>
  )
}
