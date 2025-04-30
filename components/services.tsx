import { HeartIcon } from "@radix-ui/react-icons"; // Example icons
import Image from "next/image";

export default function Services() {
  return (
    <>
      {" "}
      {/* Our Core Coaching Services Section */}
      <div className="py-16 bg-gradient-to-r from-[#60BBEE] to-[#2387C0] rounded-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-white font-bold text-center text-4xl md:text-5xl mb-12">
            Our Core Coaching Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            <div className="flex flex-col items-center text-center text-white">
              <div className="relative w-24 h-24 rounded-full bg-[#2387C0] shadow-md flex items-center justify-center">
                <div className="absolute w-20 h-20 rounded-full bg-[#2387C0]/30" />
                <HeartIcon className="w-14 h-14 text-white" />
              </div>
              <h3 className="font-semibold text-xl mt-4">Life Coaching</h3>
            </div>
            <div className="flex flex-col items-center text-center text-white">
              <div className="relative w-24 h-24 rounded-full bg-[#2387C0] shadow-md flex items-center justify-center">
                <div className="absolute w-20 h-20 rounded-full bg-[#2387C0]/30" />
                <Image
                  src="/coaching.png"
                  alt="Business Coaching"
                  layout="fill"
                  objectFit="cover"
                  className="w-14 h-14 text-white"
                />
              </div>
              <h3 className="font-semibold text-xl mt-4">Business Coaching</h3>
            </div>
            <div className="flex flex-col items-center text-center text-white">
              <div className="relative w-24 h-24 rounded-full bg-[#2387C0] shadow-md flex items-center justify-center">
                <div className="absolute w-20 h-20 rounded-full bg-[#2387C0]/30" />{" "}
                <Image
                  alt="Business Consultancy"
                  src="/consultance.png"
                  layout="fill"
                  objectFit="cover"
                  className="w-14 h-14 text-white"
                />
              </div>
              <h3 className="font-semibold text-xl mt-4">
                Business Consultancy
              </h3>
            </div>
            <div className="flex flex-col items-center text-center text-white">
              <div className="relative w-24 h-24 rounded-full bg-[#2387C0] shadow-md flex items-center justify-center">
                <div className="absolute w-20 h-20 rounded-full bg-[#2387C0]/30" />
                <Image
                  alt="Mental Health"
                  src="/mental.png"
                  layout="fill"
                  objectFit="cover"
                  className="w-14 h-14 text-white"
                />
              </div>
              <h3 className="font-semibold text-xl mt-4">Mental Health</h3>
            </div>
            <div className="flex flex-col items-center text-center text-white">
              <div className="relative w-24 h-24 rounded-full bg-[#2387C0] shadow-md flex items-center justify-center">
                <div className="absolute w-20 h-20 rounded-full bg-[#2387C0]/30" />
                <Image
                  alt="Spiritual Awareness"
                  src="/spiritual.png"
                  layout="fill"
                  objectFit="cover"
                  className="w-14 h-14 text-white"
                />
              </div>
              <h3 className="font-semibold text-xl mt-4">
                Spiritual Awareness
              </h3>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
