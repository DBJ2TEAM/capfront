/** @jsxImportSource @emotion/react */
import TimeTable from "@/app/organisms/Timetable/timeTable"
import ContentModal from "@/app/molecules/Modal/ContentModal/ContentModal"
import ReserveModal from "@/app/organisms/Timetable/ReserveModal/ReserveModal"
import { contentModalAtom } from "@/app/molecules/Modal/ContentModal/ContentModalAtom"
import { useAtomValue } from "jotai"
import useReserveModal from "@/app/organisms/Timetable/ReserveModal/useReserveModal"
import axios from "axios"
import { getServerUrl } from "@/app/types/utils/getServerUrl"
import { useEffect } from "react"
import ApproveModal from "@/app/organisms/Timetable/ReserveModal/ApproveModal"

export default function Consult(){
  const {
    dateState,
    setDateState,
    timeState,
    setTimeState,
    handleModalOpen,
  } = useReserveModal()
  
  const postEquipment = async () => {
    try {
      const response = await axios.post(getServerUrl('/equipment'),
      {
        'day':dateState,
        'time':timeState,
        'euipment':"1",
      })
      console.log(response.data)
    }
    catch (error) {
      console.log(error)
    }
  } 

  const getEquipment = async () => {
    try {
      const response = await axios.get(getServerUrl('/equipment'))
      const data = response.data
      console.log(data)
    }
    catch (error) {
      console.log(error)
    }
  }

  const modalState = useAtomValue(contentModalAtom);
  const isModalOpen = modalState.isContentModalOpen;

  useEffect(()=> {
    getEquipment()
  })
  return(
    <div>
      <div>
        장비 예약 페이지
        <div css={timeTable}>
          <TimeTable
            title={"장비 예약"}
          />
        </div>
      </div>
      {
        isModalOpen ?
        <ContentModal content={() => { return <ApproveModal/>}}/>
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