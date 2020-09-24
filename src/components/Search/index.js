import React from "react";

function Search(props) {
    return (
        <div className="col c6 searchInput center-align">
            <input 
                onChange={props.handleInputChange}
                type="text"
                name="search"
                className="inputBox"
                placeholder="Search by name"/>
        </div>
    )
}

export default Search;