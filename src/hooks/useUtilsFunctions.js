export const createRandomNum = (maxNum) => {
  return Math.floor(Math.random() * maxNum) + 1;
};

export const createArrOfRandomNum = (numofImages, totalImages) => {
  const arrOfRN = [];
  for (let i = 0; i < numofImages; ) {
    const RN = createRandomNum(totalImages);
    if (!arrOfRN.includes(RN)) {
      arrOfRN.push(RN);
      i++;
    }
  }
  return arrOfRN;
};

export const createArrOfRandomNumForPlayer = (
  numOfImagesOnCard,
  totalImagesDB,
  sharedImageId,
  centralCradsIdsArr
) => {
  const numOfImagesMinusOne = numOfImagesOnCard - 1;
  const arrOfRN = [];
  for (let i = 0; i < numOfImagesMinusOne; ) {
    let RN = createRandomNum(totalImagesDB);
    if (!centralCradsIdsArr.includes(RN) && !arrOfRN.includes(RN)) {
      arrOfRN.push(RN);
      i++;
    }
  }
  arrOfRN.push(sharedImageId);
  return arrOfRN;
};
