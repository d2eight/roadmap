export default async function PromptingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      id="prompting-section"
      className="h-[calc(100vh-70px)] xl:py-[50px] xl:px-[20px] py-0 px-0"
    >
      {children}
    </section>
  );
}
