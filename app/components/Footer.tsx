import React from 'react'

type Props = {}

function Footer({}: Props) {
  return (
    <footer className="bg-[#093B3B] px-[70px] py-[50px]">
      <div className="flex sm:flex-row flex-col items-start gap-[40px] justify-between border-b border-gray-400 pb-[60px]">
        <div className="flex flex-col items-start justify-center gap-[8px]">
          <h3 className="text-white text-[33px] font-[600]">First Apex</h3>
          <p className="max-w-[250px] text-gray-300">
            vistt any of our social media platforms for enquiry and more <br />24hr reply guaranteed.
          </p>
          <div className="flex gap-[10px] mt-[10px]">
            <div className="rounded-full bg-[#125f5f]/80">
              <img
                className="p-[8px] h-[30px]"
                src="/images/social/facebook-app-symbol.png"
                alt=""
              />
            </div>
            <div className="rounded-full bg-[#125f5f]/80">
              <img
                className="p-[8px] h-[30px]"
                src="/images/social/instagram.png"
                alt=""
              />
            </div>
            <div className="rounded-full bg-[#125f5f]/80">
              <img
                className="p-[8px] h-[30px]"
                src="/images/social/telegram.png"
                alt=""
              />
            </div>
            <div className="rounded-full bg-[#125f5f]/80">
              <img
                className="p-[8px] h-[30px]"
                src="/images/social/twitter.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center">
          <div className="flex flex-col gap-[10px]">
            <span className="font-[500] text-white text-[16px] text-left mb-[15px]">
              Company
            </span>
            <p className="text-gray-300">About us</p>
            <p className="text-gray-300">Blog</p>
            <p className="text-gray-300">Contact us</p>
            <p className="text-gray-300">Pricing</p>
            <p className="text-gray-300">Testimonials</p>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center">
          <div className="flex flex-col gap-[10px]">
            <span className="font-[500] text-white text-[16px] text-left mb-[15px]">
              Support
            </span>
            <p className="text-gray-300">Help center</p>
            <p className="text-gray-300">Terms of service</p>
            <p className="text-gray-300">Legal</p>
            <p className="text-gray-300">Privacy policy</p>
            <p className="text-gray-300">Status</p>
          </div>
        </div>
      </div>

      <div>
        <p className="text-[16px] text-gray-300 pt-[20px]">
          Designed by@Vincent, 2025, All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer