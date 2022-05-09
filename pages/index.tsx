import { Canvas } from "@react-three/fiber";
import type { NextPage } from "next";
import Head from "next/head";
import Shader from "../components/shader";

const R3F = () => {
  return (
    <>
      <Shader />
    </>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>zamkara&apos;s sheet</title>
      </Head>
      <main className="md:grid md:grid-rows-1 md:grid-cols-2 p-4 md:h-full topo">
        <Canvas className="bg-[#21243a] hidden md:block rounded-2xl border border-[#3B4252]">
          <R3F />
        </Canvas>
        <div className="flex flex-col justify-center items-center text-[#E5E9F0] md:px-20 px-2 text-center">
          <p className="font-bold text-xl md:text-3xl m-0 mt-8 md:mt-0">
            Holla, I&apos;m{" "}
            <span className="text-[#a38aba]">Zamkara</span>!
          </p>
          <p className="m-0 text-xs md:text-sm">
            (My Telegram&apos;s nickname is &quot;zamkara&quot; tho.)
          </p>
          <p className="w-full border text-sm md:text-base border-[#3B4252] bg-[#21243a] rounded-lg px-4 py-3 mt-4 text-left">
            Hello, we can know each other&apos;s, you just know my name is zamkara. I&apos;m a 20 y&apos;o
            boy currently studying on Universitas Amikom Purwokerto. I live in
            Java Center, Indonesia. I&apos;m have many friends, and if you would like to be one of them, I will be very happy.
          </p>
          <p className="font-bold text-xl md:text-2xl m-0 mt-4">let's talk</p>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3 my-4">
            <a
              href="https://zamprjkt.github.io"
              className="block w-full px-4 py-3 bg-[#292e39] border border-[#a38aba] bg-transparent rounded-md text-xs md:text-base hover:bg-[#a38aba] hover:text-[#2e3440] transition-all duration-200 ease-linear hover:rounded-3xl"
            >
              Site
            </a>
            <a
              href="https://github.com/zamprjkt"
              className="block w-full px-4 py-3 bg-[#292e39] border border-[#a38aba] bg-transparent rounded-md text-xs md:text-base hover:bg-[#a38aba] hover:text-[#2e3440] transition-all duration-200 ease-linear hover:rounded-3xl"
            >
              GitHub Profile
            </a>
            <a
              href="https://www.linkedin.com/in/zamprjkt"
              className="block w-full px-4 py-3 bg-[#292e39] border border-[#a38aba] bg-transparent rounded-md text-xs md:text-base hover:bg-[#a38aba] hover:text-[#2e3440] transition-all duration-200 ease-linear hover:rounded-3xl"
            >
              LinkedIn Profile
            </a>
            <a
              href="https://www.instagram.com/zam.tsu"
              className="block w-full px-4 py-3 border bg-[#292e39] border-[#a38aba] bg-transparent rounded-md text-xs md:text-base hover:bg-[#a38aba] hover:text-[#2e3440] transition-all duration-200 ease-linear hover:rounded-3xl"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com/zamkara.."
              className="block w-full px-4 py-3 border bg-[#292e39] border-[#a38aba] bg-transparent rounded-md text-xs md:text-base hover:bg-[#a38aba] hover:text-[#2e3440] transition-all duration-200 ease-linear hover:rounded-3xl"
            >
              Twitter
            </a>
            <a
              href="https://t.me/zamkara"
              className="block w-full px-4 py-3 border bg-[#292e39] border-[#a38aba] bg-transparent rounded-md text-xs md:text-base hover:bg-[#a38aba] hover:text-[#2e3440] transition-all duration-200 ease-linear hover:rounded-3xl"
            >
              Telegram Portal
            </a>
            <a
              href="mailto:zamkara@icoud.com"
              className="block w-full px-4 py-3 bg-[#292e39] border border-[#a38aba] bg-transparent rounded-md text-xs md:text-base hover:bg-[#a38aba] hover:text-[#2e3440] transition-all duration-200 ease-linear hover:rounded-3xl"
            >
              Personal Email
            </a>
            <a
              href="mailto:21SA1116@mhs.amikompurwokerto.ac.id"
              className="block w-full px-4 py-3 bg-[#292e39] border border-[#a38aba] bg-transparent rounded-md text-xs md:text-base hover:bg-[#a38aba] hover:text-[#2e3440] transition-all duration-200 ease-linear hover:rounded-3xl"
            >
              Student Email
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
