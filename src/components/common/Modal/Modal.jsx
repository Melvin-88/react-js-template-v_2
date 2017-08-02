import React, { Component } from 'react';

export default class Modal extends Component {

  render(){
    const {
      show,
      handleClose,
      children
    } = this.props;
    return (
      <div className='' onClick={handleClose}>
        <div onClick={(e) => e.stopPropagation()} >
          { children }
          <a onClick={handleClose}>
            <i className="icon-cancel" />
          </a>
        </div>
      </div>
    );
  }
}
