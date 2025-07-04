"use client";

import { useState } from "react";
import StudentModal from "@/app/components/StudentModal";
import { WalletSelector } from "../ui/WalletSelector";
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { useWalletClient } from '@thalalabs/surf/hooks';
import { aptosClient } from '../utils/aptosClient';
import { toast } from 'sonner';
import { SNEST_ABI } from "@/app/utils/predict"

export default function InvestorDashboard() {
  const [showModal, setShowModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const { account, connected, disconnect, wallet } = useWallet();
  // Uncomment and use the wallet client hook to get the client instance
  const { client } = useWalletClient();
  const address = "0x5a5d125b5d1c3b57cc8b0901196139bff53c53d7d27dc8c27edea4190fa7f381";

  const donateInititate = async (amount) => {
    if (!client) {
      return;
    }

    try {
      const committedTransaction = await client.useABI(SNEST_ABI).transfer({
        type_arguments: [],
        arguments: [address, amount * 100000000], // Convert to micro SNEST
      });
      const executedTransaction = await aptosClient().waitForTransaction({
        transactionHash: committedTransaction.hash,
      });
      // queryClient.invalidateQueries({
      //   queryKey: ["message-content"],
      // });
      toast(
        <span style={{ fontSize: 15, fontWeight: 400 }}>
          Transaction successful! <br />
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
        </span>
      );
    } catch (error) {
      console.error(error);
    }
  };

  const students = [
    {
      name: "Aarav Singh",
      course: "Data Science Master’s at IIT Bombay",
      raised: "60%",
      tokenAmount: 10,
      careerGoal: "To become a leading AI researcher and help automate sustainable development in India.",
      achievements: "Top 1% in GATE, Published research on AI in Education, Interned at DRDO.",
      linkedin: "https://linkedin.com/in/aarav-singh",
      certificates: "https://drive.google.com/folder/aarav-certs"
    },
    {
      name: "Sneha Verma",
      course: "MBA at IIM Ahmedabad",
      raised: "45%",
      tokenAmount: 8,
      careerGoal: "To become a socially responsible business leader in rural India.",
      achievements: "CAT 99.8 percentile, Founded student NGO, Winner of Social Impact Challenge.",
      linkedin: "https://linkedin.com/in/sneha-verma",
      certificates: "https://drive.google.com/folder/sneha-certs"
    },
    {
      name: "Rohit Das",
      course: "MBBS at AIIMS Delhi",
      raised: "70%",
      tokenAmount: 12,
      careerGoal: "To open affordable clinics in underserved regions of India.",
      achievements: "NEET Top 100, Published article on rural health, Volunteered for Red Cross.",
      linkedin: "https://linkedin.com/in/rohit-das",
      certificates: "https://drive.google.com/folder/rohit-certs"
    },
    {
      name: "Meera Iyer",
      course: "B.Tech in Computer Science at NIT Trichy",
      raised: "30%",
      tokenAmount: 6,
      careerGoal: "To build AI-powered edtech tools for underprivileged students.",
      achievements: "Smart India Hackathon finalist, Google Scholar, National Science Fair winner.",
      linkedin: "https://linkedin.com/in/meera-iyer",
      certificates: "https://drive.google.com/folder/meera-certs"
    }
  ];

  return (
    <div className="min-h-screen pt-28 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      <h1 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-green-400 to-lime-400 text-transparent bg-clip-text">
        Investor Dashboard
      </h1>
      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
        View student requests, track milestones, and see the impact of your contributions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {students.map((student, index) => (
          <div key={index} className="bg-black/30 border border-gray-800 p-6 rounded-xl backdrop-blur-md shadow-lg">
            <h3 className="text-xl font-semibold text-green-400">{student.name}</h3>
            <p className="text-gray-300 text-sm mt-2 mb-4">
              Needs funding for a {student.course}. {student.raised} raised.<br />
              <span className="text-lime-400 font-bold">Token Amount: {student.tokenAmount} SNEST</span>
            </p>
            <button
              onClick={() => {
                setSelectedStudent(student);
                setShowModal(true);
              }}
              className="mt-auto bg-gradient-to-r from-green-500 to-lime-500 text-black px-4 py-2 rounded hover:opacity-90 transition"
            >
              View Request
            </button>
            <button
              onClick={() => donateInititate(student.tokenAmount)}
              className="mt-2 w-full bg-gradient-to-r from-lime-500 to-green-500 text-black px-4 py-2 rounded font-semibold hover:opacity-90 transition"
            >
              Donate Now
            </button>
          </div>
        ))}
      </div>

      {showModal && selectedStudent && (
        <StudentModal
          student={selectedStudent}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
