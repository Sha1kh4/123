import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-[1030px] bg-[#313131]">
      <header className="absolute top-0 left-0 w-full px-16 py-8 flex items-center justify-between">
        {/* Logo */}
        <div className="w-[200px] grayscale">
          <Image src="/toplogo.png" alt="Logo" width={200} height={61} />
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6 text-base font-medium">
          <a href="#" className="text-white hover:text-white font-semibold">
            Home
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Coaching
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Events & Retreat
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            About Us
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Courses
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Blogs
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Media & Press
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Contact Us
          </a>
        </nav>
      </header>

      <div className="flex h-full pt-32">
        {/* Left Content */}
        <div className="w-1/2 pl-16 pt-12">
          <h1 className="text-white font-medium text-7xl leading-tight">
            Discover Your
            <br />
            Inner
            <br />
            Strength and
            <br />
            Create
            <br />A Life You Love
          </h1>
          <p className="text-gray-400 text-lg mt-8 mb-12 max-w-xl">
            Life coaches will guide you through a transformational journey of
            self-discovery, helping you identify your unique gifts and talents
          </p>
          <Button className="bg-[#60BBEE] hover:bg-[#0A72AD] text-white px-8 py-6 rounded-md text-lg">
            Get Started
          </Button>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 md:gap-16 mt-16">
            <div>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold">100</span>
                <span className="text-sky-400 text-4xl font-bold">+</span>
              </div>
              <div className="text-gray-400">Expert Coaches</div>
            </div>

            <div>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold">30K</span>
                <span className="text-sky-400 text-4xl font-bold">+</span>
              </div>
              <div className="text-gray-400">Lives Changed</div>
            </div>

            <div>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold">50</span>
                <span className="text-sky-400 text-4xl font-bold">+</span>
              </div>
              <div className="text-gray-400">Workshops Conducted</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10">
            <Image
              src="/lead.png"
              alt="Life Coach"
              width={1100}
              height={1000}
              className="rounded-lg object-cover"
              style={{
                transform: "scaleX(-1)",
                objectFit: "contain",
                objectPosition: "right",
              }}
            />
          </div>

          <div className="absolute bottom-0 right-0 bg-sky-600 p-6 rounded-lg max-w-md z-20">
            <div className="flex items-baseline mb-2">
              <span className="text-4xl font-bold">10</span>
              <span className="text-white text-4xl font-bold">+</span>
              <span className="ml-2 text-2xl">Years</span>
            </div>
            <div className="text-xl font-semibold mb-2">Experience</div>
            <p className="text-sm">
              True transformation is a balance of mind, body, and purpose. These
              pillars represent the core areas we help you strengthen. Track
              your journey and celebrate your growth as you progress toward a
              more empowered and fulfilled life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
