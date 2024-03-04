// reducer.js
import { SELECT_SEAT } from "./action";

const initialState = {
  selectedSeats: [],
};

const seatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SEAT:
      return {
        ...state,
        selectedSeats: [...state.selectedSeats, action.payload],
      };
    default:
      return state;
  }
};

export default seatReducer;
