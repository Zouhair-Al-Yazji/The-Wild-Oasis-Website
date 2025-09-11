"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn } from "./auth";
import { supabase } from "./supabase";
import { type Booking, getBooking, getBookings } from "./data-service";

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

export async function deleteBookingAction(bookingId: number) {
  const session = await auth();
  if (!session?.user) {
    throw new Error("You must logged in to perform this action");
  }

  const bookings = await getBookings(Number(session.user.guestId));
  const bookingIds = bookings.map((booking: Booking) => booking.id + "");

  if (!bookingIds.includes(bookingId + "")) {
    throw new Error("You are not allowed to delete this booking");
  }

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) {
    throw new Error("Booking could not be deleted");
  }

  revalidatePath("/account/reservations");
}
