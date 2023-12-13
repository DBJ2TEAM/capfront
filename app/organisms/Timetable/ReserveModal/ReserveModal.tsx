/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import useReserveModal from "./useReserveModal"

export default function ReserveModal({path, p_id}: {path?: string, p_id?: number}){

  const {
    dateState,
    setDateState,
    timeState,
    setTimeState,
    handleModalOpen,
    handleReserve,
    setSelectedState,
  } = useReserveModal({path, p_id})
  useEffect(() => {
    setSelectedState({date: dateState, time: timeState})
  }, [])
  return(
    <div css={layout}>
      <div>
        {dateState} 요일 {timeState} 시간 예약
      </div>
      <div>
        <button 
          onClick={() => {handleModalOpen(); handleReserve()}}
        >확인</button>
      </div>
    </div>
  )
}

const layout = {
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "center",
  alignItems: "center",
  width: "400px",
  height: "500px",
}