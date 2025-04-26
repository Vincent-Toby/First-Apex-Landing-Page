import React from 'react'

type Props = {}

function Partners({}: Props) {
  return (
    <section className="bg-white landingpage-container text-center text-[#093B3B] dpy-[96px] flex flex-col gap-[24px]">
      <div className="text-[18px] font-[500]">Some of our pathners</div>
      <div className="flex flex-wrap sm:flex-row items-center justify-center gap-[64px]">
        <img
          className="size-[56px] object-contain"
          src="images/indomie-logo.png"
          alt=""
        />
        <img
          className="size-[56px] object-contain"
          src="images/viju-logo.png"
          alt=""
        />
        <img
          className="size-[56px] object-contain"
          src="images/napps-logo.jpeg"
          alt=""
        />
        <img
          className="size-[56px] object-contain"
          src="images/fidson-logo.webp"
          alt=""
        />
      </div>
    </section>
  )
}

export default Partners