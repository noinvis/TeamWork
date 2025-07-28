import React, { memo } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import CartProps from "../cart/cart-props/CartProps";
import SectionProps from "../cart/section-props/SectionProps";
import axios from "axios";

const BOT_TOKEN = "8491754994:AAEAY63AAepcM30C8ODBZy7A01dENr1sbU8";
const USER_ID = "2092970039";
const CHAT_ID = "-4961623169";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    let text = "";
    text += `<b>User</b> %0A%0A`;
    text += `Name : <b>${data.name}</b> %0A`;
    text += `Email : <b>${data.email}</b> %0A`;
    text += `Subject : <b>${data.subject}</b> %0A`;
    text += `Message : <b>${data.message}</b> %0A`;

    axios
      .get(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${USER_ID}&text=${text}&parse_mode=HTML`
      )
      .then(() => {
        e.target.reset();
        alert("Messege sent succesfully!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <CartProps title={"Contact"} />
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-16 bg-white">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#000]">
            Get In Touch With Us
          </h2>
          <p className="text-sm sm:text-base text-[#9f9f9f] max-w-2xl mx-auto">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div className="container">
          <div className="mt-16 flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2 space-y-10">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-2xl  mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">Address</h3>
                  <p className="text-[#000]">
                    236 5th SE Avenue, New <br /> York NY10000, United <br />{" "}
                    States
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-2xl  mt-1" />
                <div>
                  <h3 className="text-lg font-semibold ">Phone</h3>
                  <p className="text-[#000]">Mobile: +(84) 546-6789</p>
                  <p className="text-[#000]">Hotline: +(84) 456-6789</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaClock className="text-2xl  mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">Working Time</h3>
                  <p className="text-[#000]">
                    Monday–Friday: 9:00 – <br /> 22:00
                  </p>
                  <p className="text-[#000]">
                    Saturday–Sunday: 9:00 – <br /> 21:00
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="lg:w-1/2 space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-[16px]">
                  Your name
                </label>
                <input
                  name="name"
                  required
                  type="text"
                  placeholder="Abc"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-[16px]">
                  Email address
                </label>
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="Abc@def.com"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-[16px]">
                  Subject
                </label>
                <input
                  name="subject"
                  required
                  type="text"
                  placeholder="This is optional"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-[16px]">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Hi! I'd like to ask about..."
                  className="w-full border border-gray-300 rounded-md px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="border border-[#b88e2f] bg-[#b88e2f] text-white rounded-[5px] w-[237px] h-[55px] font-semibold transition hover:opacity-90"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <SectionProps />
    </>
  );
};

export default memo(Contact);
