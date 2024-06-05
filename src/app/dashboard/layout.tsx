export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full max-w-screen-2xl bg-muted/40">
      {children}
    </div>
  );
}
