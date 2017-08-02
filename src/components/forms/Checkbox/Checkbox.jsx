import React, { Component } from 'react';

export default function(props) {
  return (
    <div onClick={props.handleChange}>
        <div className={props.checkbox} />
        <i className={'icon-ok ' + props.checkboxIcon} />
        <label>{props.label}</label>
        <span className={props.infoBubble}>{props.info}</span>
    </div>
  );
}
