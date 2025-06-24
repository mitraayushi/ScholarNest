"use client";

export default function SubmitRequest() {
  return (
    <div className="min-h-screen pt-28 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      <h1 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-green-400 to-lime-400 text-transparent bg-clip-text">
        Submit Your Educational Request
      </h1>
      <form className="max-w-2xl mx-auto bg-black/30 backdrop-blur-md p-8 rounded-xl shadow-lg space-y-6 border border-gray-800">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <textarea
          placeholder="Describe your educational goals and how the funding will help"
          className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded h-40 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        ></textarea>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm text-gray-300 mb-1">10th Marksheet</label>
            <input
              type="file"
              name="10th-marksheet"
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full text-sm bg-gray-800 text-white border border-gray-700 rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">12th Marksheet</label>
            <input
              type="file"
              name="12th-marksheet"
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full text-sm bg-gray-800 text-white border border-gray-700 rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Admission Letter</label>
            <input
              type="file"
              name="admission-letter"
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full text-sm bg-gray-800 text-white border border-gray-700 rounded p-2"
              required
            />
          </div>
        </div>

        <label className="block text-sm text-gray-300">Career Goals</label>
        <textarea
          name="career-goal"
          rows={4}
          className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        ></textarea>

        <label className="block text-sm text-gray-300">Scholarship Amount (INR)</label>
        <input
          type="number"
          name="scholarship-amount"
          className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <label className="block text-sm text-gray-300">Achievements</label>
        <textarea
          name="achievements"
          rows={4}
          className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        ></textarea>

        <label className="block text-sm text-gray-300">LinkedIn Profile</label>
        <input
          type="url"
          name="linkedin"
          placeholder="https://www.linkedin.com/in/your-profile"
          className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <label className="block text-sm text-gray-300">Google Drive Folder for Certificates</label>
        <input
          type="url"
          name="drive-folder"
          placeholder="https://drive.google.com/your-folder"
          className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-500 to-lime-500 text-black py-3 font-semibold rounded hover:opacity-90 transition"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}
