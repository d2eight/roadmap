export default async function GuidesPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section id="guides-section" className="xl:px-[40px] py-[50px] px-[20px]">
      {children}
    </section>
  );
}
