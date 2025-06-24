"use client";

export default function InvestorDashboard() {
  return (
    <div className="min-h-screen pt-28 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      <h1 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-green-400 to-lime-400 text-transparent bg-clip-text">
        Investor Dashboard
      </h1>
      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
        View student requests, track milestones, and see the impact of your contributions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Sample Card */}
        <div className="bg-black/30 border border-gray-800 p-6 rounded-xl backdrop-blur-md shadow-lg">
          <h3 className="text-xl font-semibold text-green-400">Aarav Singh</h3>
          <p className="text-gray-300 text-sm mt-2 mb-4">Needs funding for a Data Science Master’s at IIT Bombay. 60% raised.</p>
          <button className="mt-auto bg-gradient-to-r from-green-500 to-lime-500 text-black px-4 py-2 rounded hover:opacity-90 transition">
            View Request
          </button>
        </div>

        {/* Add more cards here */}
      </div>
    </div>
  );
}
