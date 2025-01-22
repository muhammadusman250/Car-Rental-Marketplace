import React from "react";

const Footer = () => {
  return (
    <section className="py-3">
      {/* Horizontal Line */}
      <hr className="w-full" />
      {/* Footer */}
      <div className="flex justify-around max-md:gap-10 leading-10 max-md:flex-col py-10 max-md:items-center">
        {/* Logo & Description */}
        <div className="tracking-wider">
          <div className="text-[#3563E9] font-bold text-2xl">MORENT</div>
          <div className="text-gray-500 text-sm pt-3">
            Our vision is to provide convenience <br />
            and help increase your sales business.
          </div>
        </div>
        {/* Lists */}
        <div className="flex gap-20 max-md:gap-10 max-sm:gap-5">
          {/* About List */}
          <div>
            <ul className="list-none text-gray-500">
              <li className="font-bold text-black">About</li>
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Business Relation</li>
            </ul>
          </div>
          {/* Community List */}
          <div>
            <ul className="list-none text-gray-500">
              <li className="font-bold text-black">Community</li>
              <li>Events</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Invite a friend</li>
            </ul>
          </div>
          {/* Socials List */}
          <div>
            <ul className="list-none text-gray-500">
              <li className="font-bold text-black">Socials</li>
              <li>Discord</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </div>
      {/* horizontal line */}
      <hr className="w-4/5 mx-10 max-sm:px-[10%]" />
      {/* copyright line */}
      <div className="px-[10%] flex max-md:flex-col max-md:items-center justify-between  py-8 font-semibold">
        <div>&copy; 2022 MORENT. All rights reserved</div>
        <div className="flex gap-12 max-md:gap-6">
          <div>Policy &amp; Privacy</div>
          <div>Terms &amp; Conditions</div>
        </div>
      </div>
    </section>
  );
};

export default Footer;