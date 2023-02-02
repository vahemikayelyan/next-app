"use client";

import { signIn } from "next-auth/react";

export default function SignInLink() {
  return <span onClick={() => signIn()}>Sign in</span>;
}
