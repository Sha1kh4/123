import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
export default function Coaches() {
  return (
    <>
      {/* Meet Our Awesome Coach Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            Meet Our Awesome Coach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Coach Card 1 */}
            <Card className="bg-gradient-to-br from-[#474747] to-[#222222] text-white shadow-md rounded-md transform-scale-x-[-1]">
              <CardHeader className="p-4">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto transform-scale-x-[-1]">
                  {/* Assuming testi is in your public folder */}
                  <Image
                    src="/testi.jpg"
                    alt="Dianne Russell"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mt-4">
                  Dianne Russell
                </h3>
              </CardHeader>
              <CardContent className="p-4 text-center text-gray-300">
                <p className="text-sm">
                  More than 20 years of experience in the field architecture and
                  has worked on project up to 100+
                </p>
              </CardContent>
            </Card>

            {/* Coach Card 2 */}
            <Card className="bg-gradient-to-br from-[#474747] to-[#222222] text-white shadow-md rounded-md transform-scale-x-[-1]">
              <CardHeader className="p-4">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto transform-scale-x-[-1]">
                  <Image
                    src="/testi.jpg"
                    alt="Dianne Russell"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mt-4">
                  Dianne Russell
                </h3>
              </CardHeader>
              <CardContent className="p-4 text-center text-gray-300">
                <p className="text-sm">
                  More than 20 years of experience in the field architecture and
                  has worked on project up to 100+
                </p>
              </CardContent>
            </Card>

            {/* Coach Card 3 */}
            <Card className="bg-gradient-to-br from-[#474747] to-[#222222] text-white shadow-md rounded-md transform-scale-x-[-1]">
              <CardHeader className="p-4">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto transform-scale-x-[-1]">
                  <Image
                    src="/testi.jpg"
                    alt="Dianne Russell"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mt-4">
                  Dianne Russell
                </h3>
              </CardHeader>
              <CardContent className="p-4 text-center text-gray-300">
                <p className="text-sm">
                  More than 20 years of experience in the field architecture and
                  has worked on project up to 100+
                </p>
              </CardContent>
            </Card>

            {/* Coach Card 4 */}
            <Card className="bg-gradient-to-br from-[#474747] to-[#222222] text-white shadow-md rounded-md transform-scale-x-[-1]">
              <CardHeader className="p-4">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto transform-scale-x-[-1]">
                  <Image
                    src="/testi.jpg"
                    alt="Dianne Russell"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mt-4">
                  Dianne Russell
                </h3>
              </CardHeader>
              <CardContent className="p-4 text-center text-gray-300">
                <p className="text-sm">
                  More than 20 years of experience in the field architecture and
                  has worked on project up to 100+
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
