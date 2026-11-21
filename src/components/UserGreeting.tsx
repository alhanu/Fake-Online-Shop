"use client";

import Link from "next/link";
import { useUser } from "@/hooks/useUser";

export default function UserGreeting() {
  const { data: user, isLoading, isError } = useUser();

  let text = "";
  if (isLoading) {
    text = "Loading...";
  } else if (isError || !user) {
    text = "Hi, Guest";
  } else {
    text = `Hi, ${user.name.firstname}`;
  }

  return (
    <Link href="/profile" className="flex items-center gap-2">
      <span className="flex items-center justify-center w-9 h-9 rounded-full border-2 border-gray-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-5 h-5 text-gray-600"
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
        </svg>
      </span>
      <span className="hidden sm:inline text-sm capitalize">{text}</span>
    </Link>
  );
}
