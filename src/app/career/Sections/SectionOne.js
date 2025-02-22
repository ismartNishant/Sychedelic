export default function SectionOne() {
  return (
    <section className="relative w-full bg-white pb-12 overflow-hidden h-full">
      {/* Background Dots Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(#00000030 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>
      <div className="w-full overflow-hidden relative">
        <h1 className="text-[80px] text-center w-full font-bold text-black whitespace-nowrap overflow-visible moving-text">
          We don't post positions. We don't seek employees. We identify
          entrepreneurs.
        </h1>
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="flex md:flex-row flex-col md:items-center justify-between gap-x-4 py-10 md:px-0 px-6 gap-y-8 md:gap-y-0">
          <div className="md:w-1/3 md:text-lg">
            <p className="font-semibold leading-6">
              If your trajectory isn't linear,
            </p>
            <p className="text-[#FF0000] leading-6">it's exponential.</p>
            <p className="font-semibold leading-6">
              If your standards aren't high,
            </p>
            <p className="text-[#FF0000] leading-6">
              they're unattainable for others.
            </p>
            <p className="font-semibold leading-6">
              If your position isn't at the top,
            </p>
            <p className="text-[#FF0000] leading-6">it's beyond the summit.</p>
          </div>
          <div className="md:w-1/5 md:text-lg md:font-medium">
            <p className="leading-6">
              Excellence knows no bounds, and neither do we. While others fill
              vacancies, we're cultivating an empire of exceptional forces.
            </p>
          </div>
          <div className="md:w-1/3 md:text-lg md:font-medium">
            <p className="leading-6">
              In a world that asks you to choose between dominance and balance,
              we say: Rule Both. It’s about having different things at different
              times of the day, you hustle hard to achieve your goals and then
              take a break to reset
            </p>
          </div>
        </div>
        <div>
          <h1 className="md:text-2xl text-lg font-medium md:px-0 px-6">
            If you're{" "}
            <span className="font-bold"> beyond the ordinary, prove it.</span>{" "}
            Direct your resume to the team:{" "}
            <span className="text-[#FF0000] underline">ria@sychedelic.com</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
