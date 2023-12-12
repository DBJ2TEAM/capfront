/** @jsxImportSource @emotion/react */
import TimeTable from "@/app/organisms/Timetable/timeTable"
import ContentModal from "@/app/molecules/Modal/ContentModal/ContentModal"
import { contentModalAtom } from "@/app/molecules/Modal/ContentModal/ContentModalAtom"
import { useAtomValue } from "jotai"
import ApproveModal from "@/app/organisms/Timetable/ReserveModal/ApproveModal"

export default function Consult(){
  const modalState = useAtomValue(contentModalAtom);
  const isModalOpen = modalState.isContentModalOpen;
  return(
    <div>
      <div>
        장비 예약 관리 페이지
        <div css={timeTable}>
          <TimeTable
            title={"장비 예약"}
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