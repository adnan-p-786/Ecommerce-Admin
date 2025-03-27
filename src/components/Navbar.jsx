import React from 'react'
import profileImg from '../assets/profile.png'

function Navbar() {
    return (
        <nav className="px-12 flex justify-between bg-white py-4 ring-1 ring-offset-slate-900 relative" role="navigation">
        <div>
          <h1 className="text-4xl font-bold text-orange-400">Logo</h1>
        </div>
        <div className="uppercase bold-22 m-auto h-10  justify-center items-center flex text-white bg-orange-400  rounded-md tracking-widest line-clamp-1 sm:px-2 xs:px-1 hover:bg-orange-500 transition-all duration-200">
          <h1 className='px-5 text-2xl font-bold' >Admin panel</h1>
        </div>
        <div>
          <img src={profileImg} alt="User Profile" className="h-12 w-12 rounded-full" />
        </div>
      </nav>
      
    )
}

export default Navbar