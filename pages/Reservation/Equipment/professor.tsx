/** @jsxImportSource @emotion/react */
import TimeTable from "@/app/organisms/Timetable/timeTable"
import ContentModal from "@/app/molecules/Modal/ContentModal/ContentModal"
import { contentModalAtom } from "@/app/molecules/Modal/ContentModal/ContentModalAtom"
import { useAtomValue } from "jotai"
import useReserveModal from "@/app/organisms/Timetable/ReserveModal/useReserveModal"
import axios from "axios"
import { getServerUrl } from "@/app/types/utils/getServerUrl"
<<<<<<< HEAD
import { useEffect } from "react"

=======
import { useEffect, useState } from "react"
>>>>>>> ba07d23 ([feat] equipment reserve)
import ApproveModal from "@/app/organisms/Timetable/ReserveModal/ApproveModal"
import { Div, Button } from "@/app/atoms"

interface EquipmentProps {
  day: string;
  time: string;
  status: string;
  equipment: number;
}

export default function Consult(){
  const {
    dateState,
    setDateState,
    timeState,
    setTimeState,
    handleModalOpen,
  } = useReserveModal()

  const [appointments, setAppointments] = useState<EquipmentProps[]>([]);

  const getEquipment = async () => {
    try {
      const response = await axios.get(getServerUrl('/reservation/by-equipment/'))
      setAppointments(response.data)
    }
    catch (error) {
      console.log(error)
    }
  }
  const handleApprove = async (id:number) => {
    try {
      const response = await axios.put(getServerUrl(`/reservations/${id}/`), {
        "status":"APPROVED"
      });
    }
    catch (error) {
      console.log(error)
    }
  }
  const handleReject = async (id:number) => {
    try {
      const response = await axios.put(getServerUrl(`/reservations/${id}/`), {
        "status":"REJECTED"
      });
    }
    catch (error) {
      console.log(error)
    }
  }

  const modalState = useAtomValue(contentModalAtom);
  const isModalOpen = modalState.isContentModalOpen;

  useEffect(()=> {
    getEquipment()
  }, [])
  return(
    <div>
      <div>
<<<<<<< HEAD
        장비 예약 관리 페이지
=======
      <Div className="w-96 h-fullh">
          <ul>
            {appointments.map((appointment, index) => (
              <li key={index}>
                <p>Date: {appointment.day}</p>
                <p>Time: {appointment.time}</p>
                <Button onClick={() => handleApprove(appointment.equipment)}>승인</Button>
                <Button onClick={() => handleReject(appointment.equipment)}>거절</Button>
              </li>
            ))}
          </ul>
        </Div>
        장비 예약 페이지
>>>>>>> ba07d23 ([feat] equipment reserve)
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