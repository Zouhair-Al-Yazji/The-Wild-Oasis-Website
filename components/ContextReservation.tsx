"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  use,
  useState,
} from "react";
import { type DateRange } from "react-day-picker";

type ReservationContextType = {
  range: DateRange;
  setRange: Dispatch<SetStateAction<DateRange>>;
  resetRange: () => void;
};

const ReservationContext = createContext<ReservationContextType | undefined>(
  undefined,
);
const initialState: DateRange = { from: undefined, to: undefined };

function ReservationProvider({ children }: { children: ReactNode }) {
  const [range, setRange] = useState<DateRange>(initialState);
  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext>
  );
}

function useReservation() {
  const context = use(ReservationContext);

  if (context === undefined)
    throw new Error(
      "reservation Context was used outside the ReservationProvider",
    );

  return context;
}

export { ReservationProvider, useReservation };
