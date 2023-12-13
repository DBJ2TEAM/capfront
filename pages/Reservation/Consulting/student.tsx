/** @jsxImportSource @emotion/react */
import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { getServerUrl } from "@/app/types/utils/getServerUrl"
import useConsult from '@/app/templates/Resevation/useConsult';
import TimeTable from "@/app/organisms/Timetable/timeTable"
import ContentModal from "@/app/molecules/Modal/ContentModal/ContentModal"
import ReserveModal from "@/app/organisms/Timetable/ReserveModal/ReserveModal"
import { contentModalAtom } from "@/app/molecules/Modal/ContentModal/ContentModalAtom"
import { useAtomValue } from "jotai"

export default function Consult(){
  const modalState = useAtomValue(contentModalAtom);
  const isModalOpen = modalState.isContentModalOpen;
  const { list } = useConsult({path: 'professors'})
  const [selectedItem, setSelectedItem] = useState<any>()
  const [timeData, setTimeData] = useState<any>()

  const handleChange = (e: any) => {
    const selectedValue = e.target.value;
    setSelectedItem(selectedValue)
  }
  const getTimeData = async () => {
    try {
      const response = await axios.get(getServerUrl(`/student-appointment/professor_s/${selectedItem}`))
      setTimeData(response.data)
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTimeData();
  }, [selectedItem])

  return(
    <div>
      <div>
        상담 예약 페이지
        <div css={timeTable}>
          <select onChange={handleChange}>
            {
              list?.map((item: any) => {
                return(
                  <option key={item.id} value={item.id}>{item.name}</option>
                )
              })
            }
          </select>
          {
            timeData ? 
            <TimeTable
            title={"상담"}
            timeData={timeData}
          /> :
          null
          }
        </div>
      </div>
      {
        isModalOpen ?
        <ContentModal content={() => { return <ReserveModal path={`student-appointments/`} p_id={selectedItem}/>}}/>
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