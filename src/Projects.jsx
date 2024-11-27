import React from 'react'

const Projects = () => {
  return (
    <div>
      <section className="py-20 px-10">
                <div className="text-4xl font-bold mb-10">PROJECTS</div>
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
                    {Array.from({ length: 4 }, (_, i) => (
                        <div key={i} className="relative">
                            <img src={`https://images.unsplash.com/photo-1560518883-ce09059eeffa?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9ydGdhZ2V8ZW58MHx8MHx8fDA%3D+${i + 1}`} alt={`Project ${i + 1}`} className="w-full h-full object-cover" />
                            <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 w-full">
                                <div className="text-xl font-bold">{`0${i + 1}`}</div>
                                <div>Square Project</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
    </div>
  )
}

export default Projects
