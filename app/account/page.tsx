import { auth } from "@/lib/auth";
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
  const email = session.user.email || "No email provided";

  return (
    <div className="mb-7">
      <h2 className="text-accent-400 mb-3 text-2xl font-semibold">
        Welcome, {firstName}
      </h2>
      <p className="text-text-400">Email: {email}</p>
      {session.user.guestId && (
        <p className="text-text-400 text-sm">
          Guest ID: {session.user.guestId}
        </p>
      )}
    </div>
  );
}
