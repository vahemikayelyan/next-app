export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <p>This is Users page</p>
      {children}
    </section>
  );
}
