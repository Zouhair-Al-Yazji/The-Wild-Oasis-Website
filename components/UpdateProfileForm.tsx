import { updateGuestAction } from "@/lib/actions";
import type { Guest } from "@/lib/data-service";
import Image from "next/image";
import SubmitButton from "@/components/SubmitButton";
import { Input } from "./ui/input";

export default function UpdateProfileForm({
  children,
  guest,
}: {
  children: React.ReactNode;
  guest: Guest;
}) {
  const { email, fullName, countryFlag, nationalID } = guest;

  return (
    <form
      action={updateGuestAction}
      className="from-primary-900/60 to-primary-800/40 border-primary-700/30 space-y-6 overflow-hidden rounded-xs border bg-gradient-to-br p-6"
    >
      <div className="space-y-3">
        <label>Full name</label>
        <Input
          name="fullName"
          disabled
          defaultValue={fullName}
          className="text-primary-80 disabled:bg-gray-600 disabled:text-gray-200"
        />
      </div>

      <div className="space-y-3">
        <label>Email address</label>
        <Input
          name="email"
          disabled
          defaultValue={email}
          className="text-primary-80 disabled:bg-gray-600 disabled:text-gray-200"
        />
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Where are you from?</label>
          <Image
            src={countryFlag ?? ""}
            alt="Country flag"
            width={20}
            height={20}
            priority
            className="rounded-xs"
          />
        </div>

        {children}
      </div>

      <div className="space-y-3">
        <label htmlFor="nationalID">National ID number</label>
        <Input
          name="nationalID"
          defaultValue={nationalID}
          className="bg-primary-950/50 border-primary-700/30"
        />
      </div>

      <div className="flex items-center justify-end gap-6">
        <SubmitButton pendingLabel="Updating">Update profile</SubmitButton>
      </div>
    </form>
  );
}
