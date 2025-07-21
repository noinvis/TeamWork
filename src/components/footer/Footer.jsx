import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white px-6 py-12">
      <div className="w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4 text-[#000] text-[24px]">Funiro.</h2>
          <p className="text-gray-500 mt-[80px]">
            400 University Drive Suite 200 Coral Gables,
            <br />
            FL 33134 USA
          </p>
        </div>

        <div>
          <h3 className="text-gray-500 mb-2">Links</h3>
          <ul className="space-y-9 mt-6">
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
          <h3 className="text-gray-500 mb-2">Help</h3>
          <ul className="space-y-9 mt-6">
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
          <h3 className="text-gray-500 mb-2">Newsletter</h3>
          <div className="flex border-b border-gray-400">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-1 outline-none py-1 text-sm text-[#9f9f9f] placeholder-gray-400 bg-transparent"
            />
            <button className="text-sm font-semibold ml-2 text-[#000]">SUBSCRIBE</button>
          </div>
        </div>
      </div>

      <div className="w-[1300px] mx-auto mt-10 pt-4 text-sm text-[#000]">
        2023 funiro. All rights reserved
      </div>
    </footer>
  );
};

export default React.memo(Footer);
