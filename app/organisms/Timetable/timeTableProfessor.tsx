/** @jsxImportSource @emotion/react */
import { DAYOFTHEWEEK, TIMELABLE } from "@/app/organisms/Timetable/constants"
import DateTransfer from "@/app/molecules/DateTransfer"
import useReserveModal from "./ReserveModal/useReserveModal"

interface PropsType{
  title: string
}

const DUMMY_RESERVATION: Array<{[key: string]: string}> = [
  {"Tuesday": "11:00 ~"},
  {"Tuesday": "12:00 ~"},
  {"Friday": "13:00 ~"},
  {"Monday": "15:00 ~"},
]

export default function TimeTableProfessor({title}: PropsType){
  const {
    setDateState,
    setTimeState,
    handleModalOpen,
  } = useReserveModal()
  return(
    <div css={table}>
      <div>
        {title} 시간표
      </div>
      <div css={timeTable}>
        <div css={time}>
          {
            TIMELABLE.map((time: string) => {
              return(
                <div css={box}>{time}</div>
              )
            })
          }
        </div>
        <div css={dayOfTheWeek}>
          {
            DAYOFTHEWEEK.map((date: string) => {
              return(
                <div css={dateBox}>
                  <DateTransfer date={date}/>
                  {
                    TIMELABLE.map((time: string) => {
                      const isReserved = DUMMY_RESERVATION.find((reservation) => {
                        return reservation.hasOwnProperty(date) && reservation[date] === time;
                      });
                      const isTimeReserved = Boolean(isReserved);
                      return <div 
                        css={timeBox(isTimeReserved)}
                        onClick={() => {
                          if(!isTimeReserved){
                            handleModalOpen(); setDateState(date), setTimeState(time)
                          }
                        }}
                      >
                      </div>;
                    })
                  }
                </div>
              )
            })
          }
        </div>
      </div>
      
    </div>
  )
}

const table = {
  width: "70%",
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "center",
  alignItems: "center",
}

const timeTable = {
  width: "80%",
  margin: "40px",
  display: "flex",
  flexDirection: "row" as const,
  borderRight: "1px solid black",
}

const dayOfTheWeek = {
  width: "100%",
  display: "flex",
  flexDirection: "row" as const,
  justifyContent: "space-around",
}

const time = {
  marginTop: "30.56px",
  borderTop: "1px solid black",
  borderLeft: "1px solid black",
}

const box = {
  width: "100%",
  height: "50px",
  borderBottom: "1px solid black",
}

const timeBox = (isReserved: boolean) =>  ({
  width: "100%",
  height: "50px",
  borderBottom: "1px solid black",
  backgroundColor: isReserved ? "red" : "",
  cursor: isReserved ? "" : "pointer",
})

const dateBox = {
  width: "100%",
  borderTop: "1px solid black",
  borderLeft: "1px solid black", 
}