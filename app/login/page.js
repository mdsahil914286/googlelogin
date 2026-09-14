"use client";

import { useState } from "react";
import { signIn } from "../../lib/auth-client";

function Login() {
  const [error, setError] = useState("");

  const handleGoogleLogin = async () => {
    setError("");

    const { error: signInError } = await signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
    });

    if (signInError) {
      setError(signInError.message || "Unable to sign in with Google.");
    }
  };

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center gap-4 px-6">
      <h1 className="text-3xl font-bold">Sign in</h1>
      <p>Sign in with Google to continue.</p>
      <button
        onClick={handleGoogleLogin}
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Continue with Google
      </button>
      {error && <p className="text-red-600">{error}</p>}
    </main>
  );
}

export default Login;