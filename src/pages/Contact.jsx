import React from 'react';

function Contact() {
  return (
    <div className="w-full max-w-[1500px]  bg-[#F8F8F8] mx-auto font-inter text-zinc-900 font-inter pb-12">
      
      {/* Top Heading */}
      <h1 className="text-6xl sm:text-7xl lg:text-[120px] font-light tracking-tight mb-16 leading-none">
        Contact me'
      </h1>

      {/* Main Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        {/* Left Side: Location & Office Hours */}
        <div className="lg:col-span-5 flex flex-col space-y-12 text-lg text-zinc-800">
          <div className="space-y-1 font-light">
            <p>Kerala, Wayanad,</p>
            <p>Muttil</p>
          </div>

        </div>

        {/* Right Side: Form with requested inputs */}
        <div className="lg:col-span-7">
          <form 
            action="https://api.web3forms.com/submit" 
            method="POST"
            className="space-y-8"
          >
            {/* Web3Forms Access Key & Target Email */}
            <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
            <input type="hidden" name="to" value="aanzil875@gmail.com" />

            {/* First Name & Last Name Fields */}
            <div className="space-y-2">
              <label className="block text-sm font-normal text-zinc-800">Name </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <input 
                    type="text" 
                    name="firstName" 
                    required 
                    placeholder="First Name" 
                    className="w-full bg-transparent border-b border-zinc-900 pb-2 text-sm focus:outline-none focus:border-zinc-900 transition-colors placeholder:text-zinc-400" 
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    name="lastName" 
                    placeholder="Last Name" 
                    className="w-full bg-transparent border-b border-zinc-900 pb-2 text-sm focus:outline-none focus:border-zinc-900 transition-colors placeholder:text-zinc-400" 
                  />
                </div>
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-sm font-normal text-zinc-800">Email </label>
              <input 
                type="email" 
                name="email" 
                required 
                placeholder="your@email.com"
                className="w-full bg-transparent border-b border-zinc-900 pb-2 text-sm focus:outline-none focus:border-zinc-900 transition-colors placeholder:text-zinc-400" 
              />
            </div>

            {/* Subject Field */}
            <div className="space-y-2">
              <label className="block text-sm font-normal text-zinc-800">Subject </label>
              <input 
                type="text" 
                name="subject" 
                required 
                placeholder="Your Subject"
                className="w-full bg-transparent border-b border-zinc-900 pb-2 text-sm focus:outline-none focus:border-zinc-900 transition-colors placeholder:text-zinc-400" 
              />
            </div>

            {/* Message / Project description Field */}
            <div className="space-y-2 pt-2">
              <label className="block text-sm font-normal text-zinc-800">Message </label>
              <textarea 
                name="message" 
                required
                rows="2" 
                placeholder="Write your message here..."
                className="w-full bg-transparent border-b border-zinc-900 pb-2 text-sm focus:outline-none focus:border-zinc-900 resize-none transition-colors placeholder:text-zinc-400"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button 
                type="submit" 
                className="bg-black text-white px-7 py-3 rounded-full text-xs font-medium tracking-wide hover:bg-zinc-800 transition-all cursor-pointer shadow-sm active:scale-95"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

      </div>

      {/* Bottom Section: Email, Phone */}
      <div className="mt-28 pt-12 border-t border-zinc-200 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
        <div>
          <a href="mailto:aanzil875@gmail.com" className="text-1xl sm:text-2xl lg:text-3xl font-normal tracking-tight hover:opacity-75 transition-opacity block text-zinc-900">
            aanzil875@gmail.com
          </a>
        </div>
        <div>
          <p className="text-1xl sm:text-2xl lg:text-2xl font-normal tracking-tight text-zinc-900">
            (+91) 730 625 5024
          </p>
        </div>
      </div>

      {/* Sub-footer details */}
      <div className="mt-16 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm font-normal text-zinc-700 gap-4">
        <div className="flex items-center gap-1">
            <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/marker--v1.png" alt="marker--v1"/>
          <p>Kerala, Wayanad,</p>
          <p>Muttil</p>
        </div>
        
       
      </div>

    </div>
  );
}

export default Contact;