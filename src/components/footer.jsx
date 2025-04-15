import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
<footer className="rounded-lg bg-[#292e43] mt-16 border-t border-white text-center">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <Link to="/" className="text-2xl font-bold text-white">
          BrandName
        </Link>
            <ul className="flex flex-wrap justify-center items-center my-6 sm:my-0 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <Link to="/product" className="hover:underline me-4 md:me-6">Product</Link>
                </li>
                <li>
                    <Link to="/pricing" className="hover:underline me-4 md:me-6">Pricing</Link>
                </li>
                <li>
                    <Link to="/contact" className="hover:underline me-4 md:me-6">Contact</Link>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2027 BrandName. All Rights Reserved.</span>
    </div>
</footer>
  )
}
