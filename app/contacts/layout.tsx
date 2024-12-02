export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="max-w-full text-center justify-center">
        {children}
      </div>
    </section>
  );
}
