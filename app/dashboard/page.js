"use client";

import { useRouter } from "next/navigation";
import { signOut, useSession } from "../../lib/auth-client";

export default function Dashboard() {
  const { data: session, isPending } = useSession();
  const router = useRouter()

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
const handleLogout = async () => {
  await signOut(),
  router.push('/')
}
// console.log(session.user)


  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col gap-4 p-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p>Welcome, {session.user.name }.</p>
      <p> email: {session.user.email}</p>
      <img
        src={session.user.image}
        alt="userimage" referrerPolicy="no referrer"
        
      />
      <button
        className="w-fit rounded bg-gray-900 px-4 py-2 text-white"
        onClick={handleLogout}
      >
        Sign out
      </button>
    </main>
  );
}