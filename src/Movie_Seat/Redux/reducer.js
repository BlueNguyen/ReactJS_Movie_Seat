// reducer.js
import { DAT_GHE, XOA_GHE, XOA_TAT_CA_GHE } from "./action";

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
        state.selectedSeats = danhSachGheDangDat;
      }

      return { ...state };

    case XOA_GHE:
      return {
        ...state,
        selectedSeats: state.selectedSeats.filter(
          (seat) => seat.soGhe !== action.payload
        ),
      };

    case XOA_TAT_CA_GHE:
      return {
        ...state,
        selectedSeats: [],
      };

    default:
      return state;
  }
};



export default seatReducer;
