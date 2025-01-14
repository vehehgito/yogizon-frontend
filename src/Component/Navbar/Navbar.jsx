
function Navbar() {
  return (
    <div>
      <header className="fixed top-0 left-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
        <nav
          className="mt-6 relative max-w-[85rem] w-full bg-white border rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto  border-gray-700"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <a
              className="flex-none text-xl font-semibold text-gray-800 hover:text-gray-900"
              href="#"
              aria-label="Brand"
            >
              YogiZon
            </a>
            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle w-8 h-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
              <a
                className="font-medium md:py-6 text-[#ffb606]"
                href="#"
                aria-current="page"
              >
                Home
              </a>
              <a
                className="font-medium md:py-6 text-gray-400 hover:text-gray-500"
                href="#"
              >
                Courses
              </a>
              <a
                className="font-medium md:py-6 text-gray-400 hover:text-gray-500"
                href="#"
              >
                Schedule
              </a>
              <a
                className="font-medium md:py-6 text-gray-400 hover:text-gray-500"
                href="#"
              >
                Our Team
              </a>
              <a
                className="font-medium md:py-6 text-gray-400 hover:text-gray-500"
                href="#"
              >
                Shop
              </a>
              <a
                className="font-medium md:py-6 text-gray-400 hover:text-gray-500"
                href="#"
              >
                Volunteer with Us
              </a>
              <a
                className="font-medium md:py-6 text-gray-400 hover:text-gray-500"
                href="#"
              >
                Contact Us
              </a>

              <div className="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] md:[--trigger:hover] md:py-4">
                <button
                  type="button"
                  className="flex items-center w-full font-medium text-gray-400 hover:text-gray-500 "
                >
                  More
                  <svg
                    className="ms-2 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 bg-white md:shadow-md rounded-lg p-2  md:border border-gray-700 divide-gray-700 before:absolute top-full before:-top-5 before:start-0 before:w-full before:h-5">
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-gray-700 hover:text-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-600"
                    href="#"
                  >
                    About
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-gray-700 hover:text-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-600"
                    href="#"
                  >
                    Blog
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-gray-700 hover:text-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-600"
                    href="#"
                  >
                    Success Stories
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-gray-700 hover:text-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-600"
                    href="#"
                  >
                    Yoga Retreats
                  </a>
                </div>
              </div>

              <a
                className="flex items-center gap-x-2 font-medium md:border-s md:border-gray-300 md:my-6 md:ps-6 border-gray-700 text-gray-400 hover:text-blue-500"
                href="#"
              >
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Log in
              </a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
