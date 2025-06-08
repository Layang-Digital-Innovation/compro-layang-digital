import React from "react";
import { Check } from "lucide-react";
import dedicatedTeam from "app/assets/dedication.png";
import projectBased from "app/assets/project.png";
import onDemand from "app/assets/demand.png";

export const CollaborationModel = () => {
  return (
    <div>
      <div className="container px-5 md:px-10 lg:px-16 mx-auto py-16">
        <div className=" text-center mb-12">
          <h1 className="text-header4 font-aileron font-semibold">
            Collaboration Model
          </h1>
          <p>Flexible Ways to Work Together</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Dedicated Team */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="mb-4 w-12 bg-green-100 p-2 rounded-lg">
              <img src={dedicatedTeam} alt="" />
            </div>
            <h2 className="text-sub-title1 font-semibold mb-2">
              Dedicated Team
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Ideal for long-term partnerships. Our team becomes an extension of
              yours — fully dedicated to your product with continuous
              collaboration.
            </p>
            <ul className="text-sm text-gray-600 mb-6 space-y-1">
              <li className="flex gap-2"><span><Check className="text-blue-500 w-4"/></span>Seamless integration with your in-house team</li>
              <li className="flex gap-2"><span><Check className="text-blue-500 w-4"/></span>High scalability and flexibility</li>
              <li className="flex gap-2"><span><Check className="text-blue-500 w-4"/></span>Full control over project direction</li>
              <li className="flex gap-2"><span><Check className="text-blue-500 w-4"/></span>Efficient communication and alignment</li>
            </ul>
          </div>

          {/* Project Based */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="mb-4 w-12 bg-blue-100 p-2 rounded-lg">
              <img src={projectBased} alt="" />
            </div>
            <h2 className="text-sub-title1 font-semibold mb-2">
              Project Based
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Best suited for clearly defined goals and timelines. You get a
              fixed budget, a focused scope, and a guaranteed delivery date.
            </p>
            <ul className="text-sm text-gray-600 mb-6 space-y-1">
              <li className="flex gap-2"><span><Check className="text-blue-500 w-4"/></span>Clear milestones and deliverables</li>
              <li className="flex gap-2"><span><Check className="text-blue-500 w-4"/></span>Low risk with defined costs</li>
              <li className="flex gap-2"><span><Check className="text-blue-500 w-4"/></span>Ideal for MVPs or redesigns</li>
              <li className="flex gap-2"><span><Check className="text-blue-500 w-4"/></span>Fast and efficient delivery</li>
            </ul>
          </div>

          {/* On Demand */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="mb-4 w-12 bg-red-100 p-2 rounded-lg">
              <img src={onDemand} alt="" />
            </div>
            <h2 className="text-sub-title1 font-semibold mb-2">On Demand</h2>
            <p className="text-sm text-gray-600 mb-4">
              Flexible access to our expertise as needed. Great for short-term
              needs, urgent tasks, or augmenting your existing team temporarily.
            </p>
            <ul className="text-sm text-gray-600  mb-6 space-y-1">
              <li className="flex gap-2"><span><Check className="text-blue-500 w-4"/></span>Pay only for what you need</li>
              <li className="flex gap-2"><span><Check className="text-blue-500 w-4"/></span>Quick response to urgent requirements</li>
              <li className="flex gap-2"><span><Check className="text-blue-500 w-4"/></span>Access to multi-disciplinary expertise</li>
              <li className="flex gap-2"><span><Check className="text-blue-500 w-4"/></span>No long-term commitment required</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
