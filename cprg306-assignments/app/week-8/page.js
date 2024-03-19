"use client";
// Import the useUserAuth hook
import React from "react";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Sign in to Firebase with GitHub authentication
  const signIn = async () => {
    await gitHubSignIn();
  };

  // Sign out of Firebase
  const signOut = async () => {
    await firebaseSignOut();
  };

  return (
    <div className="flex justify-center">
      {user ? (
        <div className="flex flex-col items-center">
          <p className="m-5 text-center text-3xl">
            Welcome, {user.displayName} ({user.email})
          </p>
          <div>
            <Link
              className="bg-yellow-500 text-black text-2xl rounded p-2"
              href="/week-8/shopping-list"
            >
              Shopping List
            </Link>
          </div>
          <div>
            <button
              className="bg-yellow-500 text-black rounded mt-5"
              onClick={signOut}
            >
              Sign out
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-center mb-40 text-4xl">Please sign in</p>
          <button
            className="bg-yellow-500 text-black text-2xl rounded p-5"
            onClick={signIn}
          >
            Sign in with GitHub
          </button>
        </div>
      )}
    </div>
  );
}