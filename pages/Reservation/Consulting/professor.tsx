/** @jsxImportSource @emotion/react */
import { Button, Div, Title } from "@/app/atoms"
import TimeTable from "@/app/organisms/Timetable/timeTable"
import ContentModal from "@/app/molecules/Modal/ContentModal/ContentModal"
import ApproveModal from "@/app/organisms/Timetable/ReserveModal/ApproveModal"
import { contentModalAtom } from "@/app/molecules/Modal/ContentModal/ContentModalAtom"
import { useAtomValue } from "jotai"
import { useEffect , useState,} from "react"
import axios from "axios"
import { getServerUrl } from "@/app/types/utils/getServerUrl"
import { getCookie } from "cookies-next"

interface AppointProps {
  day: string;
  time: string;
  status: string;
  appointment_id: number;
}

export default function Consult(){
  const modalState = useAtomValue(contentModalAtom);
  const isModalOpen = modalState.isContentModalOpen;
  const [appointments, setAppointments] = useState<AppointProps[]>([]);
  const professorId = getCookie('professorId');


  const getAppointment = async () => {
    try {
      const response = await axios.get<AppointProps[]>(getServerUrl(`/student-appointment/professor/${professorId}`));
      setAppointments(response.data);
      console.log(response.data)
    }
    catch (error) {
      console.log(error)
    }
  } 

  useEffect(()=> {
    getAppointment()
  }, [])

  const handleApprove = async (id:number) => {
    try {
      const response = await axios.put(getServerUrl(`/student-appointments/${id}/`), {
        "status":"APPROVED"
      });
    }
    catch (error) {
      console.log(error)
    }
  }
  const handleReject = async (id:number) => {
    try {
      const response = await axios.put(getServerUrl(`/student-appointments/${id}/`), {
        "status":"REJECTED"
      });
    }
    catch (error) {
      console.log(error)
    }
  }

  return(
    <div>
      <div>
        <Title text="상담 관리"></Title>
        <Div className="w-96 h-fullh">
          <ul>
            {appointments.map((appointment, index) => (
              <li key={index}>
                <p>Date: {appointment.day}</p>
                <p>Time: {appointment.time}</p>
                <Button onClick={() => handleApprove(appointment.appointment_id)}>승인</Button>
                <Button onClick={() => handleReject(appointment.appointment_id)}>거절</Button>
              </li>
            ))}
          </ul>
        </Div>
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