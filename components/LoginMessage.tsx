import Link from "next/link";

export default function LoginMessage() {
  return (
    <div className="from-primary-900/60 to-primary-800/40 border-primary-700/30 grid rounded-xs border bg-gradient-to-br">
      <p className="self-center py-12 text-center text-xl">
        Please{" "}
        <Link href="/login" className="text-accent-500 underline">
          login
        </Link>{" "}
        to reserve this
        <br /> cabin right now
      </p>
    </div>
  );
}
