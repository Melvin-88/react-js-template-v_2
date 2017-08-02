import React from 'react';

export default function(props) {
    return (
        <div className={props.searchField}>
            <i className="icon-search" />
            <input
                onChange={props.handleChange}
                value={props.value}
                placeholder={props.placeholder}
            />
        </div>
    )
}