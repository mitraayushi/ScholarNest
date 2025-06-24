"use client";

export default function SubmitRequestButton() {
  return (
    <button
      onClick={() => (window.location.href = "/Submit")}
      className="px-6 py-3 text-lg font-semibold rounded-xl bg-gradient-to-r from-green-500 to-lime-500 hover:opacity-90 transition shadow-lg shadow-green-500/20"
    >
      Submit Your Request
    </button>
  );
}
