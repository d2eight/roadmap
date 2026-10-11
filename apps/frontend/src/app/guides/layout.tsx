export default async function GuidesPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      id="guides-section"
      className="xl:py-[50px] xl:px-[40px] py-0 px-[50px]"
    >
      {children}
    </section>
  );
}
