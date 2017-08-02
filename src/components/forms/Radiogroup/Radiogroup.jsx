import React from 'react';
import { RadioGroup, RadioButton } from 'react-custom-radio';

export default function(props) {
  return (
    <RadioGroup
        name={props.name}
        selectedValue={props.selected}
        onChange={props.handleChange}
        className={props.radiogroup}
    >
    <label className='inputLabel inputLabel_default'>{props.label}</label>
    {
      props.options.map((option, i) => {
        return (
          <RadioButton value={option.value} className={props.radio} key={'option-' + i}>
              {option.label}
          </RadioButton>
        )
      })
    }
    </RadioGroup>
  );
}
