// action.js
import { ADD_TICKET, REMOVE_TICKET } from "./constant";

export const addTicket = (movieName, seatNumber) => ({
  type: ADD_TICKET,
  payload: {
    movieName,
    seatNumber,
  },
});

export const removeTicket = (movieName, seatNumber) => ({
  type: REMOVE_TICKET,
  payload: {
    movieName,
    seatNumber,
  },
});
