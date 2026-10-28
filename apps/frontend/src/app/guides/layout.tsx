export default async function GuidesPageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section id="guides-section" className="xl:px-10 py-12.5 px-5">
            {children}
        </section>
    );
}
