import Link from "next/link";
import { useState } from "react";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="mt-4">
      <div className="flex flex-wrap items-center justify-between mx-auto max-w-7xl md:flex-no-wrap">
        <div className="flex items-center">
          <span className="w-10 mr-3">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              id="library"
              className="w-8 h-8 text-cool-gray-900"
            >
              <path
                fillRule="evenodd"
                d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>

          <Link href="/">
            <a className="font-mono text-xl font-bold text-cool-gray-900">
              Tinylibs
            </a>
          </Link>
        </div>

        <button
          className="flex py-2 border border-white rounded items-centerpx-3 text-cool-gray-900 md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <ul
          className={`${
            isExpanded ? `block` : `hidden`
          } md:flex flex-col md:flex-row md:items-center md:justify-center text-md w-full md:w-auto`}
        >
          {[
            { title: "Home", route: "/" },
            { title: "About", route: "/about" },
          ].map((navigationItem) => (
            <li className="mt-3 md:mt-0 md:ml-6" key={navigationItem.title}>
              <Link href={navigationItem.route}>
                <a className="block text-cool-gray-900">
                  {navigationItem.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
