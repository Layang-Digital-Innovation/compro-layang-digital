import Button from './Button'
import CTAImage from "app/assets/Consulting-bro.svg"
import { useTranslation } from 'react-i18next';
export default function CallToAction() {

  const {t} = useTranslation();

  return (
        <section className="bg-[#FDFDFD]">
            <div className="container px-5 md:px-10 lg:px-16 mx-auto py-14 flex flex-col md:flex-row items-center justify-between">
            
              <div className=" w-full md:w-[50%] leading-tight">
                <h1 className="text-header2 font-bold font-aileron">{t("callToAction.header1")}</h1>
                <p className='text-header2 font-bold font-aileron'>{t("callToAction.header2")}</p>
                <p className='py-4'>
                  {t("callToAction.subtitle")}
                </p>
                <a href="https://api.whatsapp.com/send?phone=6285182322580"><Button>{t("callToAction.button")}</Button></a>
              </div>
                <img src={CTAImage} className='w-[400px] mt-8 md:mt-0' alt="" />
            </div>
          </section>
  )
}
