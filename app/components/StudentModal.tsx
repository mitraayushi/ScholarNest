"use client";

interface Student {
  name: string;
  course: string;
  raised: string;
  careerGoal: string;
  achievements: string;
  linkedin: string;
  certificates: string;
}

export default function StudentModal({
  student,
  onClose,
}: {
  student: Student;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
      <div className="bg-gray-900 border border-gray-700 rounded-xl max-w-xl w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-400 hover:text-white text-xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-green-400 mb-2">{student.name}</h2>
        <p className="text-sm text-gray-400 mb-2">{student.course}</p>
        <p className="text-sm text-gray-300 mb-4">Career Goal: {student.careerGoal}</p>
        <p className="text-sm text-gray-300 mb-4">Achievements: {student.achievements}</p>
        <p className="text-sm text-gray-400 mb-2">
          <a
            href={student.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-green-400"
          >
            LinkedIn Profile
          </a>
        </p>
        <p className="text-sm text-gray-400 mb-6">
          <a
            href={student.certificates}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-green-400"
          >
            Certificate Folder
          </a>
        </p>
        <button
          onClick={() => alert("Donation flow coming soon...")}
          className="w-full bg-gradient-to-r from-green-500 to-lime-500 text-black font-semibold py-2 rounded hover:opacity-90 transition"
        >
          Donate Now
        </button>
      </div>
    </div>
  );
}
