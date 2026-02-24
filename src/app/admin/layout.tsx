import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getSession, logout } from "@/lib/auth-custom";
import AdminSidebar from "@/components/admin/AdminSidebar";

async function handleLogout() {
  "use server";
  await logout();
  redirect("/login");
}

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  const { user } = session;

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-50 font-outfit overflow-hidden">
      {/* Sidebar Component (Handles mobile toggle internally) */}
      <AdminSidebar user={user} logoutAction={handleLogout} />

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-gray-50/50">
        <div className="p-4 md:p-10 max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
