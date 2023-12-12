/** @jsxImportSource @emotion/react */

export default function DateTransfer({date}: {date: string}){
  switch(date){
    case "Monday":
      return(
        <div css={box}>
          월
        </div>
      )
    case "Tuesday":
      return(
        <div css={box}>
          화
        </div>
      )
    case "Wednesday":
      return(
        <div css={box}>
          수
        </div>
      )
    case "Thursday":
      return(
        <div css={box}>
          목
        </div>
      )
    case "Friday":
      return(
        <div css={box}>
          금
        </div>
      )
    case "Saturday":
      return(
        <div css={box}>
          토
        </div>
      )
    case "Sunday":
      return(
        <div css={box}>
          일
        </div>
      )
  }
}

const box = {
  height: "30px",
  borderBottom: "1px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}