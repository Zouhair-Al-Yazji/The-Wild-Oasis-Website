import Image from "next/image";
import { signInAction } from "@/lib/actions";

export default function SignInButton() {
  return (
    <form action={signInAction}>
      <button className="group border-primary-700 bg-primary-800/50 text-primary-100 hover:border-primary-600 hover:bg-primary-700/60 hover:shadow-primary-900/20 focus:ring-accent-500 focus:ring-offset-primary-950 relative cursor-pointer overflow-hidden rounded-xs border px-8 py-4 text-lg font-medium backdrop-blur-sm transition-all duration-300 hover:shadow-lg focus:ring-2 focus:ring-offset-2 focus:outline-none active:scale-[0.98]">
        <div className="via-primary-600/10 absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent to-transparent transition-transform duration-700 group-hover:translate-x-[100%]"></div>

        <div className="relative flex items-center justify-center gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white p-1">
            <Image
              src="https://authjs.dev/img/providers/google.svg"
              alt="Google logo"
              height={16}
              width={16}
              className="transition-transform duration-200 group-hover:scale-110"
            />
          </div>
          <span className="tracking-wide">Continue with Google</span>
        </div>
      </button>
    </form>
  );
}
