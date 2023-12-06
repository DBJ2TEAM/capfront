/** @jsxImportSource @emotion/react */
import useReserveModal from "./useReserveModal"

export default function ReserveModal(){

  const {
    dateState,
    setDateState,
    timeState,
    setTimeState,
    handleModalOpen,
  } = useReserveModal()

  return(
    <div css={layout}>
      <div>
        {dateState} 요일 {timeState} 시간 예약
      </div>
      <div>
        <button 
          onClick={handleModalOpen}
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