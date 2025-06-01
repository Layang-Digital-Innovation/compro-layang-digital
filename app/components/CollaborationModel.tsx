import React from 'react'

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
              <h2 className="text-sub-title1 font-semibold mb-2">
                Dedicated Team
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Ideal for long-term partnerships. Our team becomes an extension
                of yours — fully dedicated to your product with continuous
                collaboration.
              </p>
              <ul className="text-sm text-gray-600 list-disc list-inside mb-6 space-y-1">
                <li>Seamless integration with your in-house team</li>
                <li>High scalability and flexibility</li>
                <li>Full control over project direction</li>
                <li>Efficient communication and alignment</li>
              </ul>
              <div className="text-blue-600 font-semibold text-sm hover:underline cursor-pointer">
                Learn more <span className="inline-block ml-1">→</span>
              </div>
            </div>

            {/* Project Based */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h2 className="text-sub-title1 font-semibold mb-2">
                Project Based
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Best suited for clearly defined goals and timelines. You get a
                fixed budget, a focused scope, and a guaranteed delivery date.
              </p>
              <ul className="text-sm text-gray-600 list-disc list-inside mb-6 space-y-1">
                <li>Clear milestones and deliverables</li>
                <li>Low risk with defined costs</li>
                <li>Ideal for MVPs or redesigns</li>
                <li>Fast and efficient delivery</li>
              </ul>
              <div className="text-blue-600 font-semibold text-sm hover:underline cursor-pointer">
                Learn more <span className="inline-block ml-1">→</span>
              </div>
            </div>

            {/* On Demand */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h2 className="text-sub-title1 font-semibold mb-2">On Demand</h2>
              <p className="text-sm text-gray-600 mb-4">
                Flexible access to our expertise as needed. Great for short-term
                needs, urgent tasks, or augmenting your existing team
                temporarily.
              </p>
              <ul className="text-sm text-gray-600 list-disc list-inside mb-6 space-y-1">
                <li>Pay only for what you need</li>
                <li>Quick response to urgent requirements</li>
                <li>Access to multi-disciplinary expertise</li>
                <li>No long-term commitment required</li>
              </ul>
              <div className="text-blue-600 font-semibold text-sm hover:underline cursor-pointer">
                Learn more <span className="inline-block ml-1">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
