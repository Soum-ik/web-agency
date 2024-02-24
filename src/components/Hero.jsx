import Image from "next/image";
import Link from "next/link";
import Brands from "./Brands";
import PageLayout from "./PageLayout";   
const Hero = ({  images }) => {
  return (
    <div className="bg-[#D7F5DC] min-h-screen pb-5 pt-16">
      <PageLayout>
        <div className="flex flex-wrap lg:flex-nowrap gap-5 md:gap-12 items-center justify-between  min-h-[75vh] w-full">
          <div className="max-w-2xl">
            <h1 className="text-black text-5xl font-semibold mb-5">Build & Launch without problems</h1>
            <p className="font-medium mb-5 max-w-lg">
              Empowering Your Digital Presence. Creativity Meets Functionality.
              Web Design that Stands Out. Elevate Your Digital Identity.
              Transforming Your Online Journey.
            </p>
            <div className="bg-[#20B15A] inline-block text-white px-4 py-3 rounded-lg cursor-pointer">
              <Link href="/">Get Started</Link>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 sm:[&>*:first-child]:col-span-8 sm:[&>*:nth-child(2)]:col-span-4 [&>*]:col-span-6 [&>*]:rounded-xl">
            {images.map((image, idx) => {
              return (
                <div
                  className="w-full h-[240px] bg-gray-100 overflow-hidden"
                  key={idx}
                >
                  <Image
                    src={`/images/ourService/${image}`}
                    alt="title"
                    height={500}
                    width={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </PageLayout>{" "}
      <Brands />
    </div>
  );
};

export default Hero;
