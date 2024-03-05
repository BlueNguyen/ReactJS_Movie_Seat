import React, { Component } from 'react'
import { connect } from "react-redux";


class InfoBookSeat extends Component {
  render() {
    const { selectedSeats } = this.props;
    return (
      <div className="text-light">
        <button className="gheDuocChon"></button>{" "}
        <span className="mr-4">Selected Seat</span>
        <button className="gheDangChon"></button>{" "}
        <span className="mr-3">Selecting Seat</span>
        <button className="seats"></button> <span className="">Empty Seat</span>
        <div>
          <table class="table mt-5 text-light text-center" border={2}>
            <thead>
              <tr>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <div className="text-light">
                {/* Render selected seats */}
                <ul>
                  {selectedSeats.map((seat, index) => (
                    <li key={index}>{seat.soGhe}</li>
                  ))}
                </ul>
              </div>

              {selectedSeats.map((seat, index) => (
                <tr key={index}>
                  <td>{seat.soGhe}</td>
                  <td>{seat.gia}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedSeats: state.selectedSeats,
  };
};

export default connect(mapStateToProps)(InfoBookSeat)
