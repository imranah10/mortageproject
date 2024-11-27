import React from 'react'

const About = () => {
  return (
    <div>
      <section className="py-20 px-10">
                <div className="text-4xl font-bold mb-10">ABOUT US</div>
                <div className="flex">
                    <div className="w-1/2 pr-10">
                        <p className="mb-4">A Union of Agressov Group & Abbott Hotels. Both have been pioneers from almost 3 decades in Real Estate & Hospitality respectively. They have left a benchmark in their own fields & now have joined hands to make an alliance.</p>
                        <p className="mb-4">United Emperors is a perfect consolidation of Real Estate & Hospitality industry.</p>
                        <a href="#" className="text-yellow-600">Learn more <i className="fas fa-arrow-right"></i></a>
                    </div>
                    <div className="w-1/2">
                        <img src="https://img.freepik.com/free-photo/high-angle-beautiful-buildings-nighttime_23-2149444909.jpg" alt="Cityscape with tall buildings" className="w-full h-full object-cover" />
                    </div>
                </div>
            </section>

            {/* stats  */}


            <section className="bg-gray-900 py-20">
                <div className="flex justify-around text-center">
                    <div>
                        <i className="fas fa-smile text-4xl mb-4"></i>
                        <div className="text-2xl font-bold">1000</div>
                        <div>Room alloted</div>
                    </div>
                    <div>
                        <i className="fas fa-building text-4xl mb-4"></i>
                        <div className="text-2xl font-bold">12</div>
                        <div>Buildings</div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold">And your happiness. Priceless...</div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default About
