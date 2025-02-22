import Image from "next/image";

export default function SectionOne() {
  return (
    <section className="relative w-full bg-white px-4 md:py-20 py-12">
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
        {/* Mission Statement */}
        <h1 className="text-center text-md md:text-4xl font-bold md:leading-[3rem] text-black px-12">
          Our mission is to{" "}
          <span className="italic text-[#FF0000]">empower individuals</span> to
          explore, enhance, and understand their{" "}
          <span className="italic text-[#FF0000]">cognitive abilities</span>{" "}
          through{" "}
          <span className="italic text-[#FF0000]">cutting-edge technology</span>.
        </h1>

        {/* Founders and Journey Section */}
        <div className="mt-14 md:mb-0 mb-14 flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-12">
          {/* Founders */}
          <div className="flex gap-6 max-w-md">
            {/* Founder 1 */}
            <div>
              <div className="overflow-hidden rounded-2xl">
                <div className="relative h-48 w-48 rounded-2xl">
                  <Image
                    src="/bhavya.png"
                    alt="Bhavya Madan"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                  />
                </div>
              </div>
              <div>
                <p className="text-md font-semibold">Founder</p>
                <p className="text-xl font-bold">Bhavya Madan</p>
              </div>
            </div>

            {/* Founder 2 */}
            <div>
              <div className="overflow-hidden rounded-2xl">
                <div className="relative h-48 w-48 rounded-2xl">
                  <Image
                    src="/ria.png"
                    alt="Ria Rustagi"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                  />
                </div>
              </div>
              <div>
                <p className="text-md font-semibold">Founder</p>
                <p className="text-lg font-bold">Ria Rustagi</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="max-w-3xl">
            <h2 className="mb-3 md:text-2xl text-lg font-semibold leading-tight pr-12">
              Our journey began with a deeply personal mission
            </h2>
            <p className="md:text-lg md:font-medium">
              After losing her sister to a brain-related illness, Ria entered
              the neurotech space with a determination to prevent others from
              enduring similar experiences, we started working on Neuphony.
              Neuphony was a brand that focused on revolutionizing the mental
              health space, not just in India, but the world. But, as Neuphony
              became big, the vision of making mental health accessible to all
              became blurry, and hence, it was discontinued; And Sychedelic was
              born.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
