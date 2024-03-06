// action.js
export const DAT_GHE = "DAT_GHE";

export const datGhe = (ghe) => {
  return {
    type: DAT_GHE, 
    payload: ghe,
  };
};

export const XOA_GHE = "XOA_GHE";

export const xoaGhe = (soGhe) => {
  return {
    type: XOA_GHE,
    payload: soGhe,
  };
};

export const XOA_TAT_CA_GHE = "XOA_TAT_CA_GHE";

export const xoaTatCaGhe = () => {
  return {
    type: XOA_TAT_CA_GHE,
  };
};




