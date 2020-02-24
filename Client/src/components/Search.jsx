import React from 'react';

export const Search = (props) => {
    return (
        <div>
            <input className="search" onChange={props.handleChange} placeholder="Enter search term" disabled={(props.disabled)? "disabled" : ""}/>
        </div>
    )
}