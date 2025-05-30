import { SidebarDemo } from "@/components/Dashboard";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <SidebarDemo />
      {children}
    </section>
  );
}
