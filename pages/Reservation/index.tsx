/** @jsxImportSource @emotion/react */
import { RESERVATIONITEM } from "./constant"
import ItemCard from "./molecules/itemCard"
import { Navbar } from "@/app/organisms";
import { Layout } from "@/app/templates/Layout";

export default function ReservationTemplate(){
  return(
    <Layout>
      <div css={mainLayout}>
      <div css={reservationTextStlye}>
        예약하기
      </div>
      <div css={layout}>
        {
          RESERVATIONITEM.map((item) => {
            return(
              <ItemCard
                icon={item.icon}
                item={item.title} 
                key={item.id}
              />
            )
          })
        }
      </div>
    </div>  
    </Layout>
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