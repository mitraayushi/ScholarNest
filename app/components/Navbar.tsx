"use client";

import ConnectWalletButton from "./ConnectWalletButton";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 px-6 py-4 bg-black/60 backdrop-blur-md border-b border-gray-800">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-green-400">SeedEdu</div>
        <nav className="flex space-x-6 items-center text-sm">
          <a href="/" className="text-gray-300 hover:text-green-400 transition">Home</a>
          <a href="/submit" className="text-gray-300 hover:text-green-400 transition">Submit Request</a>
          <a href="/investor" className="text-gray-300 hover:text-green-400 transition">Investor Dashboard</a>
          <ConnectWalletButton/>
        </nav>
      </div>
    </header>
  );
}
