// reducer.js
import { DAT_GHE } from "./action";

const initialState = {
  selectedSeats: [],
};

const seatReducer = (state = initialState, action) => {
  switch (action.type) {
    case DAT_GHE:
      let danhSachGheDangDat = [...state.selectedSeats];
      let index = danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.payload.soGhe
      );
      if (index !== -1) {
        danhSachGheDangDat.splice(index, 1);
        state.selectedSeats = danhSachGheDangDat;
      } else {
        danhSachGheDangDat.push(action.payload);
      }
      return { ...state };
    default:
      return state;
  }
};

export default seatReducer;
