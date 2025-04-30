import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function OurStory() {
  return (
    <>
      {/* Our Story Section */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-6">
              Our Story <br /> <span className="text-gray-600">Who we are</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              At Mahpatram, we believe in the limitless potential of every
              individual and the power of collaboration to drive success and
              well-being. MAHPATRAM is dedicated to empowering individuals,
              businesses, and coaches to unlock their full potential. With a
              focus on transformation and growth, we provide holistic solutions
              that foster personal and professional excellence.
            </p>
            <Button className="bg-[#0A72AD] shadow-[0px_10px_15px_rgba(1,115,153,0.2)] rounded-md">
              Learn More
            </Button>
          </div>
          <div className="md:w-1/2 relative transform-scale-x-[-1]">
            <div className="relative w-[575px] h-[470.45px] rounded-[44px] overflow-hidden shadow-lg">
              <Image
                src="/grp.jpg"
                alt="Our Story Image"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 border-20 border-black/10 rounded-[44px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
