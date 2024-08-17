import { useState } from "react";

const SingleCard = ({ cardObj, isplayerCard }) => {
const [cardIsMatch,setCardIsMatch]=useState(false)
const handleCheckMatch =()=>{
setCardIsMatch(cardObj.match)
}
if(isplayerCard){
  return (
    <div className={cardIsMatch?"card-is-match imageDiv card-player":"imageDiv card-player "}   style={{cursor:'pointer'}} onClick={handleCheckMatch}>
      <img src={cardObj.src} alt={cardObj.alt} />
    </div>
  ); 
}

return (
  <div className="imageDiv">
    <img src={cardObj.src} alt={cardObj.alt} />
  </div>
);

};

export default SingleCard