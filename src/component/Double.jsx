import { useEffect, useState } from "react";
import { images } from "../assets/imagePool";
import { createRandomNum,createArrOfRandomNum,createArrOfRandomNumForPlayer } from "../hooks/useUtilsFunctions";
import { BuildCardDetails } from "../hooks/useUtils";
import SingleCard from "./SingleCard";
const Double = () => {
  //GLOBAL varibles
  let ArrofIDsforCentralCard = []; //for building the central card
  const TotalnumberOfImagesDB = images.length;
  const [numImagesOnCard, setNumImagesOnCard] = useState(8);
  const [centralCardArray, setCentralCardArray] = useState([]);
  const [playerCardArr, setPlayerCardArray] = useState([]);
  const [sharedElId ,setSharedEld] = useState(null)
  //Build the central card
  useEffect(() => {
    if (images && ArrofIDsforCentralCard.length === 0) {
      ArrofIDsforCentralCard = createArrOfRandomNum(
        numImagesOnCard,
        TotalnumberOfImagesDB
      );
      let arrayOfImgObj = [];
      arrayOfImgObj = ArrofIDsforCentralCard.map((id) => {
        const imgObj = new BuildCardDetails(
          id,
          `img/${images[id - 1].img}.svg`
        );
        imgObj.size();
        return imgObj;
      });
      setCentralCardArray(arrayOfImgObj);
        buildPlayerCards();
    }
  }, []);
  //build player card
 function buildPlayerCards(){
   //select random image from the central card
   setSharedEld((prev)=>{
    prev = ArrofIDsforCentralCard[createRandomNum(numImagesOnCard) - 1];
    return prev
   })
   const sharedElId =
   ArrofIDsforCentralCard[createRandomNum(numImagesOnCard) - 1];
   let arrOfPlayerId = createArrOfRandomNumForPlayer(
     numImagesOnCard,
     TotalnumberOfImagesDB,
     sharedElId,
     ArrofIDsforCentralCard
   );
     arrOfPlayerId = arrOfPlayerId.map((id) => {
       const singleCard = new BuildCardDetails(images[id - 1]["id"],`img/${images[id - 1].img}.svg`);
       singleCard.size().pos(arrOfPlayerId, TotalnumberOfImagesDB).isCardMatch(sharedElId);
       return singleCard;
     });
    arrOfPlayerId.sort((a, b) => {
       return a.position - b.position;
     });
   setPlayerCardArray(arrOfPlayerId)
 };
  return (
  <div className="double">
  <section id="central-cards-container">
  Central card
  {centralCardArray &&
    centralCardArray.map((cardObj) => (
      <SingleCard key={cardObj.id} cardObj={cardObj} />
    ))}
  </section>
  <section id="player-cards-container">
    <div>
    Player
    {playerCardArr && sharedElId&&
    playerCardArr.map((cardObj) => (
    <SingleCard key={cardObj.id+1} cardObj={cardObj}  isplayerCard={true} />
      ))}
    </div>
  </section>
    </div>
  );
};

export default Double;
