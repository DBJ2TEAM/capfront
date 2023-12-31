import { getServerUrl } from '@/app/types/utils/getServerUrl';
import { useEffect, useState } from "react"
import { getCookie } from 'cookies-next';
import axios from 'axios';
import { contentModalAtom } from "@/app/molecules/Modal/ContentModal/ContentModalAtom"; 
import { useSetAtom, useAtom } from "jotai"
import { dateAtom, timeAtom } from "./reservationAtom";
import { selectedDateAtom } from './JAtom'; 


export default function useReserveModal({path, p_id}: {path?: string, p_id?: number}){
  const setModalOpen = useSetAtom(contentModalAtom)
  const [dateState, setDateState] = useAtom(dateAtom);
  const [timeState, setTimeState] = useAtom(timeAtom);
  const [selectedState, setSelectedState] = useAtom(selectedDateAtom);

  const handleModalOpen = () => {
    setModalOpen((prev) => ({
      ...prev,
      isContentModalOpen: !prev.isContentModalOpen
    }))
  }
  console.log(getCookie('professorId'))

  const handleReserve = async () => {
    try {
      const userId = getCookie('professorId')
      await axios.post(getServerUrl(`/${path}`), {
        requester : userId,
        receiver: p_id,
        time: selectedState.time,
        day: selectedState.date,
        status : "REQUESTED"
      });
      alert("예약 신청이 완료되었습니다.")
    } catch (error) {
      console.error('로그인 에러:', error);
    }
  }

  return{
    dateState,
    setDateState,
    timeState,
    setTimeState,
    handleModalOpen,
    handleReserve,
    setSelectedState,
  }
}