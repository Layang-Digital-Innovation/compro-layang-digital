import heroImg from "app/assets/Online world-pana.svg";
import Button from "./Button";

import { getInstance } from "~/middleware/i18next";
import { useTranslation } from "react-i18next";
import type { Route } from "../+types/root";

export async function loader({ context }: Route.LoaderArgs) {
  let i18next = getInstance(context);
  return { title: i18next.t("hero.title"), description: i18next.t("hero.subtitle") };
}

function Hero() {

  let {t} = useTranslation();
  return (
    <section>
      <div className="container gap-12 px-5 md:px-10 lg:px-16 mt-20 py-18 mx-auto md:flex md:justify-between">
        <div className="space-y-4 my-auto">
          <h1 className="font-aileron text-header3 text-center md:text-start md:text-header2 lg:text-header1 font-black text-[#0A2540]">
            {t("hero.title")}
          </h1>
          <h2 className="text-sm lg:text-sub-title2 text-center md:text-start">
            {t("hero.subtitle")}
          </h2>
          <div className="mx-auto flex justify-center items-center md:block">
            <a href="#project">
              <Button>{t("hero.cta")}</Button>
            </a>
            
          </div>
        </div>
        <div className="w-full flex justify-center items-center my-10 md:my-0">
          <img src={heroImg} className="w-full" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
