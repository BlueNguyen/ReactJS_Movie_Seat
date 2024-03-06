import React, { Component } from 'react'
import { connect } from "react-redux";
import { xoaGhe, xoaTatCaGhe } from './Redux/action';


class InfoBookSeat extends Component {
  // Thêm một biến cục bộ để kiểm soát trạng thái của sự kiện click khắc phục việc CLICK 1 LẦN MÀ XOÁ 2 3 DỮ LIỆU
  isDeleting = false;

  handleDeleteSeat = (soGhe) => {
    // Kiểm tra nếu sự kiện click đang được xử lý, không làm gì cả
    if (this.isDeleting) return;

    // Đặt biến isDeleting thành true để chỉ ra rằng sự kiện click đang được xử lý
    this.isDeleting = true;

    this.props.xoaGhe(soGhe);

    // Sau khi xóa ghế xong, đặt lại biến isDeleting thành false để chuẩn bị cho lần click tiếp theo
    setTimeout(() => {
      this.isDeleting = false;
    }, 100);
  };

  calculateTotalPrice = () => {
    const { selectedSeats } = this.props;
    let totalPrice = 0;
    selectedSeats.forEach((seat) => {
      totalPrice += seat.gia;
    });
    totalPrice = totalPrice.toLocaleString("en-US") + "đ";
    return totalPrice;
  };

  handlePay = () => {
    this.props.xoaTatCaGhe(); // Xóa tất cả các ghế đã chọn
    // Thực hiện điều hướng đến màn hình trống
    // Ví dụ: this.props.history.push('/man-hinh-trong');
  };

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
                <th>
                  <i class="fa fa-cog"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              {selectedSeats.map((seat, index) => (
                <tr key={index}>
                  <td>{seat.soGhe}</td>
                  <td>{seat.gia}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.handleDeleteSeat(seat.soGhe)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tr>
              <td>Tổng tiền</td>
              <td>{this.calculateTotalPrice()}</td>
              <td>
                <button className="btn btn-success" onClick={this.handlePay}>Thanh toán</button>
              </td>
            </tr>
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

const mapDispatchToProps = (dispatch) => {
  return {
    xoaGhe: (soGhe) => {
      dispatch(xoaGhe(soGhe));
    },

    xoaTatCaGhe: () => {
      dispatch(xoaTatCaGhe());
    },
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(InfoBookSeat)
