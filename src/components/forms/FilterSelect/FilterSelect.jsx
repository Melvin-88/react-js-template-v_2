import React from 'react';
import Select from 'react-select';

export default function(props) {
    return (
        <div className={props.filterSelect}>
            <Select
                clearable={false}
                value={props.value}
                onChange={props.handleChange}
                placeholder={props.placeholder}
                options={ props.options }
            />
        </div>
    );
}