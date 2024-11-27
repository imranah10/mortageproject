import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <section className="bg-gray-900 py-20 px-10">
                <div className="text-4xl font-bold mb-10">CONTACTS</div>
                <div className="grid grid-cols-2 gap-10">
                    <div>
                        <form>
                            <div className="mb-4">
                                <input type="text" placeholder="Name" className="w-full p-4 bg-gray-800 text-white" />
                            </div>
                            <div className="mb-4">
                                <input type="email" placeholder="Email" className="w-full p-4 bg-gray-800 text-white" />
                            </div>
                            <div className="mb-4">
                                <input type="tel" placeholder="Telephone" className="w-full p-4 bg-gray-800 text-white" />
                            </div>
                            <div className="mb-4">
                                <textarea placeholder="Message" className="w-full p-4 bg-gray-800 text-white"></textarea>
                            </div>
                            <button type="submit" className="px-6 py-2 bg-yellow-600 text-black font-bold rounded">SEND</button>
                        </form>
                    </div>
                    <div>
                        <div className="mb-4">
                            <i className="fas fa-phone-alt"></i> 000-XXX14120 / 000-XXXX4144
                        </div>
                        <div className="mb-4">
                            <i className="fas fa-envelope"></i> info@mymail.com
                        </div>
                        <div className="mb-4">
                            <i className="fas fa-map-marker-alt"></i> 8th floor, The Affairs, XYZ Beach road, Dreamland, Fantasy Land, Unknown - 000 000.
                        </div>
                        <div className="space-x-4">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-telegram"></i>
                            <i className="fab fa-instagram"></i>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default ContactForm
