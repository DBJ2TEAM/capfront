import { atom } from "jotai";

export const reservationStateAtom= atom<{
  nowState: "select" | "consult" | "equipment" | "lectureRoom"
}>({
  nowState: "select",
});