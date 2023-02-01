"use client";

import { signIn } from "next-auth/react";
import { FormEventHandler } from "react";

export default function Login() {
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email: "vmikyan@gmail.com",
      password: "123456",
      redirect: false,
    });
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first">First name:</label>
        <input type="text" id="first" name="first" />
        <label htmlFor="last">Last name:</label>
        <input type="text" id="last" name="last" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
