"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn } from "./auth";
import { supabase } from "./supabase";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function updateGuestAction(formData: FormData) {
  const session = await auth();
  if (!session?.user)
    throw new Error("You must logged in to perform this action");
  const [nationality, countryFlag] = (
    formData?.get("nationality") as string
  )?.split("%");
  const nationalID = formData.get("nationalID") as string;

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Please provide a valid national ID");

  const updateGuest = {
    countryFlag,
    nationality,
    nationalID,
  };

  const { error } = await supabase
    .from("guests")
    .update(updateGuest)
    .eq("id", session.user.guestId);

  if (error) {
    console.error(error);
    throw new Error("Guest could not be updated");
  }

  revalidatePath("/account/profile");
}
