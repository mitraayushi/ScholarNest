"use client";
import Link from "next/link";
import ConnectWalletButton from "./ConnectWalletButton";
import { WalletSelector } from "./ui/WalletSelector";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 px-6 py-4 bg-black/60 backdrop-blur-md border-b border-gray-800">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-green-400">ScholarNest</div>
        <nav className="flex space-x-6 items-center text-sm">
          <Link href="/" className="text-gray-300 hover:text-green-400 transition">Home</Link>
          <Link href="/Submit" className="text-gray-300 hover:text-green-400 transition">Submit Request</Link>
          <Link href="/investor" className="text-gray-300 hover:text-green-400 transition">Investor Dashboard</Link>
          {/* <ConnectWalletButton/> */}
          <WalletSelector/>
        </nav>
      </div>
    </header>
  );
}
