import React from 'react';

export default function (props) {
  return (
    <button
      className={props.class}
      onClick={props.handleClick}
      type={props.type}
      disabled={props.disabled}
    >
    {props.icon &&
    <span className={props.buttonIcon}><i className={props.icon} >{props.icon_label && props.icon_label}</i>&nbsp;</span>
    }
      {props.label}
    </button>
  )
}
