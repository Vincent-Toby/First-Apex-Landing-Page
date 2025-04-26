import Image from "next/image";
import Navbar from "./components/Navbar";
import OurFacilities from "./components/OurFacilities";
import MeetOurTeam from "./components/MeetOurTeam";
import Testimonials from "./components/Testimonials";
import Banner from "./components/Banner";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import { SliderComponent } from "./components/SliderComponent";

export default function Home() {
  return (
    <div className="bg-[#fff] select-none flex flex-col gap-[0px]">
      <Navbar />
      <Banner />
      <div className="bg-[#fff] select-none flex flex-col gap-[90px]">
        <Partners />
        <OurFacilities />

        <section className="hidden dflex flex-col items-center justify-center bg-white px-[80px] py-[50px] gap-[70px]">
          <div>
            <h3 className="text-[30px] secondary font-[700]">
              Just 3 easy steps
            </h3>
          </div>

          <div className="flex flex-col sm:flex-col md:flex-row items-center justify-center gap-[48px] sm:px-[16px] md:px-[0px] py-[32px]">
            {/* card 1 */}
            <div className="flex flex-col items-center justify-center gap-5 px-6 py-6 rounded-lg border border-[#208a8a] w-full max-w-sm">
              <img
                className="h-[11rem] object-contain"
                src="/images/create-profile.jpg"
                alt="Create Profile"
              />
              <h3 className="text-primary text-xl font-semibold">
                Create your profile
              </h3>
              <p className="text-[#208a8a] text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                molestiae eaque ratione minus
              </p>
              <button className="bg-[#136e61] text-white px-4 py-2 rounded-lg hover:bg-[#315252] transition">
                Get Started
              </button>
            </div>

            {/* card 2 */}
            <div className="flex flex-col items-center justify-center gap-5 px-6 py-6 rounded-lg border border-[#208a8a] w-full max-w-sm">
              <img
                className="h-[11rem] object-contain"
                src="/images/search-courses.jpg"
                alt="Search Courses"
              />
              <h3 className="text-primary text-xl font-semibold">
                Search Courses
              </h3>
              <p className="text-[#208a8a] text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                molestiae eaque ratione minus
              </p>
              <button className="bg-[#136e61] text-white px-4 py-2 rounded-lg hover:bg-[#315252] transition">
                Get Started
              </button>
            </div>

            {/* card 3 */}
            <div className="flex flex-col items-center justify-center gap-5 px-6 py-6 rounded-lg border border-[#208a8a] w-full max-w-sm">
              <img
                className="h-[11rem] object-contain"
                src="/images/make-a-connection.jpg"
                alt="Make a Connection"
              />
              <h3 className="text-primary text-xl font-semibold">
                Make a Connection
              </h3>
              <p className="text-[#208a8a] text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                molestiae eaque ratione minus
              </p>
              <button className="bg-[#136e61] text-white px-4 py-2 rounded-lg hover:bg-[#315252] transition">
                Get Started
              </button>
            </div>
          </div>
        </section>

        <SliderComponent />

        <MeetOurTeam />

        <Testimonials />

        <Footer />
      </div>
    </div>
  );
}
