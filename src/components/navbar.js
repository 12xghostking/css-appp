import React from 'react';
import Link from 'next/link';

const navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
        <a className="font-semibold text-xl tracking-tight">My Website</a>
        </Link>
      </div>
     
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link href="/about">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              About
            </a>
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default navbar;