/** @jsxImportSource @emotion/react */
import { Button, Div } from "@/app/atoms"
import TimeTable from "@/app/organisms/Timetable/timeTable"
import ContentModal from "@/app/molecules/Modal/ContentModal/ContentModal"
import ApproveModal from "@/app/organisms/Timetable/ReserveModal/ApproveModal"
import { contentModalAtom } from "@/app/molecules/Modal/ContentModal/ContentModalAtom"
import { useAtomValue } from "jotai"
import { useEffect } from "react"
import axios from "axios"
import { getServerUrl } from "@/app/types/utils/getServerUrl"
import { getCookie } from "cookies-next"

export default function Consult(){
  const modalState = useAtomValue(contentModalAtom);
  const isModalOpen = modalState.isContentModalOpen;
  const id = getCookie('professorId')

  const getAppointment = async () => {
    try {
      const response = await axios.get(getServerUrl(`/appointments/timetable/professor/${id}`))
      console.log(response)
    }
    catch (error) {
      console.log(error)
    }
  } 

  const handleAppointment = async () => {
    try {
      const response = await axios.post(getServerUrl(`/professor-appointments/`), {
        "professor": id,
        "start_time": "2023-12-07T12:00:00Z", 
        "end_time": "2023-12-07T14:00:00Z"
      })
      console.log(response)
    }
    catch (error) {
      console.log(error)
    }
  } 

  useEffect(()=> {
    getAppointment()
  })



  return(
    <div>
      <div>
        상담 관리 페이지
        <div css={timeTable}>
          <TimeTable
            title={"상담 관리"}
          />
        </div>
        <Button onClick={handleAppointment}>예약 가능한 시간 만들기</Button>
      </div>
      {
        isModalOpen ?
        <ContentModal content={() => { 
          return (
            <ApproveModal/>
          )
        }}/>
        : null
      }
      
    </div>
  )
}

const timeTable = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}