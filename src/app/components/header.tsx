import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <nav className="container flex items-center justify-between mx-auto h-H14">
      <h1 className="text-lg font-bold">
        <Link href="/">Home</Link>
      </h1>
      <div className="flex gap-2">
        <h1 className="text-lg font-bold">
          <a href="/reliability">Reliability</a>
        </h1>
        <h1 className="text-lg font-bold">
          <a href="/performance">Performance</a>
        </h1>
      </div>
    </nav>
  )
}

export default Header;