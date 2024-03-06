// Movie_Seat.jsx
import React from "react";
import InfoBookSeat from "./InfoBookSeat";
import danhSachGhe from "./danhSachGhe.json";
import RowSeat from "./RowSeat";
import { datGhe } from "./Redux/action";
import { connect } from "react-redux";



 class Movie_Seat extends React.Component {

  renderRowSeat = () => {
    return danhSachGhe.map((hangGhe,index) => {
      return <div key={index}>
        <RowSeat hangGhe={hangGhe}/>
      </div>
    })
  }

  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url(bgmovie.jpg)",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            position: "fixed",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div className="screen">
                  <h1 className="text-light display-4">MOVIE SEAT SELECTION</h1>
                  {this.renderRowSeat()}
                </div>
              </div>
              <div className="col-4">
                <h2 className="text-center p-5" style={{fontSize: '35px'}}>SELECTED SEATS LIST</h2>
                <InfoBookSeat/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectSeat: (ghe) => {
      dispatch(datGhe(ghe));
    },
  };
};

export default connect(null, mapDispatchToProps)(Movie_Seat);

