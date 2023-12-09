/** @jsxImportSource @emotion/react */
import TimeTable from "@/app/organisms/Timetable/timeTable"
import ContentModal from "@/app/molecules/Modal/ContentModal/ContentModal"
import ReserveModal from "@/app/organisms/Timetable/ReserveModal/ReserveModal"
import { contentModalAtom } from "@/app/molecules/Modal/ContentModal/ContentModalAtom"
import { useAtomValue } from "jotai"

export default function Consult(){
  const modalState = useAtomValue(contentModalAtom);
  const isModalOpen = modalState.isContentModalOpen;
  return(
    <div>
      <div>
        상담 예약 페이지
        <div css={timeTable}>
          <TimeTable
            title={"상담"}
          />
        </div>
      </div>
      {
        isModalOpen ?
        <ContentModal content={() => { return <ReserveModal/>}}/>
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