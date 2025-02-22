import { inter, psychedelic } from "@/app/fonts";

export default function SectionThree() {
  return (
    <section
      className={`relative w-full bg-white px-4 py-20 h-full ${inter.variable} ${psychedelic.variable}`}
    >
      {/* Background Dots Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(#00000030 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      {/* Content Container */}
      <div className="container relative mx-auto max-w-7xl">
        <h1
          className={`text-center text-lg leading-8 md:text-2xl md:leading-10 text-black font-inter`}
        >
          <span className="text-[#FF0000] font-psychedelic text-6xl absolute left-0 md:-ml-1">
            “
          </span>
          We realized that there’s an abundance of tools to monitor
          productivity, sleep, and health, but none that actively improve them.
          With this insight, we set out to create a revolutionary product
          experience - one that empowers individuals to take control of their
          emotions, amplify their potential, and fast-track their growth without
          compromising on sustainability
          <span className="text-[#FF0000] font-psychedelic text-6xl absolute transform scale-x-[-1]">
            “
          </span>
        </h1>

        <div className="flex justify-between mt-24 h-full">
          <div className="flex flex-col gap-y-2 md:w-1/2">
            <h1 className="md:text-xl text-lg font-semibold">
              Our <span className="text-[#FF0000]">mission</span> is bold yet
              simple:
            </h1>
            <p className="font-inter md:text-base text-sm">
              To be the bridge between what you do and everything that you can
              achieve. Combining cutting-edge technology with a human-centric
              approach, Sychedelic brings innovation to the forefront of
              wellness, cognitive enhancement, and self-mastery.
            </p>
          </div>
        </div>
        <div className="flex justify-end md:mt-6 mt-16">
          <div className="flex flex-col gap-y-2 md:w-1/2">
            <h1 className="md:text-xl text-lg font-semibold">
              Sychedelic is not just a brand;{" "}
              <span className="text-[#FF0000]">it's a movement</span>
            </h1>
            <p className="font-inter md:text-base text-sm">
              A movement for the self-driven, the curious, the action-takers who
              dare to embrace their potential. Through innovation,
              transformation, and experience, Sychedelic amplifies your life so
              you don’t just live it - you own it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
