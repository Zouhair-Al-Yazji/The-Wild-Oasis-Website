// "use client";

// import { TrashIcon } from "@heroicons/react/24/solid";
// import { useTransition } from "react";
// import SpinnerMini from "./SpinnerMini";

// export default function DeleteReservation({
//   bookingId,
//   onDelete,
// }: {
//   bookingId: number;
//   onDelete: (bookingId: number) => void;
// }) {
//   const [isPending, startTransition] = useTransition();

//   function handleDelete() {
//     if (confirm("Are you sure to delete this booking")) {
//       startTransition(() => onDelete(bookingId));
//     }
//   }

//   return (
//     <button
//       onClick={handleDelete}
//       className="group text-primary-300 hover:bg-accent-600 hover:text-primary-900 flex flex-grow cursor-pointer items-center gap-2 px-3 text-xs font-bold uppercase transition-colors"
//     >
//       {isPending ? (
//         <SpinnerMini pendingLabel="deleting" />
//       ) : (
//         <>
//           <TrashIcon className="text-primary-600 group-hover:text-primary-800 h-5 w-5 transition-colors" />
//           <span className="mt-1">Delete</span>
//         </>
//       )}
//     </button>
//   );
// }

"use client";

import { Trash2 } from "lucide-react";
import { useTransition } from "react";
import SpinnerMini from "./SpinnerMini";

export default function DeleteReservation({
  bookingId,
  onDelete,
}: {
  bookingId: number;
  onDelete: (bookingId: number) => void;
}) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    if (
      confirm(
        "Are you sure you want to cancel this reservation? This action cannot be undone.",
      )
    ) {
      startTransition(() => onDelete(bookingId));
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className="flex h-full w-full cursor-pointer justify-center gap-2 px-4 py-3 text-red-400 transition-colors hover:bg-red-600/20 hover:text-red-300 disabled:cursor-not-allowed disabled:opacity-50"
      title="Cancel Reservation"
    >
      {isPending ? (
        <SpinnerMini pendingLabel="Deleting..." />
      ) : (
        <>
          <Trash2 className="h-4 w-4" />
          <span className="text-sm font-medium">Delete</span>
        </>
      )}
    </button>
  );
}
