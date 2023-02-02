"use client";

import { signOut } from "next-auth/react";

export default function SignOutLink() {
  return <span onClick={() => signOut()}>Sign out</span>;
}
