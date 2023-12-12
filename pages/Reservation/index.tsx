/** @jsxImportSource @emotion/react */
import { StaticImageData } from "next/image";
import { RESERVATIONITEM } from "../../app/templates/Resevation/constant"; 
import ItemCard from "../../app/molecules/itemCard";
import { getCookie } from "cookies-next";

export default function Select(){
  const user: string = getCookie("role") || "";
  const token = getCookie("token") || "";

  return(
    <div className="h-fullh">
      <div css={mainLayout}>
      <div css={reservationTextStlye}>
        예약하기
      </div>
      <div css={layout}>
        {
          RESERVATIONITEM.map((item) => {
            return(
              <ItemCard
                icon={item.icon as StaticImageData}
                item={item.title} 
                user={user}
                key={item.id}
                token={token}
              />
            )
          })
        }
      </div>
    </div>  
    </div>
  )
}

const mainLayout = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "center",
  alignItems: "center",
}

const reservationTextStlye = {
  marginTop: "48px",
  fontSize: "24px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const layout = {
  marginTop: "36px",
  width: "85%",
  height: "100%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
}