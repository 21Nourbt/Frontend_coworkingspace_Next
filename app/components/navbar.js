"use client";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";

export default function Navbar() {
  const navigation = ["Home", "Services", "Portfolio", "Contact"];

  return (
    <div className="w-full bg-white shadow-sm">
      {/* Navbar container with adjustable height */}
      <nav  className="container mx-auto relative flex flex-wrap items-center justify-center py-3 lg:justify-between xl:px-0">
        {/* Logo section */}
        <Disclosure>
          {({ open }) => (
            <div>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                {/* Logo with adjustable size */}
                <Link
                  href="/"
                  className="flex items-center space-x-0.5 text-xl font-medium text-gray-900"
                >
                  <span className="font-bold">Elaco</span>
                  <span className="text-blue-600">workingSpace</span>
                </Link>

                {/* Mobile menu button */}
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-blue-950 rounded-md lg:hidden hover:text-amber-500 focus:outline-none"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open ? (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    ) : (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                {/* Mobile menu */}
                <Disclosure.Panel className="flex flex-wrap w-full my-4 lg:hidden">
                  {navigation.map((item, index) => (
                    <Link 
                      key={index} 
                      href="/" 
                      className="px-4 py-2 text-md font-medium text-blue-950 hover:text-amber-500 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                  <div className="flex w-full mt-3 space-x-3">
                    <Link 
                      href="/login" 
                      className="w-1/2 px-4 py-2 text-center text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      Login
                    </Link>
                    <Link 
                      href="/signup" 
                      className="w-1/2 px-4 py-2 text-center text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Sign Up
                    </Link>
                  </div>
                </Disclosure.Panel>
              </div>
            </div>
          )}
        </Disclosure>

        {/* Desktop menu */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="flex items-center space-x-1">
            {navigation.map((menu, index) => (
              <li key={index}>
                <Link 
                  href="/" 
                  className="px-4 py-2 text-md font-medium text-blue-950 rounded-md hover:text-amber-500 hover:bg-gray-50 transition-colors"
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <Link 
            href="/login" 
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            Login
          </Link>
          <Link 
            href="/signup" 
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors shadow-sm"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </div>
  );
}