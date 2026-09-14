"use client";

import { signOut, useSession } from "../../lib/auth-client";

export default function Dashboard() {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return <main className="p-8">Loading...</main>;
  }

  if (!session) {
    return (
      <main className="p-8">
        <p>You are not signed in.</p>
        <a className="text-blue-600 underline" href="/login">
          Go to login
        </a>
      </main>
    );
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col gap-4 p-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p>Welcome, {session.user.name }.</p>
      <p> email: {session.user.email}</p>
      <img
        src={session.user.image}
        alt={session.user.name}
        className="rounded-full"
      />
      <button
        className="w-fit rounded bg-gray-900 px-4 py-2 text-white"
        onClick={() => signOut()}
      >
        Sign out
      </button>
    </main>
  );
}