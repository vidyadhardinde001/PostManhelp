"use client";

import Link from "next/link";

const SignIn: React.FC = () => {
  return (
    <div className="h-screen bg-blue-100 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-sm">
        <div className="flex justify-center mb-6">
          <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
            <svg
              className="h-6 w-6 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
        </div>

        <h2 className="text-xl font-semibold text-center mb-4">
          Login to your account
        </h2>

        {/* <Link href="/admin" className="w-full bg-black text-white py-3 rounded-lg mb-6 hover:bg-gray-800 block text-center">
          Admin Login
        </Link> */}

        <Link href="/postman" className="w-full bg-black text-white py-3 rounded-lg mb-6 hover:bg-gray-800 block text-center">
          Postman Login
        </Link>

        <Link href="/sender" className="w-full bg-black text-white py-3 rounded-lg mb-6 hover:bg-gray-800 block text-center">
          Sender Login
        </Link>

        <Link href="/user" className="w-full bg-black text-white py-3 rounded-lg mb-6 hover:bg-gray-800 block text-center">
          Reciever Login
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
