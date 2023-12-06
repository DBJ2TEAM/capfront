/** @jsxImportSource @emotion/react */

interface PropsType {
  item: string;
  icon: string;
}

export default function ItemCard({item, icon}: PropsType){
  return(
    <div css={cardBorder}>
      <div css={iconBox}>
        <img src={icon}/>
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

const iconBox = {
  height: "90%",
}