import React, { Component } from "react";
import { connect } from "react-redux";
import { debounce } from "lodash";
import { datGhe } from "./Redux/action";

class RowSeat extends Component {
  // Tạo một hàm xử lý sự kiện debounce để giảm số lần gọi
  handleSeatClick = debounce((ghe) => {
    this.props.datGhe(ghe);
  }, 300); // Thời gian chờ 300ms

  renderGhe = () => {
    const { hangGhe, selectedSeats } = this.props;
    return hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = ghe.daDat ? "gheDuocChon" : "";
      let cssGheDangDat = selectedSeats.some(
        (selectedGhe) => selectedGhe.soGhe === ghe.soGhe
      )
        ? "gheDangChon"
        : "";

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
            disabled={ghe.daDat}
            className={`seats ${cssGheDaDat} ${cssGheDangDat}`}
            key={index}
            onClick={() => this.handleSeatClick(ghe)} // Sử dụng hàm xử lý sự kiện debounce
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
    selectedSeats: state.selectedSeats,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datGhe: (ghe) => {
      dispatch(datGhe(ghe));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RowSeat);
