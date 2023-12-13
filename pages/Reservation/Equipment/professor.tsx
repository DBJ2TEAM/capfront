/** @jsxImportSource @emotion/react */
import TimeTable from "@/app/organisms/Timetable/timeTable";
import ContentModal from "@/app/molecules/Modal/ContentModal/ContentModal";
import { contentModalAtom } from "@/app/molecules/Modal/ContentModal/ContentModalAtom";
import { useAtomValue } from "jotai";
import useReserveModal from "@/app/organisms/Timetable/ReserveModal/useReserveModal";
import axios from "axios";
import { getServerUrl } from "@/app/types/utils/getServerUrl";
import { useEffect, useState } from "react";
import ApproveModal from "@/app/organisms/Timetable/ReserveModal/ApproveModal";
import { Div, Button, Title } from "@/app/atoms";

interface EquipmentProps {
  day: string;
  time: string;
  status: string;
  equipment: number;
}

export default function Consult() {
  const { dateState, setDateState, timeState, setTimeState, handleModalOpen } =
    useReserveModal();

  const [appointments, setAppointments] = useState<EquipmentProps[]>([]);

  const getEquipment = async () => {
    try {
      const response = await axios.get(
        getServerUrl("/reservation/by-equipment/")
      );
      setAppointments(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleApprove = async (id: number) => {
    try {
      const response = await axios.put(getServerUrl(`/reservations/${id}/`), {
        status: "APPROVED",
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleReject = async (id: number) => {
    try {
      const response = await axios.put(getServerUrl(`/reservations/${id}/`), {
        status: "REJECTED",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const modalState = useAtomValue(contentModalAtom);
  const isModalOpen = modalState.isContentModalOpen;

  useEffect(() => {
    getEquipment();
  }, []);
  return (
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
                  <Button
                    onClick={() => handleApprove(appointment.equipment)}
                    className="bg-accent text-primary w-10"
                  >
                    승인
                  </Button>
                  <Button
                    onClick={() => handleReject(appointment.equipment)}
                    className="bg-secondary text-primary w-10"
                  >
                    거절
                  </Button>
                </Div>
              </li>
            ))}
          </ul>
        </Div>
      </Div>
      <Div className="flex w-full items-center justify-center">
        <TimeTable title={"상담 관리"} />
      </Div>
      {isModalOpen ? (
        <ContentModal
          content={() => {
            return <ApproveModal />;
          }}
        />
      ) : null}
    </Div>
  );
}