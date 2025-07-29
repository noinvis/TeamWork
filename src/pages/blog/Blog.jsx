import React from "react";
import {
  userIcon,
  calendarIcon,
  woodIcon,
  searchIcon,
  blogImage,
  blogImage1,
  gb,
  post1,
  post2,
  post3,
  post4,
  post5,
} from "./import"; 
import CartProps from "../cart/cart-props/CartProps";
import SectionProps from "../cart/section-props/SectionProps";




function Blog() {
  return (
    <>
    <CartProps title={"Blog"} />
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2 space-y-10 flex flex-col items-center">
        {[
          {
            title: "Going all-in with millennial design",
            img: blogImage,
          },
          {
            title: "Exploring new ways of decorating",
            img: blogImage1,
          },
          {
            title: "Handmade pieces that took time to make",
            img: gb,
          },
        ].map((post, idx) => (
          <div key={idx} className="space-y-4 max-w-2xl">
            <img
              src={post.img}
              alt={post.title}
              className="rounded-lg w-full object-cover"
            />
            <div className="flex items-center gap-6 text-gray-600 text-sm">
              <span className="flex items-center gap-2">
                <img src={userIcon} alt="Admin" />
              </span>
              <span className="flex items-center gap-2">
                <img src={calendarIcon} alt="Date" />
              </span>
              <span className="flex items-center gap-2">
                <img src={woodIcon} alt="Category" />
              </span>
            </div>
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare
              aenean euismod elementum.
            </p>
            <a
              href="#"
              className="text-sm font-semibold underline underline-offset-4"
            >
              Read more
            </a>
          </div>
        ))}
      </div>

      <div className="space-y-10 flex flex-col items-center">
        <div className="relative w-full max-w-xs">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          <img
            src={searchIcon}
            alt="Search"
            className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2"
          />
        </div>

        <div className="w-full max-w-xs">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <ul className="space-y-4 text-gray-600">
            {[
              ["Crafts", 2],
              ["Design", 8],
              ["Handmade", 7],
              ["Interior", 1],
              ["Wood", 6],
            ].map(([name, count], idx) => (
              <li key={idx} className="flex justify-between w-full px-4">
                <span>{name}</span>
                <span>{count}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full max-w-xs">
          <h2 className="text-lg font-semibold mb-4">Recent Posts</h2>
          <ul className="space-y-4">
            {[
              ["Going all-in with millennial design", "03 Aug 2022", post1],
              ["Exploring new ways of decorating", "03 Aug 2022", post2],
              ["Handmade pieces that took time to make", "03 Aug 2022", post3],
              ["Modern home in Milan", "03 Aug 2022", post4],
              ["Colorful office redesign", "03 Aug 2022", post5],
            ].map(([title, date, img], idx) => (
              <li key={idx} className="flex items-center gap-4">
                <img src={img} alt="post" className="object-cover rounded-md" />
                <div className="max-w-[180px]">
                  <p className="text-sm font-medium leading-snug">{title}</p>
                  <span className="text-xs text-gray-400">{date}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <SectionProps />
    </>
  );
}

export default Blog;
