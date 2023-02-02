"use client";

import { signIn } from "next-auth/react";
import { FormEventHandler, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      callbackUrl: "/users",
    });
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first">E-mail:</label>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label htmlFor="last">Password:</label>
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
