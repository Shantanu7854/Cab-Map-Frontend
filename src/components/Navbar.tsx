"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">CabMap</h1>
      <ul className="flex gap-6">
        <li>
          <Link href="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
        </li>
        <li>
          <Link href="/resolve" className="text-gray-700 hover:text-blue-600">
            Resolve Address
          </Link>
        </li>
        <li>
          <Link href="/book" className="text-gray-700 hover:text-blue-600">
            Book Cab
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
