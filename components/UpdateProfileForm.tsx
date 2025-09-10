import { updateGuestAction } from "@/lib/actions";
import type { Guest } from "@/lib/data-service";
import Image from "next/image";
import SubmitButton from "@/components/SubmitButton";

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
      className="bg-primary-900 flex flex-col gap-6 px-12 py-8 text-lg"
    >
      <div className="space-y-2">
        <label>Full name</label>
        <input
          name="fullName"
          disabled
          defaultValue={fullName}
          className="bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-3 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input
          disabled
          defaultValue={email}
          name="email"
          className="bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-3 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
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

      <div className="space-y-2">
        <label htmlFor="nationalID">National ID number</label>
        <input
          name="nationalID"
          className="bg-primary-200 text-primary-800 w-full rounded-xs px-5 py-3 shadow-sm"
          defaultValue={nationalID}
        />
      </div>

      <div className="flex items-center justify-end gap-6">
        <SubmitButton pendingLabel="Updating">Update profile</SubmitButton>
      </div>
    </form>
  );
}
