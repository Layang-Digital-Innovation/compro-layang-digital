import React from "react";
import Button from "./Button";
import portfolio1 from "app/assets/Portfolio 1 - Timelesstype.png";
import portfolio2 from "app/assets/Portfolio 2 - LMS Univesitas BTH.png";
import portfolio3 from "app/assets/Portfolio 3 - Functional Prehab.png";
import portfolio4 from "app/assets/Portfolio 4 - Breaker Creative.png";
import portfolio5 from "app/assets/Portfolio 5 - Aplikasi Lifeline.png";
import portfolio6 from "app/assets/Portfolio 6 - Isuzu Dealer Tasikmalaya.png";
import { useTranslation } from "react-i18next";

export default function Projects() {

   const { t } = useTranslation();

  const projects = t("projects", { returnObjects: true }) as {
    header: string;
    subtitle: string;
    project: {
      title: string;
      description: string;
    }[];
    button: string;
  };

  const images = [
    portfolio1,
    portfolio2,
    portfolio3,
    portfolio4,
    portfolio5,
    portfolio6,
  ];

  const projectList = projects.project.map((item, index) => ({
    ...item,
    img: images[index] || "", // fallback jika jumlah data tidak cocok
  }));

  return (
    <section id="project" className="bg-[#FDFDFD]">
      <div className="container px-5 md:px-10 lg:px-16 mx-auto py-14">
        <h1 className="text-center text-header3 font-aileron font-semibold">
          {t("projects.header")}
        </h1>
        <p className="text-center">
         {t("projects.subtitle")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-8">
          {projectList.map((item, index) => (
            <div
              key={index}
              className="bg-white group relative p-2 drop-shadow-md rounded-lg"
            >
              <div className="h-[200px] bg-[#F4F8FB] overflow-hidden relative rounded-lg">
                <img
                  src={item.img}
                  className="absolute -right-12 top-12 rounded-lg shadow-2xl group-hover:-rotate-2 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:scale-[1.08] transition"
                  alt={item.title}
                />
              </div>

              <div className="py-6 px-4">
                <h1 className="py-2 text-sub-title1 font-bold font-aileron">{item.title}</h1>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button>{t("projects.button")}</Button>
        </div>
      </div>
    </section>
  );
}
