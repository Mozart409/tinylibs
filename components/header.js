import Link from 'next/link'
import { useState } from 'react'

function Header() {
  const [ isExpanded, toggleExpansion ] = useState(false)

  return (
    <header className="mt-4">
      <div className="flex flex-wrap items-center justify-between mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl md:flex-no-wrap">
        <div className="flex items-center">
          <span className="w-10 mr-3">
            <img src="/icon.svg" className="" />
          </span>

          <Link href="/">
            <a className="font-mono text-xl font-bold text-cool-gray-900">Tinylibs</a>
          </Link>
        </div>

        <button
          className="flex py-2 border border-white rounded items-centerpx-3 text-cool-gray-900 md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <ul
          className={`${isExpanded
            ? `block`
            : `hidden`} md:flex flex-col md:flex-row md:items-center md:justify-center text-md w-full md:w-auto`}
        >
          {[ { title: 'Home', route: '/' } ].map((navigationItem) => (
            <li className="mt-3 md:mt-0 md:ml-6" key={navigationItem.title}>
              <Link href={navigationItem.route}>
                <a className="block text-cool-gray-900">{navigationItem.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
