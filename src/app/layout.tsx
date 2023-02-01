import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import Link from "next/link";
import styles from "./page.module.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav className={styles.nav}>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/users"}>Users</Link>
          <Link href={"/auth/login"}>Login</Link>
        </nav>
        <br />
        <pre>{JSON.stringify(session, null, 2)}</pre>
        <div>{children}</div>
      </body>
    </html>
  );
}
