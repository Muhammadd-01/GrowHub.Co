import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-white shadow-md mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          <div className="px-5 py-2">
            <Link to="/about" className="text-base text-gray-500 hover:text-gray-900">
              About
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link to="/blog" className="text-base text-gray-500 hover:text-gray-900">
              Blog
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link to="/career" className="text-base text-gray-500 hover:text-gray-900">
              Careers
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link to="/contact" className="text-base text-gray-500 hover:text-gray-900">
              Contact
            </Link>
          </div>
        </nav>
        <p className="mt-8 text-center text-base text-gray-400">&copy; 2023 GrowHub Solutions. All rights reserved.</p>
      </div>
    </footer>
  )
}

