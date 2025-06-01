import React from 'react'
import Button from './Button'

export default function CallToAction() {
  return (
        <section className="bg-[#FDFDFD]">
            <div className="container px-5 md:px-10 lg:px-16 mx-auto py-14 flex items-center">
              <div className="space-y-2">
                <h1 className="text-header2 font-bold font-aileron">Have a Vision? Let’s Build It Together</h1>
                <p>
                  Reach out and discover how we can turn your business goals into
                  digital success.
                </p>
                <Button>Let's Talk</Button>
              </div>
             
            </div>
          </section>
  )
}
