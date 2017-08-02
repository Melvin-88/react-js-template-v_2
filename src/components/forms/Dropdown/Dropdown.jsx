import React from 'react';

export default function(props) {
  return (
    <div className={props.dropdown}>
      <ul>
        {
          props.options && props.options.map((option, i) => {
            return (
              <li
                key={'option_' + i}
                onClick={e => props.handleOptionSelect(option)}
              >{option.label}</li>
            )
          })
        }
      </ul>
    </div>
  );
}
