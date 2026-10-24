export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex-1 flex items-center p-10 min-h-full max-w-2xl mx-auto">
            {children}
        </div>
    );
}
