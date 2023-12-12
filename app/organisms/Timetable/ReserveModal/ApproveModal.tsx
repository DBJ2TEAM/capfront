import useReserveModal from "./useReserveModal"
import { Div, Button } from "@/app/atoms"
import axios from "axios"
import { getServerUrl } from "@/app/types/utils/getServerUrl"

export default function ApproveModal(){

  const {
    dateState,
    setDateState,
    timeState,
    setTimeState,
    handleModalOpen,
  } = useReserveModal()

  const approveHandle = async () => {
    try {
      const response = await axios.post(getServerUrl('/professor-appointments/1'),{
        "status": "APPROVED"
      })
      console.log(response)
    }
    catch (error) {
      console.log(error)
    }
  }

  return(
    <Div className="w-96 h-fullh flex flex-col justify-center items-center">
    <p>{dateState} 요일 {timeState} 시간 예약</p>   
    <p>학생이 상담신청을 하였습니다.</p>
    <Div className="flex">
      <Button className="w-20 h-10 bg-secondary" onClick={approveHandle}>승인</Button>
      <Button className="w-20 h-10 bg-accent" onClick={approveHandle}>거부</Button>
      <Button className="w-20 h-10 bg-primary" onClick={handleModalOpen}>확인</Button>
    </Div>
  </Div>
  )
}
