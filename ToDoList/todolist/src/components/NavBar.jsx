import React from 'react'

const NavBar = () => {
  return (
    <nav className="flex justify-between bg-slate-600 text-white py-2">
        <div className="logo">
            <span className="font-bold text-xl mx-8">iTask</span>
        </div>
        <ul className="flex gap-8 mx-9">
            <li className="cursor-pointer hover:font-bold transition-all">
            <a href="App.jsx">
              Home</a></li>
            <li className="cursor-pointer hover:font-bold transition-all">Tasks</li>
        </ul>
    </nav>
  )
}

export default NavBar
