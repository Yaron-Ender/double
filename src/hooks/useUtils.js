import { createRandomNum } from "./useUtilsFunctions";

class BuildCardDetails {
  constructor(id, img) {
     this.src = img;
    this.alt = "";
    this.id = id;
    this.size;
    this.position;
    this.match=false;
  }
  size() {
    this.size = (Math.floor(Math.random() * 3) + 1) * 30;
    return this;
  }
  pos(cardsArray, TotalnumberOfImagesDB) {
    // central card consists few undefined item, so here we are elimanate all the undefined
    const copyArr = cardsArray.filter((item) => item);
  const createPos = () => {
    let positionNum = createRandomNum(TotalnumberOfImagesDB);
    let findNum = copyArr.find((item) => item.position == positionNum);
    //if there is item with that position so generate another position otherwise sign it to the position property
    findNum ? createPos() : (this.position = positionNum);
  };
  createPos();
  return this;
  }
 isCardMatch(sharedElId){
  if(this.id===sharedElId){
  this.match=true
  }
   return this;
 }
}

export { BuildCardDetails };
