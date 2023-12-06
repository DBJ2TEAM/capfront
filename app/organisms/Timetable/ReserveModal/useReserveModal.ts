import { useEffect, useState } from "react"
import { contentModalAtom } from "@/app/molecules/Modal/ContentModal/ContentModalAtom"; 
import { useSetAtom, useAtom } from "jotai"
import { dateAtom, timeAtom } from "./reservationAtom";

export default function useReserveModal(){
  const setModalOpen = useSetAtom(contentModalAtom)
  const [dateState, setDateState] = useAtom(dateAtom);
  const [timeState, setTimeState] = useAtom(timeAtom);

  const handleModalOpen = () => {
    setModalOpen((prev) => ({
      ...prev,
      isContentModalOpen: !prev.isContentModalOpen
    }))
  }
  return{
    dateState,
    setDateState,
    timeState,
    setTimeState,
    handleModalOpen,
  }
}