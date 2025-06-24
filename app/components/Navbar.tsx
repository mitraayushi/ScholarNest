"use client";
import Link from "next/link";
import ConnectWalletButton from "./ConnectWalletButton";
import { WalletSelector } from "./ui/WalletSelector";
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { useWalletClient } from '@thalalabs/surf/hooks';
import { aptosClient } from '../utils/aptosClient';
import { toast } from '@/app/components/ui/use-toast';
import { SNEST_ABI } from "@/app/utils/predict"
export default function Navbar() {

  const { account, connected, disconnect, wallet } = useWallet();
  // Uncomment and use the wallet client hook to get the client instance
  const { client } = useWalletClient();
  const address = "0x5a5d125b5d1c3b57cc8b0901196139bff53c53d7d27dc8c27edea4190fa7f381";

  const mintInititate = async () => {
    if (!client) {
      return;
    }

    try {
      const committedTransaction = await client.useABI(SNEST_ABI).mint({
        type_arguments: [],
        arguments: [account?.address.toString(), 1000000000],
      });
      const executedTransaction = await aptosClient().waitForTransaction({
        transactionHash: committedTransaction.hash,
      });
      // queryClient.invalidateQueries({
      //   queryKey: ["message-content"],
      // });
      toast({
        title: "Transaction successful!",
        description: (
          <>
            Hash:{' '}
            <a
              href={`https://explorer.aptoslabs.com/txn/${executedTransaction.hash}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
              style={{ fontWeight: 400 }}
            >
              {executedTransaction.hash.slice(0, 8)}...{executedTransaction.hash.slice(-6)}
            </a>
          </>
        ),
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <header className="fixed top-0 w-full z-50 px-6 py-4 bg-black/60 backdrop-blur-md border-b border-gray-800">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-green-400">ScholarNest</div>
        <nav className="flex space-x-6 items-center text-sm">
          <Link href="/" className="text-gray-300 hover:text-green-400 transition">Home</Link>
          <Link href="/Submit" className="text-gray-300 hover:text-green-400 transition">Submit Request</Link>
          <Link href="/investor" className="text-gray-300 hover:text-green-400 transition">Investor Dashboard</Link>
          {/* <ConnectWalletButton/> */}

          <WalletSelector />
          <button
            className="bg-gradient-to-r from-green-500 to-lime-500 text-black px-4 py-2 rounded font-semibold hover:opacity-90 transition"
            onClick={() => {
              // TODO: Implement claim logic here
              mintInititate()
              alert('Claim 10 SNEST token clicked!');
            }}
          >
            Claim 10 SNEST token
          </button>
        </nav>
      </div>
    </header>
  );
}
