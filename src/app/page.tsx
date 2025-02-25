"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Link from "next/link";
import HeadeLeft from "@/components/HeadeLeft";
import CenterMode from "@/components/CenterMode";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);
  const slide1Ref = useRef(null);
  const bg1Ref = useRef(null);
  const dottedBgRef = useRef(null);
  const beyondRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRef = useRef(null);
  const humanBgRef = useRef(null);
  const humanRef = useRef(null);
  const logoicon1Ref = useRef(null);
  const logoicon2Ref = useRef(null);
  const headphoneImageRef = useRef(null);
  const slide9TextContent = useRef(null);
  const graybgRef = useRef(null);

  const slide7ImageRef1 = useRef(null);
  const slide7ImageRef2 = useRef(null);
  const slide8ImageRef1 = useRef(null);
  const slide9ref = useRef(null);
  const slide10Ref = useRef(null);

  useGSAP(() => {
    // Initial load animations
    const loadTl = gsap.timeline({});

    // Set initial states more precisely
    gsap.set(
      [
        bg1Ref.current,
        dottedBgRef.current,
        ".inner-slide-2",
        ".inner-slide-3",
        ".inner-slide-4",
        ".inner-slide-5",
        ".inner-slide-6",
        ".inner-slide-7",
        ".inner-slide-8",
        slide9ref.current,
        humanBgRef.current,

        slide7ImageRef1.current,
        slide7ImageRef2.current,
        slide8ImageRef1.current,
        logoicon2Ref.current,
        headphoneImageRef.current,
        slide10Ref.current,
        ".slide-12",
        ".footer-nav",
      ],
      { opacity: 0, autoAlpha: 0 }
    );

    // Scroll-based animations
    loadTl.then(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: slide1Ref.current,
          start: "top top",
          end: "+=1000%",
          pin: true,
          scrub: 3,
        },
      });

      // Phase 1 to 2
      scrollTl
        .to(
          [
            titleRef.current,
            buttonRef.current,
            beyondRef.current,
            logoicon1Ref.current,
          ],
          {
            opacity: 0,
          },
        )
        .fromTo(
          bg1Ref.current,
          { autoAlpha: 1 },
          {
            autoAlpha: 0,
            duration: 0.3,
            ease: "power2.inOut",
          },
          "same"
        ).to(".mobile-top-header", {
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
        })
        .fromTo(
          slide1Ref.current,
          { backgroundColor: "black" },
          {
            backgroundColor: "white",
            ease: "none",
          }, "same"
        ).fromTo(
          dottedBgRef.current,
          { autoAlpha: 0 },
          {
            autoAlpha: 1,
            duration: 0.3,
            ease: "power2.inOut",
          },
          "same"
        ).fromTo(
          humanRef.current,
          { y: 0 },
          {
            scale: 0.9,
            y: "6%",
            duration: 0.4,
            stagger: 0.3,
            ease: "power2.inOut",
          },
          "same"
        ).fromTo(
          humanBgRef.current,
          { autoAlpha: 0, scale: 1 },
          {
            autoAlpha: 1,
            scale: 1.1,
            duration: 0.3,
            ease: "power2.inOut",
          },
          "same"
        )

        .fromTo(
          ".inner-slide-2",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            autoAlpha: 1,
            duration: 0.4,
            ease: "power2.inOut",
          },
        )

        .fromTo(
          [".star1", ".star2", ".star3"],
          { opacity: 0, scale: 0.2, },
          { opacity: 1, scale: 1.1, duration: 0.8, ease: "back.out(1.7)" },
          "+=0.2"
        )

        .to(".inner-slide-2", {
          opacity: 0,
        })


        .fromTo(
          ".inner-slide-3",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            autoAlpha: 1,
            duration: 0.4,
            ease: "power2.out",
          },

        )

        .fromTo(
          [".slide3img1", ".slide3img2", ".slide3img3"],
          { opacity: 0, scale: 0.5, y: 50 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" },
          "+=0.2"
        )

        .to(".inner-slide-3",
          {
            opacity: 0
          },
        )

        .fromTo(
          ".inner-slide-4",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            autoAlpha: 1,
            duration: 0.4,
            ease: "power2.out",
          },
        )

        .fromTo(
          [".slide4img1", ".slide4img2", ".slide4img3"],
          { opacity: 0, scale: 0.4, },
          { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
          "-=0.2"
        )

        .to(".inner-slide-4",
          {
            opacity: 0
          },
        )

        .fromTo(
          ".inner-slide-5",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            autoAlpha: 1,
            duration: 0.4,
            ease: "power2.out",
          },

        )

        .fromTo(
          [".slide5img1", ".slide5img2", ".slide5img3"],
          { opacity: 0, scale: 0.5, y: 50 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" },
          "+=0.2"
        )

        .to(".inner-slide-5",
          {
            opacity: 0
          },
        )

        .fromTo(
          ".inner-slide-6",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            y: 0,
            autoAlpha: 1,
            duration: 0.4,
            ease: "power2.out",
          }
        )

        .fromTo(
          [".slide6img1", ".slide6img2", ".slide6img3"],
          { opacity: 0, scale: 0.5, y: 50 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" },
          "+=0.2"
        )
        .to(".inner-slide-6", { opacity: 0 })

        //slide7
        .fromTo(
          ".inner-slide-7",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            autoAlpha: 1,
            duration: 0.4,
            ease: "power2.out",
          }
        )
        .fromTo(
          [".slide7img1", ".slide7img2"],
          { opacity: 0, scale: 0.5, y: 50 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" },
          "+=0.2"
        )
        .to(".inner-slide-7", { opacity: 0 })

        //slide8
        .fromTo(
          ".inner-slide-8",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            autoAlpha: 1,
            duration: 0.4,
            ease: "power2.out",
          }
        )
        .fromTo(
          ".slide8img1",
          { opacity: 0, scale: 0.5, y: 50 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" },
          "+=0.2"
        )

      scrollTl.add([
        gsap.to(".inner-slide-8", { opacity: 0, duration: 0.3 }),
        gsap.to([humanBgRef.current, slide8ImageRef1.current], {
          autoAlpha: 0,
          scale: 0,
          duration: 0.3,
          ease: "back.in(1.7)"
        }),
        gsap.to(slide1Ref.current, {
          backgroundColor: "black",
          ease: "power3.inOut"
        }),
        gsap.to(humanRef.current, {
          scale: 0.85,
          y: "10%",
          ease: "power2.inOut"
        }),
        gsap.to(slide9ref.current, {
          autoAlpha: 1,
          opacity: 1,
        }),
        gsap.fromTo(
          slide9TextContent.current,
          { y: -50, opacity: 0 }, // Start position above
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" } // End position at normal
        ),
        gsap.fromTo(
          graybgRef.current,
          {
            opacity: 0,
            scale: 0.4,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          }
        ),
        gsap.fromTo(
          headphoneImageRef.current,
          {
            scale: 2,
          },
          {
            scale: 0.9,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            autoAlpha: 1,
          },

        ),

        gsap.to(logoicon2Ref.current, {
          autoAlpha: 1,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        })
      ])

      .fromTo(
        slide10Ref.current,
        {
          y: 400,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power2.out",
        },
      )

      scrollTl.add([
        gsap.fromTo(
          ".inner-slide-10 p",
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
        ),

        gsap.fromTo(
          ".slide10-text",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 
        ),
        gsap.fromTo(
          ".inner-slide-10 .arrow-img",
          { opacity: 0, scale: 0.5, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power2.out" },
        )
      ])

        .to(slide10Ref.current, {
          height: "100%",
        })

        .to(
          ".slide10-text",
          { scale: 1.2, duration: 0.8, ease: "power2.out" },
          
        )
        .to(".inner-slide-10 .arrow-img", {
          duration: 0.8,
          width: 500,
          ease: "power2.out",
        },)
        
        .to(dottedBgRef.current, {
          opacity: 0.5,
          autoAlpha: 1,
          zIndex: 80,
        })

        .fromTo(
          ".headxl-img",
          { opacity: 0, duration: 0.8, ease: "power2.out", scale: 1.5 },
          {
            opacity: 1,
            duration: 0.8,
            scale: 1,
            ease: "power2.out",
          },
          "+=0.3"
        )

        .fromTo(
          ".waves",
          {
            y: 400,
            duration: 2,
            ease: "power2.out",
            opacity: 0,
          },
          {
            y: 0,
            duration: 2,
            stagger: 1,
            opacity: 1,
            ease: "power2.out",
          }
        )

        .to(
          [
            ".headxl-img",
            ".waves",
            ".inner-slide-10 .arrow-img",
            ".slide10-text",
            ".inner-slide-10 p",
            dottedBgRef.current,
          ],
          {
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          }
        )

        scrollTl.add([ 
          gsap.to(humanRef.current, {
            y: "10%",
            ease: "power2.out",
            scale: 0.8,
            zIndex: 80,
          }),
          gsap.fromTo(
            ".slide11-text",
            {
              opacity: 0,
            },
            {
              opacity: 1,
            },
          ),
          gsap.fromTo(
            ".slide11-left-img",
            {
              x: -500,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
            },
          ),
          gsap.fromTo(
            ".slide11-right-img",
            {
              x: "100%",
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
            },
  
          )
        ])
        

        
      

        .to([".inner-slide-11 ", humanRef.current], {
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        })

        .to(".slide-12", {
          opacity: 1,
          autoAlpha: 1,
        })

        .to(".footer-nav", {
          opacity: 1,
          autoAlpha: 1,
          duration: 0.5,
          stagger: 0.4,
          ease: "power2.out",
        })

        .fromTo(
          ".amplify-you",
          {
            scale: 0.6,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
          }
        )
        .fromTo(
          "footer",
          {
            y: "100%",
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
          }
        )
        

    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="transition-colors duration-500 overflow-x-hidden relative"
    >
      <div
        ref={slide1Ref}
        className="slide-1 min-h-screen max-h-screen overflow-hidden px-4 pt-4 md:px-5 md:pt-5 relative flex flex-col items-center bg-black"
      >
        <div className="w-full flex justify-between items-center text-white  pb-4 md:pb-5 xl:hidden mobile-top-header ">
          <h1 className=" text-2xl sm:text-3xl font-Psychedelic ">
            Sychedelic
          </h1>
          <Image
            src="/img/logoicon.svg"
            alt="logoicon"
            width={100}
            height={100}
            className=" h-7 w-7 md:w-10 md:h-10"
          />
          <button
            ref={buttonRef}
            className="font-Psychedelic text-xs md:text-lg  rounded-full bg-white text-black    px-4 py-2 group relative z-10"
          >
            <Link target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSenYPmCUgANRS3lgCsSC7ZgKA1pS3BRTRSSUKikT-Z70aVePQ/viewform?embedded=true">
              <span className="relative inline-flex overflow-hidden">
                <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
                  Access exclusive club
                </div>
                <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                  Access exclusive club
                </div>
              </span>
            </Link>
          </button>
        </div>

        <div
          ref={bg1Ref}
          className="h-[85%] w-full relative flex items-center justify-center overflow-hidden rounded-2xl"
        >
          <Image
            src="/img/bgs/bg1.png"
            alt="bg1"
            width={1000}
            height={1000}
            className="absolute top-0 left-0 w-full h-full object-cover"
            priority
          />
        </div>
        <Image
          ref={dottedBgRef}
          src="/img/bgs/dottedbg.svg"
          alt="bg1"
          width={800}
          height={800}
          className="h-full object-cover w-full rounded-2xl transition-opacity duration-500 absolute top-0 left-0 "
        />

        {/* Floating Beyond Image */}
        <Image
          ref={beyondRef}
          src="/img/beyond.svg"
          alt="beyond"
          width={100}
          height={100}
          className=" w-full max-w-80 sm:max-w-xl lg:max-w-3xl absolute top-[20%] lg:top-[10%] left-1/2 -translate-x-1/2 transition-opacity duration-500"
        />
        {/* Human Image */}
        <Image
          ref={humanRef}
          alt="human1"
          src="/img/human1.png"
          width={1000}
          height={1000}
          className=" w-[250px] left-1/2 translate-x-[-58%] sm:left-1/2  sm:translate-x-[-60%] md:w-[420px] 2xl:w-[550] absolute bottom-0  z-10"
          priority
        />
        <Image
          ref={humanBgRef}
          src="/img/bgs/humanbg1.png"
          alt="bg-2"
          width={1000}
          height={1000}
          className="w-full  max-w-80 md:max-w-xl absolute bottom-0 left-1/2 -translate-x-1/2     "
        />
        {/* Content Wrapper */}
        <div className="text-white w-full h-full max-h-[15%]  justify-between items-center hidden xl:flex  ">
          <h1 ref={titleRef} className="text-[68px] font-Psychedelic  pl-4">
            Sychedelic
          </h1>
          <Image
            ref={logoicon1Ref}
            src="/img/logoicon.svg"
            alt="logoicon"
            width={100}
            height={100}
            className="w-12 h-12 absolute left-[48%] bottom-6 z-10"
          />

          <button
            ref={buttonRef}
            className="font-Psychedelic text-3xl  rounded-full bg-white text-black px-6 py-3 group relative z-10"
          >
            <Link target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSenYPmCUgANRS3lgCsSC7ZgKA1pS3BRTRSSUKikT-Z70aVePQ/viewform?embedded=true">
              <span className="relative inline-flex overflow-hidden">
                <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
                  Access exclusive club
                </div>
                <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                  Access exclusive club
                </div>
              </span>
            </Link>
          </button>
        </div>
        <div className="absolute  bottom-8 sm:bottom-20 2xl:bottom-36 left-[25%] sm:left-[32%] xl:left-[41%]  z-[76] flex justify-center items-center">
          <div className="relative">
            {/* Headphone Image */}
            <Image
              ref={headphoneImageRef}
              width={100}
              height={100}
              src="/img/headphone1.svg"
              alt="headphone"
              className="w-32 sm:w-44"
            />
            {/* Logo Icon Positioned on Top */}
            <Image
              ref={logoicon2Ref}
              src="/img/logoicon.svg"
              alt="logoicon"
              width={100}
              height={100}
              className="w-8 sm:w-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>

        {/* Stars */}
        <div className="inner-slide-2 absolute top-0 left-0 w-full h-full">
          <button className="absolute font-Satoshi text-white font-bold top-[44%] left-[50%] translate-x-[-50%] translate-y-[-40%] px-6 py-2 text-sm md:text-xl rounded-full bg-gradient-to-r from-[#FF7676] via-[#2C4CFF] to-[#FF4000] transition-all duration-300">
            <span className="text-content">Amplify your Life</span>
          </button>
          <Image
            alt="star1"
            src="/img/star1.svg"
            width={100}
            height={100}
            className="star1  w-12 md:w-14  left-[5%]   md:left-[20%] top-[40%] absolute xl:left-[30%]"
          />
          <Image
            alt="star2"
            src="/img/star2.svg"
            width={100}
            height={100}
            className="star2 w-20 top-[20%] absolute left-[65%]"
          />
          <Image
            alt="star3"
            src="/img/star1.svg"
            width={100}
            height={100}
            className="star3 w-10 top-[65%] absolute left-[62%]"
          />
        </div>

        {/* Cards */}
        <div className="inner-slide-3 absolute top-0 left-0 w-full h-full">
          <button className="absolute font-Satoshi text-white font-bold top-[44%] left-[50%] translate-x-[-50%] translate-y-[-40%] px-6 py-2 text-sm md:text-xl rounded-full bg-gradient-to-r from-[#FF7676] via-[#2C4CFF] to-[#FF4000] transition-all duration-300">
            <span className="text-content">Amplify your Goal</span>
          </button>
          <div className=" slide3img1 absolute overflow-hidden rounded-xl w-[258px] h-80 left-[15%] top-20 z-10  hidden lg:block">
            <Image
              src="/img/slide1/1.png"
              fill
              alt="1"
              priority
              className="w-full object-cover rounded-lg"
            />
            <h1 className="z-20 text-2xl absolute top-4 font-bold left-4 text-white">
              Goals
            </h1>
            <div className="absolute top-0 left-0 w-full h-full z-10 bg-black/10"></div>
          </div>
          <div className="absolute slide3img2 overflow-hidden rounded-xl w-[250px] h-36 left-[60%] top-36 hidden lg:block">
            <Image
              src="/img/slide1/2.png"
              fill
              alt="2"
              priority
              className="w-full object-cover rounded-lg"
            />
          </div>

          <div className="absolute slide3img3 overflow-hidden rounded-xl w-28 h-40 left-[28%] top-72 hidden lg:block">
            <Image
              src="/img/slide1/3.png"
              fill
              alt="3"
              priority
              className="w-full object-cover rounded-lg"
            />
          </div>
        </div>
        {/* Slide 4 */}
        <div className="inner-slide-4 absolute top-0 left-0 w-full h-full">
          <button className="absolute font-Satoshi text-white font-bold top-[44%] left-[50%] translate-x-[-50%] translate-y-[-40%] px-4 md:px-6 py-2 text-sm md:text-xl  rounded-full bg-gradient-to-r from-[#FF7676] via-[#2C4CFF] to-[#FF4000] transition-all duration-300">
            <span className="text-content">Amplify your Thoughts</span>
          </button>
          <div className="absolute slide4img1 overflow-hidden rounded-xl w-[350px] h-48 left-[65%] top-20 hidden lg:block">
            <Image
              src="/img/slide1/2.png"
              fill
              alt="2"
              priority
              className="w-full object-cover rounded-lg"
            />
            <h1 className="z-20 text-2xl absolute top-4 font-bold left-4 text-white">
              Thoughts
            </h1>
            <div className="absolute top-0 left-0 w-full h-full z-10 bg-black/10"></div>
          </div>
          <Image
            src="/img/slide1/4.png"
            width={100}
            height={100}
            alt="1"
            priority
            className="rounded-lg slide4img2 absolute overflow-hidden w-[160px] h-56 left-[25%] top-72 hidden lg:block"
          />
          <Image
            src="/img/slide1/5.png"
            width={100}
            height={100}
            alt="3"
            priority
            className="w-28 rounded-lg slide4img3 absolute top-96 left-[55%] hidden lg:block"
          />
        </div>

        {/* Slide 5 */}
        <div className="inner-slide-5 absolute top-0 left-0 w-full h-full ">
          <button className="absolute font-Satoshi text-white font-bold top-[44%] left-[50%] translate-x-[-50%] translate-y-[-40%] px-6 py-2 text-sm md:text-xl rounded-full bg-gradient-to-r from-[#FF7676] via-[#2C4CFF] to-[#FF4000] transition-all duration-300">
            <span className="text-content">Amplify your Work</span>
          </button>
          <div className="absolute slide5img1 overflow-hidden rounded-xl w-64 h-80 left-[20%] top-36 hidden lg:block">
            <Image
              src="/img/slide1/4.png"
              fill
              alt="2"
              priority
              className="w-full object-cover rounded-lg"
            />
            <h1 className="z-20 text-2xl absolute top-4 font-bold left-4 text-white">
              Work
            </h1>
            <div className="absolute top-0 left-0 w-full h-full z-10 bg-black/10"></div>
          </div>
          <Image
            src="/img/slide1/6.png"
            width={100}
            height={100}
            alt="1"
            priority
            className="rounded-lg slide5img2 absolute overflow-hidden w-20 left-[38%] top-64 hidden lg:block"
          />
          <Image
            src="/img/slide1/5.png"
            width={100}
            height={100}
            alt="3"
            priority
            className="w-36 rounded-lg slide5img3 absolute top-[420px] left-[60%] hidden lg:block"
          />
        </div>
        <div className="inner-slide-6 absolute top-0 left-0 w-full h-full ">
          <button className="absolute font-Satoshi text-white font-bold top-[44%] left-[50%] translate-x-[-50%] translate-y-[-40%] px-6 md:px-8 py-2 text-sm md:text-xl rounded-full bg-gradient-to-r from-[#FF7676] via-[#2C4CFF] to-[#FF4000] transition-all duration-300 whitespace-nowrap">
            <span className="text-content">Amplify your Creativity</span>
          </button>
          <div className="absolute slide6img1 overflow-hidden object-cover rounded-xl w-[400px] h-64 left-[65%] top-48 z-[2] hidden lg:block">
            <Image
              src="/img/slide1/5.png"
              alt="Creativity"
              width={1000}
              height={1000}
              className="rounded-lg  "
            />
            <h1 className="z-20 text-2xl absolute bottom-4 font-bold right-4 text-white">
              Creativity
            </h1>
          </div>
          <Image
            src="/img/slide1/6.png"
            width={1000}
            height={1000}
            alt="1"
            priority
            className="rounded-lg slide6img2 absolute overflow-hidden w-40 left-[25%] top-64 hidden lg:block"
          />
          <Image
            src="/img/slide1/7.png"
            width={1000}
            height={1000}
            alt="1"
            priority
            className="rounded-lg slide6img3 absolute overflow-hidden w-24 left-[60%] top-96 hidden lg:block"
          />
        </div>
        <div className="inner-slide-7 absolute top-0 left-0 w-full h-full  ">
          <button className="absolute font-Satoshi text-white font-bold top-[44%] left-[50%] translate-x-[-50%] translate-y-[-40%] px-6 md:px-8 py-2 text-sm md:text-xl rounded-full bg-gradient-to-r from-[#FF7676] via-[#2C4CFF] to-[#FF4000] transition-all duration-300 whitespace-nowrap">
            <span className="text-content">Amplify your Productivity</span>
          </button>

          <div className="absolute slide7img1 overflow-hidden object-cover rounded-xl w-[350px] h-56 left-[15%] top-36 z-[2] hidden lg:block">
            <div className="absolute  top-0 left-0 w-full h-full z-10  bg-gradient-to-b from-black/90  via-transparent to-transparent"></div>
            <Image
              src="/img/slide1/6.png"
              alt="Creativity"
              width={1000}
              height={1000}
              className="rounded-lg  "
            />
            <h1 className="z-20 text-2xl absolute top-4 font-bold left-4 text-white">
              Productivity
            </h1>
          </div>
          <Image
            src="/img/slide1/7.png"
            width={1000}
            height={1000}
            alt="1"
            priority
            className="rounded-lg slide7img2 absolute overflow-hidden w-28 left-[60%] top-[250px] -z-[2] hidden lg:block"
          />
        </div>
        <div className="inner-slide-8 absolute top-0 left-0 w-full h-full ">
          <button className="absolute font-Satoshi text-white font-bold top-[44%] left-[50%] translate-x-[-50%] translate-y-[-40%] px-6 md:px-8 py-2 text-sm md:text-xl rounded-full bg-gradient-to-r from-[#FF7676] via-[#2C4CFF] to-[#FF4000] transition-all duration-300 whitespace-nowrap">
            <span className="text-content">Amplify your Relaxation</span>
          </button>
          <div className="relative slide8img1 overflow-hidden object-cover rounded-2xl w-[300px] h-96 left-[62%] top-16 hidden lg:block ">
            <Image
              src="/img/slide1/7.png"
              alt="Creativity"
              width={1000}
              height={1000}
              className="rounded-lg  "
            />
            <h1 className="z-20 text-3xl absolute bottom-4 font-bold right-4 text-white">
              Relaxation
            </h1>
            <div className="absolute top-0 left-0 w-full h-full z-10  bg-gradient-to-t from-black/90  via-transparent to-transparent"></div>
          </div>
        </div>
        <div
          ref={slide9ref}
          className="slide-9 absolute w-full h-full top-0 overflow-hidden"
        >
          <Header />

          {/* Text Content */}
          <div
            ref={slide9TextContent}
            className=" text-white  relative top-[2%] sm:top-[5%] lg:top-[3%] 2xl:top-[8%] w-full text-center"
          >
            <h1 className="font-Psychedelic text-xl sm:text-2xl md:text-4xl ">
              World’s first
              <span className="text-4xl md:text-7xl px-2">Unfair,</span>
              <br className="block lg:hidden" />
              <span className="font-sacramento text-[45px] md:text-6xl font-semibold text-[#FE0055] block sm:inline py-4  my-2  sm:my-3 !leading-[20px] sm:!leading-[80px] ">
                Smart <span className="pl-3"> Headphones </span>
              </span>
            </h1>

            <p className=" text-sm sm:text-xl font-medium mt-2  lg:mt-0">
              that give you the edge over the rest
            </p>
          </div>

          {/* Gray Background */}
          <div
            ref={graybgRef}
            className="w-full h-96 max-w-80 sm:max-w-[700px]  lg:max-w-screen-xl  sm:h-[600px] lg:h-[350px]   2xl:max-w-screen-2xl 2xl:h-[460px]  rounded-2xl overflow-hidden absolute mx-auto top-[34%] lg:top-[38%] 2xl:to] left-[50%] -translate-x-1/2 z-[1]"
          >
            <Image
              src="/img/bgs/graybg.png"
              alt="graybg"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="bg-gradient-to-t from-neutral-500 w-full h-96 absolute bottom-0 -z-10"></div>
          <div
            ref={slide10Ref}
            className="inner-slide-10 p-5 xl:p-10 bg-gradient-to-b from-[#FF002A] to-[#8B0017]  absolute  bottom-0 w-full z-[78] text-center text-white  flex flex-col justify-center items-center"
          >
            <div className="headxl-img absolute top-0 left-0 w-full h-full overflow-hidden">
              <Image
                src="/img/headxl.png"
                alt="xlheadphone"
                width={800}
                height={800}
                className=" w-full h-full object-cover"
              />

              {/* Red Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-pink-700 opacity-50"></div>
            </div>

            <p className=" text-lg sm:text-2xl font-semibold ">
              Created for the ones
            </p>
            <div className="text-3xl sm:text-[80px] slide10-text leading-tight font-Anton  relative flex items-center z-[70]">
              Who {/* "Need to" text with fade effect and arrow above */}
              <span className="relative  px-2 mx-2">
                <Image
                  src="/img/arrow.svg"
                  width={100}
                  height={100}
                  alt="arrow"
                  className="w-[250px] arrow-img absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
                />
                <span className="opacity-50">Need To</span>
              </span>
              Win
            </div>
            <Image
              src="/img/waves.svg"
              alt="waves"
              width={1200}
              height={1200}
              className=" w-[1600px] max-w-screen-4xl  lg:h-auto xl:w-full waves absolute -bottom-28 sm:bottom-0 lg:-bottom-28 z-[80]"
            />

            <div className=" w-full h-full absolute  inner-slide-11  ">
              <div className="pt-32 slide11-text">
                <h4 className=" text-2xl sm:text-4xl font-Psychedelic mb-0 sm:mb-4">
                  Where achievement lives
                </h4>
                <h1 className="text-[56px] sm:text-8xl xl:text-9xl font-sacramento font-semibold">
                  Sychedelic Leads
                </h1>
              </div>
              <HeadeLeft className="w-[400px] h-auto md:w-full lg:max-w-lg 2xl:max-w-screen-sm absolute bottom-0 left-[-85%]  md:left-[-70%] xl:left-0 slide11-left-img " />
              <HeadeLeft className="w-[400px] h-auto md:w-full lg:max-w-lg 2xl:max-w-screen-sm absolute bottom-0 right-[-85%] md:right-[-70%] xl:right-0 scale-x-[-1] slide11-right-img" />
            </div>
          </div>
          <div className="slide-12 absolute top-0 bg-[#000] left-0 w-full h-screen z-[82]">
            <div className="text-center relative  bg-gradient-to-t from-[#000] gap-5 sm:gap-20 xl:gap-10 h-full w-full flex flex-col justify-center items-center">
              <div className="xl:mt-14">
                <h1 className="text-5xl sm:text-7xl font-sacramento ">
                  <span className="bg-gradient-to-r from-[#FFAF31] to-[#FF1A00]  bg-clip-text text-transparent ">
                    The Maestros{" "}
                  </span>
                </h1>
                <p className=" text-xs sm:text-base  w-full text-white max-w-80 sm:max-w-xl mx-auto">
                  After using Sychedelic, I felt that I got a boost of energy,
                  It helped me focus much better than I could earlier, since I
                  was feeling sleep deprived.
                </p>
              </div>
              <CenterMode />
            </div>
            <Image
              src="/img/bgs/humanbg1.png"
              width={100}
              height={800}
              alt="hummanbg2"
              className="w-full max-w-3xl scale-125 -z-[85]  humanbgslide13 absolute -bottom-10 xl:max-w-4xl left-1/2 transform -translate-x-1/2 filter blur-md"
            />
          </div>

          <div className="absolute z-[85] footer-nav top-0 w-full h-full opacity-0 bg-[url('/img/bgs/bg1.png')] bg-cover bg-center">
            <h1 className="absolute w-full amplify-you top-[25%] sm:top-[30%] left-1/2 transform  -translate-x-1/2 text-6xl sm:text-9xl xl:text-[140px] font-Satoshi font-bold text-black text-center">
              Amplify you
            </h1>
            <Footer extra="absolute bottom-0 w-full" />
          </div>
        </div>
      </div>
    </section >
  );
}
