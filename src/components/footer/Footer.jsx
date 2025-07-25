import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white px-4 md:px-6 py-12">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4 text-[#000]">Funiro.</h2>
          <p className="text-gray-500 mt-6 md:mt-[80px] text-sm">
            400 University Drive Suite 200 Coral Gables,
            <br />
            FL 33134 USA
          </p>
        </div>

        <div>
          <h3 className="text-gray-500 mb-2 text-sm">Links</h3>
          <ul className="space-y-6 mt-4 text-sm">
            <li>
              <a href="#" className="font-medium hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="font-medium hover:underline">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="font-medium hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="font-medium hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-500 mb-2 text-sm">Help</h3>
          <ul className="space-y-6 mt-4 text-sm">
            <li>
              <a href="#" className="font-medium hover:underline">
                Payment Options
              </a>
            </li>
            <li>
              <a href="#" className="font-medium hover:underline">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="font-medium hover:underline">
                Privacy Policies
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-500 mb-2 text-sm">Newsletter</h3>
          <div className="flex border-b border-gray-400 mt-4 justify-between">
            <input
              type="email"
              placeholder="Email Address"
              className="outline-none py-1 text-sm text-[#9f9f9f]"
            />
            <button className="text-sm font-semibold max-[1070px]:hidden max-[760px]:block">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto mt-10 pt-4 text-sm text-center text-[#000]">
        2023 furniro. All rights reserved
      </div>
    </footer>
  );
};

export default React.memo(Footer);
