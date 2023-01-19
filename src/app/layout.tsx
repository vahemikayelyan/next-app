import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav>
          <Link href={"/"} style={{ marginRight: 10 }}>
            Home
          </Link>
          <Link href={"/about"}>About</Link>
        </nav>
        <br />
        <div>{children}</div>
      </body>
    </html>
  );
}
