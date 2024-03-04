// action.js
export const SELECT_SEAT = "SELECT_SEAT";

export const selectSeat = (seat) => {
  return {
    type: SELECT_SEAT,
    payload: seat,
  };
};
