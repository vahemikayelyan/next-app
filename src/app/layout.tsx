import NavBar from "./navbar/navbar";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        {await NavBar()}
        <br />
        <main>{children}</main>
      </body>
    </html>
  );
}
