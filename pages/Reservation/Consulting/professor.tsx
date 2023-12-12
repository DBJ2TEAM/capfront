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

export default function Consult(){
  const modalState = useAtomValue(contentModalAtom);
  const isModalOpen = modalState.isContentModalOpen;

  const professorId = async () => {
    try {
      const response = await axios.post(getServerUrl('/professor-appointments/'), {
        "professor": 4,
        "start_time": "2023-12-06T19:00:00Z",
        "end_time": "2023-12-06T20:00:00Z"
      })
      console.log(response)
    }
    catch (error) {
      console.log(error)
    }
  } 

  useEffect(()=> {
    professorId()
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