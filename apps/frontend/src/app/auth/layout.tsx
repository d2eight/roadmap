export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-10 min-h-screen max-w-2xl mx-auto flex items-center">
      <div className="w-full">{children}</div>
    </div>
  );
}
