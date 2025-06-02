import React from 'react'
import Button from './Button'
import article1 from "app/assets/Online world-cuate.svg"
import article2 from "app/assets/Artificial intelligence-amico.svg"
import article3 from "app/assets/teamwork high five-bro.svg"

export default function Article() {
  return (
          <section>
        <div className="container px-5 md:px-10 lg:px-16 mx-auto py-14">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-header4">Recent Article</h1>
            <Button>See More</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Article 1 */}
            <div className="border border-slate-300 bg-white rounded-md shadow-sm hover:shadow-md transition p-2">
              <img src={article1} alt="" />
              <div className="p-4">
                <p className="text-label1 text-gray-500 mb-1">May 12, 2025</p>
                <h2 className="text-sub-title1 font-semibold mb-2">
                  Embracing Digital Transformation in Healthcare
                </h2>
                <p className="text-label1 text-gray-600 mb-4">
                  Explore how technology is revolutionizing patient care and
                  healthcare systems.
                </p>
                <div>
                  <h3 className="text-body font-aileron font-semibold">
                    John Doe
                  </h3>
                  <p className="text-label1">Executive Officer</p>
                </div>
              </div>
            </div>

            {/* Article 2 */}
            <div className="border border-slate-300 bg-white rounded-md shadow-sm hover:shadow-md transition p-2">
              <img src={article2} alt="" />
              <div className="p-4">
                <p className="text-label1 text-gray-500 mb-1">April 28, 2025</p>

                <h2 className="text-sub-title1 font-semibold mb-2">
                  How AI is Redefining Business Strategies
                </h2>
                <p className="text-label1 text-gray-600 mb-4">
                  Artificial Intelligence isn't just a trend — it's reshaping
                  industries worldwide.
                </p>
                <div>
                  <h3 className="text-body font-aileron font-semibold">
                    Jane Smith
                  </h3>
                  <p className="text-label1">CTO</p>
                </div>
              </div>
            </div>

            {/* Article 3 */}
            <div className="border border-slate-300 bg-white rounded-md shadow-sm hover:shadow-md transition p-2">
              <img src={article3} alt="" />
              <div className="p-4">
                <p className="text-label1 text-gray-500 mb-1">April 10, 2025</p>
                <h2 className="text-sub-title1 font-semibold mb-2">
                  Building Resilient Teams in a Hybrid World
                </h2>
                <p className="text-label1 text-gray-600 mb-4">
                  Strategies to empower and connect remote and in-office
                  employees effectively.
                </p>
                <div>
                  <h3 className="text-body font-aileron font-semibold">
                    Ada Wong
                  </h3>
                  <p className="text-label1">HR Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
