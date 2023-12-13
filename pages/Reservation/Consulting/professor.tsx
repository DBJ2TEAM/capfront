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
import ButtonColor from "@/app/molecules/ButtonColor"

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
    <Div className="flex flex-col items-center">
        <Div className="bg-primary w-96 h-fullh mt-10">
          <Div className="grid-rows-2 p-5">
          <Title text="Shedule" className="text-accent"></Title>
            <ul className="flex items-center justify-center text-white mt-5">
              {appointments.map((appointment, index) => (
                <li key={index}>
                  <p>Day: {appointment.day}</p>
                  <p>Time: {appointment.time}</p>
                  <Div className="">
                    <Button onClick={() => handleApprove(appointment.appointment_id)} className="bg-accent text-primary w-10">승인</Button>
                    <Button onClick={() => handleReject(appointment.appointment_id)} className="bg-secondary text-primary w-10">거절</Button>
                  </Div>
                </li>
              ))}
            </ul>
          </Div>

        </Div>
        <Div className="flex w-full items-center justify-center">
          <TimeTable
            title={"상담 관리"}
          />
        </Div>
      {
        isModalOpen ?
        <ContentModal content={() => { 
          return (
            <ApproveModal/>
          )
        }}/>
        : null
      }
      
    </Div>
  )
}