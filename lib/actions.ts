"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth, signIn } from "./auth";
import { type Booking, BookingDataAction, getBookings } from "./data-service";
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

export async function deleteBookingAction(bookingId: number) {
  const session = await auth();
  if (!session?.user) {
    throw new Error("You must logged in to perform this action");
  }

  const bookings = await getBookings(Number(session.user.guestId));
  const bookingIds = bookings.map((booking: Booking) => booking.id.toString());

  if (!bookingIds.includes(bookingId.toString())) {
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

export async function updateBookingAction(formData: FormData) {
  const session = await auth();
  if (!session?.user)
    throw new Error("You must logged in to perform this action");

  const bookingId = Number(formData.get("bookingId"));

  const bookings = await getBookings(Number(session.user.guestId));
  const bookingIds = bookings.map((booking: Booking) => booking.id.toString());

  if (!bookingIds.includes(bookingId.toString())) {
    throw new Error("You are not allowed to delete this booking");
  }

  const updateData = {
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations")?.slice(0, 1000),
  };

  const { error } = await supabase
    .from("bookings")
    .update(updateData)
    .eq("id", bookingId);

  if (error) {
    throw new Error("Booking could not be updated");
  }

  revalidatePath(`account/reservations/edit/${bookingId}`);
  revalidatePath("account/reservations");

  redirect("/account/reservations");
}

export async function createBookingAction(
  bookingData: BookingDataAction,
  formData: FormData,
) {
  const session = await auth();
  if (!session?.user)
    throw new Error("You must logged in to perform this action");

  const newBooking = {
    ...bookingData,
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations")?.slice(0, 1000),
    guestId: session.user.guestId,
    totalPrice: bookingData.cabinPrice,
    extrasPrice: 0,
    hasBreakfast: false,
    status: "unconfirmed",
    isPaid: false,
  };

  const { error } = await supabase.from("bookings").insert([newBooking]);

  if (error) {
    throw new Error("Booking could not be created");
  }

  revalidatePath(`/cabins/${bookingData.cabinId}`);
  redirect("/cabins/thankyou");
}
