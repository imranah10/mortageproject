import React from 'react'

const Header = () => {
  return (
    <div>
       {/* <header className="relative">
        <img src="https://mecklenburgmortgage.com/wp-content/uploads/2022/12/mortgage-broker-1536x1024.jpeg" alt="Building with lights on" className="w-full h-screen object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-between">
            <div className="flex justify-between items-center p-4  ">
                <div className="text-2xl font-bold">AGRESSOV</div>
                <div className="space-x-4 ">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                </div>
            </div>
            <div className="text-center mb-20">
                <h1 className="text-5xl font-bold">WITH YOU. ALWAYS</h1>
                <button className="mt-4 px-6 py-2 bg-yellow-600 text-black font-bold rounded">Book now</button>
            </div>
            <div className="flex justify-between items-center p-4">
                <div>Dreamland, Abc State</div>
                <div>000 - XXX989XX / XXXX 91 9200</div>
                <div>info@mymail.com</div>
            </div>
        </div>
    </header> */}

<header className="relative">
        <img
          src="https://mecklenburgmortgage.com/wp-content/uploads/2022/12/mortgage-broker-1536x1024.jpeg"
          alt="Building with lights on"
          className="w-full h-screen object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-between">
          {/* Fixed Navbar */}
          <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-75 p-4 z-10">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold text-white">AGRESSOV</div>
              <div className="space-x-4 text-white">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <div className="text-center mb-20 my-52"> {/* Added margin-top to avoid overlap with navbar */}
            <h1 className="text-5xl font-bold text-white">WITH YOU. ALWAYS</h1>
            <button className="mt-4 px-6 py-2 bg-yellow-600 text-black font-bold rounded">
              Book now
            </button>
          </div>
          <div className="flex justify-between items-center p-4 text-white">
            <div>Dreamland, Abc State</div>
            <div>000 - XXX989XX / XXXX 91 9200</div>
            <div>info@mymail.com</div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
