"use client";

import SubmitRequestButton from "./SubmitRequestButton";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[100vh] flex flex-col items-center justify-center px-6 py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">
          Empowering Future Leaders with Blockchain
        </h1>
        <p className="mt-6 text-lg text-gray-300">
          Join a decentralized funding platform where students connect directly with donors to fund their education through smart contracts.
        </p>
        <div className="mt-10">
          <SubmitRequestButton />
        </div>
      </div>
    </section>
  );
}
