import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import Link from "next/link";
import styles from "../page.module.css";
import SignInLink from "./signInLink";
import SignOutLink from "./signOutLink";

export default async function NavBar() {
  const session = await getServerSession(authOptions);

  return (
    <nav className={styles.nav}>
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      {session?.user ? (
        <>
          <Link href={"/users"}>Users</Link>
          <SignOutLink />
        </>
      ) : (
        <SignInLink />
      )}
    </nav>
  );
}
