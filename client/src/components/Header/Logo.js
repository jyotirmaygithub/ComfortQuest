import React from 'react'

export default function Logo() {
  return (
    <div>
      <a href="/" className="flex items-center gap-1">
          <img
            className="h-8 w-8 md:h-10 md:w-10"
            src="https://cdn-icons-png.flaticon.com/512/2111/2111320.png"
            alt=""
          />

          <span className="hidden text-2xl font-bold text-red-500 md:block">
            airbnb
          </span>
        </a>
    </div>
  )
}
