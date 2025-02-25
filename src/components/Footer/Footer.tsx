"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";


interface FooterProps {
  extra?: string;
}

export default function Footer({ extra }: FooterProps) {
  const pathname = usePathname();

  return (
    <footer
      className={`bg-black text-white md:px-10 px-6 py-6  ${extra}`}
    >
      <div className="flex">
        <div className="flex flex-col md:w-1/2 space-y-4">
          <div>
            <Link
              href="/"
              className="sm:text-7xl xl:text-[140px] text-[40px] font-Psychedelic"
            >
              Sychedelic
            </Link>
          </div>
          <div className="flex items-end justify-start">
            <div
              className={`flex md:flex-row flex-wrap-reverse items-center md:gap-3 gap-2`}
            >
              <Link
                href="mailto:experience@sychedelic.com"
                className="flex items-center border border-white/20 rounded-full px-4 py-1 hover:bg-white/10 transition-colors md:text-sm text-[8px] font-inter"
              >
                experience@sychedelic.com
              </Link>
              <Link
                href="https://www.youtube.com/@Sychedelicofficial"
                className={`flex items-center border border-white/20 rounded-full px-4 py-1 hover:bg-white/10 transition-colors md:text-sm text-[8px] font-inter`}
              >
                Youtube
              </Link>
              <Link
                href="https://www.instagram.com/sychedelicofficial/"
                className="flex items-center border border-white/20 rounded-full px-4 py-1 hover:bg-white/10 transition-colors md:text-sm text-[8px] font-inter"
              >
                Instagram
              </Link>
              <Link
                href="https://x.com/SychedelicOfc/"
                className="flex items-center border border-white/20 rounded-full px-4 py-1 hover:bg-white/10 transition-colors md:text-sm text-[8px] font-inter"
              >
                X
              </Link>
              <Link
                href="https://www.linkedin.com/company/sychedelic"
                className="flex items-center border border-white/20 rounded-full px-4 py-1 hover:bg-white/10 transition-colors md:text-sm text-[8px] font-inter"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-around w-1/2">
          <div className="flex items-start md:justify-around justify-end w-full">
            <div className="md:hidden flex flex-col gap-y-2">
              <Link href="/" className="flex items-center text-sm font-bold">
                {pathname === "/" && (
                  <ArrowUpRight className="md:w-8 md:h-8 w-4 h-4 md:-ml-10 -ml-5 mr-1" />
                )}
                Home
              </Link>
              {/* <Link
                href="/blogs"
                className="flex items-center text-sm font-bold"
              >
                {pathname === "/blogs" && (
                  <ArrowUpRight className="md:w-8 md:h-8 w-4 h-4 md:-ml-10 -ml-5 mr-1" />
                )}
                Blogs
              </Link> */}
              <Link
                href="/career"
                className="flex items-center text-sm font-bold"
              >
                {pathname === "/career" && (
                  <ArrowUpRight className="md:w-8 md:h-8 w-4 h-4 md:-ml-10 -ml-5 mr-1" />
                )}
                Career
              </Link>
              <Link
                href="/aboutus"
                className="flex items-center text-sm font-bold"
              >
                {pathname === "/aboutus" && (
                  <ArrowUpRight className="md:w-8 md:h-8 w-4 h-4 md:-ml-10 -ml-5 mr-1" />
                )}
                About Us
              </Link>
            </div>
            <div className="md:flex hidden flex-col gap-y-3">
              <Link
                href="/"
                className="flex items-center md:text-3xl font-bold"
              >
                {pathname === "/" && (
                  <ArrowUpRight className="w-8 h-8 md:-ml-10 mr-2" />
                )}
                Home
              </Link>
              {/* <Link
                href="/blogs"
                className="flex items-center md:text-3xl font-bold"
              >
                {pathname === "/blogs" && (
                  <ArrowUpRight className="w-8 h-8 md:-ml-10 mr-2" />
                )}
                Blogs
              </Link> */}
            </div>
            <div className="md:flex hidden flex-col gap-y-3">
              <Link
                href="/career"
                className="flex items-center md:text-3xl font-bold"
              >
                {pathname === "/career" && (
                  <ArrowUpRight className="md:w-8 md:h-8 w-4 h-4 md:-ml-10 mr-2" />
                )}
                Career
              </Link>
              <Link
                href="/aboutus"
                className="flex items-center md:text-3xl font-bold"
              >
                {pathname === "/aboutus" && (
                  <ArrowUpRight className="w-8 h-8 md:-ml-10 mr-2" />
                )}
                About Us
              </Link>
              {/* <Link
                href="/contact"
                className="flex items-center text-3xl font-medium"
              >
                {pathname === "/contact" && (
                  <ArrowUpRight className="w-8 h-8 -ml-10 mr-2" />
                )}
                Contact
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
