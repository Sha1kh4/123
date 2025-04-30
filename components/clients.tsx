import Image from "next/image";
export default function Clients() {
  return (
    <>
      {" "}
      {/* Our Clients Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-around">
          {/* Assuming these are images in your public folder */}
          <div className="w-32 md:w-40 grayscale">
            <Image
              src="/l1.png"
              alt="Client Logo"
              width={143}
              height={79}
              // style={{ filter: "grayscale(100%)" }}
              objectFit="contain"
            />
          </div>

          <div className="w-32 md:w-40 grayscale">
            <Image
              src="/l2.png"
              alt="Client Logo"
              width={126}
              height={54}
              objectFit="contain"
            />
          </div>
          <div className="w-32 md:w-40 grayscale">
            <Image
              src="/l3.png"
              alt="Client Logo"
              width={146}
              height={67}
              objectFit="contain"
            />
          </div>
          <div className="w-48 md:w-60 grayscale">
            <Image
              src="/m4.png"
              alt="Client Logo"
              width={219}
              height={120}
              objectFit="contain"
            />
          </div>
          <div className="w-40 md:w-52 grayscale">
            <Image
              src="/m5.png"
              alt="Client Logo"
              width={163}
              height={45}
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}
