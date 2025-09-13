import { auth } from "@/lib/auth";
import { Mail, User } from "lucide-react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Account",
};

export default async function Page() {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }
  const firstName = session.user.name?.split(" ").at(0) ?? "Guest";
  const fullName = session.user.name ?? "Guest User";
  const email = session.user.email || "No email provided";

  return (
    <div className="space-y-6">
      <div className="from-accent-400/10 to-accent-500/10 border-accent-400/20 rounded-sm border bg-gradient-to-r p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="bg-accent-400/20 rounded-sm p-3">
            <User className="text-accent-400 h-6 w-6" />
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="text-accent-400 mb-2 text-2xl font-bold md:text-3xl">
              Welcome back, {firstName}!
            </h1>
            <p className="text-text-400 text-sm md:text-base">
              Manage your account and view your reservations
            </p>
          </div>
        </div>
      </div>

      <div className="bg-primary-900/50 border-primary-800 rounded-sm border p-6 backdrop-blur-sm md:p-8">
        <h2 className="text-accent-400 mb-6 flex items-center gap-2 text-xl font-semibold">
          <User className="h-5 w-5" />
          Account Details
        </h2>

        <div className="space-y-4">
          <div className="bg-primary-800/30 border-primary-700/50 flex items-start gap-3 rounded-xs border p-4">
            <div className="bg-primary-700 rounded-xs p-2">
              <User className="text-primary-300 h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-text-400 mb-1 text-sm">Full Name</p>
              <p className="text-text-100 font-medium break-words">
                {fullName}
              </p>
            </div>
          </div>

          <div className="bg-primary-800/30 border-primary-700/50 flex items-start gap-3 rounded-xs border p-4">
            <div className="bg-primary-700 rounded-xs p-2">
              <Mail className="text-primary-300 h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-text-400 mb-1 text-sm">Email Address</p>
              <p className="text-text-100 font-medium break-all">{email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
