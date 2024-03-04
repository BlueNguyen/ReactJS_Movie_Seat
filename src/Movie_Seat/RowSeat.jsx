import React, { Component } from 'react'

export default class RowSeat extends Component {
  
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat='';
      if (ghe.daDat) {
        cssGheDaDat= 'gheDuocChon'
      }
      if (this.props.hangGhe.hang === "") {
        return (
          <span key={index} className="rowNumber">
            <span style={{margin: "0 18px"}}>{ghe.soGhe}</span>
          </span>
        );
      } else {
        return (
          <button className={`seats ${cssGheDaDat}`} key={index}>
            {ghe.soGhe}
          </button>
        );
      }
    })
  }


  render() {
    return (
      <div className='text-light text-left ml-5 mt-3'> 
        {this.props.hangGhe.hang}
        {this.renderGhe()}
      </div>
    )
  }
}

