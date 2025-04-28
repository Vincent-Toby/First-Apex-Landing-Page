import React from 'react'

type Props = {}

function Partners({}: Props) {
  return (
    <section className="bg-white landingpage-container text-center text-[#093B3B] dpy-[96px] flex flex-col gap-[24px]">
      <div className="text-[18px] font-[500]">Some of our pathners</div>
      <div className="flex flex-wrap items-center justify-center gap-[64px]">
        <img
          className="sm:size-[56px] size-[45px] object-contain"
          src="images/indomie-logo.png"
          alt=""
        />
        <img
          className="sm:size-[56px] size-[45px] object-contain"
          src="images/viju-logo.png"
          alt=""
        />
        <img
          className="sm:size-[56px] size-[45px] object-contain"
          src="images/napps-logo.jpeg"
          alt=""
        />
        <img
          className="sm:size-[56px] size-[45px] object-contain"
          src="images/fidson-logo.webp"
          alt=""
        />
      </div>
    </section>
  )
}

export default Partners