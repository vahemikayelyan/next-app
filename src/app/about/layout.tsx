export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <p>This is about page</p>
      {children}
    </section>
  );
}
