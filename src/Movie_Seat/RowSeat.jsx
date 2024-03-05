// RowSeat.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import { datGhe } from "./Redux/action";

class RowSeat extends Component {
  renderGhe = () => {
    const { hangGhe } = this.props;
    return hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disabled = false;
      // Trạng thái ghế đã bị người khác đặt rồi
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disabled = true;
      }
      // Trạng thái ghế đang đặt
      let cssGheDangDat = "";
      let indexGheDangDat = this.props.selectedSeats.findIndex(
        (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
      );
      if (indexGheDangDat !== -1) {
        cssGheDangDat = "gheDangChon";
      }

      // hàng ghế đầu tiên 1 2 3...12
      if (hangGhe.hang === "") {
        return (
          <span key={index} className="rowNumber">
            <span style={{ margin: "0 18px" }}>{ghe.soGhe}</span>
          </span>
        );
      } else {
        return (
          <button
            disabled={disabled}
            className={`seats ${cssGheDaDat} ${cssGheDangDat}`}
            key={index}
            onClick={() => this.props.datGhe(ghe.soGhe)} // Dispatch action when seat is clicked
          >
            {ghe.soGhe}
          </button>
        );
      }
    });
  };

  render() {
    return (
      <div className="text-light text-left ml-5 mt-3">
        {this.props.hangGhe.hang}
        {this.renderGhe()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedSeats: state.selectedSeats, // selectedSeats là một phần của Redux state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datGhe: (ghe) => {
      dispatch(datGhe(ghe)); // Dispatch action creator datGhe
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RowSeat); // Connect to Redux store
