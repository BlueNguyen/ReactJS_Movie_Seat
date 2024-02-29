// Movie_Seat.jsx
import React from "react";
import { connect } from "react-redux";
import { addTicket, removeTicket } from "./Redux/action";


class Movie_Seat extends React.Component {
  handleSeatClick = (seatNumber) => {
    const { movieName, tickets } = this.props;
    const isSeatBooked = tickets.some(
      (ticket) => ticket.seatNumber === seatNumber
    );

    if (!isSeatBooked) {
      this.props.addTicket(movieName, seatNumber);
    } else {
      this.props.removeTicket(movieName, seatNumber);
    }
  };

  render() {
    return (
      <div>
        <h1>Movie Seat Selection</h1>
        <div className="container">
          <div className="w3ls-reg">
            {/* input fields */}
            <div className="inputForm">
              <h2>fill the required details below and select your seats</h2>
              <div className="mr_agilemain">
                <div className="agileits-left">
                  <label>
                    {" "}
                    Name
                    <span>*</span>{" "}
                  </label>
                  <input type="text" id="Username" required />
                </div>
                <div className="agileits-right">
                  <label>
                    {" "}
                    Number of Seats
                    <span>*</span>{" "}
                  </label>
                  <input type="number" id="Numseats" required min={1} />
                </div>
              </div>
              <button onClick={() => this.props.takeData()}>
                Start Selecting
              </button>
            </div>
            {/* //input fields */}
            {/* seat availabilty list */}
            <ul className="seat_w3ls">
              <li className="smallBox greenBox">Selected Seat</li>
              <li className="smallBox redBox">Reserved Seat</li>
              <li className="smallBox emptyBox">Empty Seat</li>
            </ul>
            {/* seat availabilty list */}
            {/* seat layout */}
            <div
              className="seatStructure txt-center"
              style={{ overflowX: "auto" }}
            >
              <p id="notification" />
              <table id="seatsBlock">
                <tbody>
                  <tr>
                    <td />
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td />
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                  </tr>
                  {/* Your seat layout */}
                </tbody>
              </table>
              <div className="screen">
                <h2 className="wthree">Screen this way</h2>
              </div>
              <button onClick={() => this.props.updateTextArea()}>
                Confirm Selection
              </button>
            </div>
            {/* //seat layout */}
            {/* details after booking displayed here */}
            <div
              className="displayerBoxes txt-center"
              style={{ overflowX: "auto" }}
            >
              <table className="Displaytable w3ls-table" width="100%">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Number of Seats</th>
                    <th>Seats</th>
                  </tr>
                  <tr>
                    <td>
                      <textarea id="nameDisplay" defaultValue={""} />
                    </td>
                    <td>
                      <textarea id="NumberDisplay" defaultValue={""} />
                    </td>
                    <td>
                      <textarea id="seatsDisplay" defaultValue={""} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* //details after booking displayed here */}
          </div>
        </div>
        <div className="copy-wthree">
          <p>
            © 2018 Movie Seat Selection . All Rights Reserved | Design by{" "}
            <a href="https://w3layouts.com/" target="_blank">
              W3layouts
            </a>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tickets: state.tickets,
});

const mapDispatchToProps = (dispatch) => ({
  addTicket: (movieName, seatNumber) =>
    dispatch(addTicket(movieName, seatNumber)),
  removeTicket: (movieName, seatNumber) =>
    dispatch(removeTicket(movieName, seatNumber)),
  takeData: () => dispatch({ type: "TAKE_DATA" }), 
  updateTextArea: () => dispatch({ type: "UPDATE_TEXT_AREA" }), 
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie_Seat);
