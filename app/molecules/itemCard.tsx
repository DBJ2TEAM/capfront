/** @jsxImportSource @emotion/react */
import useReservation from "../templates/Resevation/useReservation";
import Image, { StaticImageData } from 'next/image'

interface PropsType {
  item: string;
  icon: StaticImageData;
}

export default function ItemCard({item, icon}: PropsType){

  const { handleClick } = useReservation(item)

  return(
    <div css={cardBorder} onClick={handleClick}>
      <div css={iconBox}>
        <Image src={icon} alt="상담" css={image}/>
      </div>
      <div css={textBox}>
        {item}
      </div>
    </div>
  )
}

const cardBorder = {
  width: "20%",
  height: "40vh",
  border: "1px solid black",
  padding: "8px",
  borderRadius: "15px",
  boxShadow: "1px 1px 1px 1px gray",
  "&:hover": {
    boxShadow: "5px 5px 5px 5px gray",
  },
}

const textBox = {
  borderTop: "1px solid black",
  paddingTop: "8px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const image = {
  width: "150px",
  height: "150px",
}

const iconBox = {
  height: "90%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}