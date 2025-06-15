import React from "react";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";

import dedicatedTeam from "app/assets/dedication.png";
import projectBased from "app/assets/project.png";
import onDemand from "app/assets/demand.png";

const CollaborationCard = ({
  icon,
  title,
  description,
  items,
  bgColor,
}: {
  icon: string;
  title: string;
  description: string;
  items: string[];
  bgColor: string;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
    <div className={`mb-4 w-12 p-2 rounded-lg ${bgColor}`}>
      <img src={icon} alt={`${title} icon`} />
    </div>
    <h2 className="text-sub-title1 font-semibold mb-2">{title}</h2>
    <p className="text-sm text-gray-600 mb-4">{description}</p>
    <ul className="text-sm text-gray-600 mb-6 space-y-1 flex flex-col">
      {items.map((item, idx) => (
        <li key={idx} className="flex gap-2">
          <Check className="text-blue-500 w-4" />
          <span className="w-full"> {item}</span>
         
        </li>
      ))}
    </ul>
  </div>
);

export const CollaborationModel = () => {
  const { t } = useTranslation();

  const collaboration = t("collaborationModel", { returnObjects: true }) as {
    header: string;
    subtitle: string;
    model: {
      name: string;
      description: string;
      details: string[];
    }[];
  };

  const modelIcons = [dedicatedTeam, projectBased, onDemand];
  const bgColors = ["bg-green-100", "bg-blue-100", "bg-red-100"];

  return (
    <section id="about">
      <div className="container px-5 md:px-10 lg:px-16 mx-auto py-16">
        <div className="text-center mb-12">
          <h1 className="text-header4 font-aileron font-semibold">
            {collaboration.header}
          </h1>
          <p>{collaboration.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collaboration.model.map((model, index) => (
            <CollaborationCard
              key={index}
              icon={modelIcons[index]}
              title={model.name}
              description={model.description}
              items={model.details}
              bgColor={bgColors[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
