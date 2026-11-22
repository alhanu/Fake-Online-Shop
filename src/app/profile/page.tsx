"use client";

import { useUser } from "@/hooks/useUser";

export default function ProfilePage() {
  const { data: user, isLoading, isError, refetch } = useUser();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <div className="h-10 w-10 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
        <p className="text-gray-600">Loading profile...</p>
      </div>
    );
  }

  if (isError || !user) {
    return (
      <div className="text-center py-20">
        <p className="text-red-600 mb-4">Could not load the user profile.</p>
        <button
          onClick={() => refetch()}
          className="bg-blue-600 text-white px-5 py-2 hover:bg-blue-700"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md p-6 sm:p-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 text-2xl font-bold text-gray-600 uppercase">
          {user.name.firstname[0]}
        </div>
        <div>
          <h1 className="text-2xl font-semibold capitalize">
            {user.name.firstname} {user.name.lastname}
          </h1>
          <p className="text-gray-500">@{user.username}</p>
        </div>
      </div>

      <div className="space-y-3 text-sm">
        <p>
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <p>
          <span className="font-semibold">Phone:</span> {user.phone}
        </p>
        <p className="capitalize">
          <span className="font-semibold">Address:</span> {user.address.number}{" "}
          {user.address.street}, {user.address.city} {user.address.zipcode}
        </p>
      </div>
    </div>
  );
}
