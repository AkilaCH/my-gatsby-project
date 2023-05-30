import React from 'react'
import Navbar from './Navbar'
import '../style/global.css'

export default function Layout({children}) {
  return (
    <div className="layout">
      <Navbar />
      {/* Content goes here */}
        <div className="content">
          {children}
        </div>
        <footer>
          <p>Copyright 2023 Akila Hapuarachchi</p>
        </footer>
    </div>
  )
}
