/** @jsxImportSource @emotion/react */

export default function DateTransfer({date}: {date: string}){
  switch(date){
    case "monday":
      return(
        <div css={box}>
          월
        </div>
      )
    case "tuesday":
      return(
        <div css={box}>
          화
        </div>
      )
    case "wednesday":
      return(
        <div css={box}>
          수
        </div>
      )
    case "thursday":
      return(
        <div css={box}>
          목
        </div>
      )
    case "friday":
      return(
        <div css={box}>
          금
        </div>
      )
    case "saturday":
      return(
        <div css={box}>
          토
        </div>
      )
    case "sunday":
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