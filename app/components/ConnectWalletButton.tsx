"use client";
export default function ConnectWalletButton() {
    return (
        <button
            className="px-4 py-2 rounded bg-green-500 hover:bg-green-400 text-black font-medium transition"
            onClick={() => alert("Connect Wallet clicked")}
          >
            Connect Wallet
          </button>
    );
}