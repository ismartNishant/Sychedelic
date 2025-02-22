export default function SectionTwo() {
  return (
    <section className="relative w-full bg-[#000000] px-4 py-20 items-center justify-center flex h-screen">
      <img
        src="/traced.png"
        className="md:absolute md:flex hidden w-2/5 bottom-0 right-0"
        alt="logo"
      />
      <img
        src="/sm_trace.png"
        className="absolute md:hidden w-[90%] bottom-0 right-0"
        alt="logo"
      />
      <main className="max-w-6xl px-8">
        <h1 className="text-white md:text-4xl md:leading-10 text-3xl leading-10">
          In a world driven by metrics and trackers, Sychedelic was born from a
          simple question:{" "}
          <span className="font-semibold">
            Why measure progress if it doesn’t lead to transformation?
          </span>
        </h1>
      </main>
    </section>
  );
}
